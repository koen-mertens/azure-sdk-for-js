/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import type { PipelineRequest, PipelineResponse, SendRequest } from "@azure/core-rest-pipeline";
import type * as coreAuth from "@azure/core-auth";
import {
  PolicyDefinitionsImpl,
  PolicyDefinitionVersionsImpl,
  PolicySetDefinitionsImpl,
  PolicySetDefinitionVersionsImpl,
  PolicyAssignmentsImpl,
} from "./operations/index.js";
import type {
  PolicyDefinitions,
  PolicyDefinitionVersions,
  PolicySetDefinitions,
  PolicySetDefinitionVersions,
  PolicyAssignments,
} from "./operationsInterfaces/index.js";
import type { PolicyClientOptionalParams } from "./models/index.js";

export class PolicyClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId?: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the PolicyClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription. The value must be an UUID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: PolicyClientOptionalParams,
  );
  constructor(credentials: coreAuth.TokenCredential, options?: PolicyClientOptionalParams);
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?: PolicyClientOptionalParams | string,
    options?: PolicyClientOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PolicyClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-arm-policy/6.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint: options.endpoint ?? options.baseUri ?? "https://management.azure.com",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name === coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ?? `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge: coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2024-05-01";
    this.policyDefinitions = new PolicyDefinitionsImpl(this);
    this.policyDefinitionVersions = new PolicyDefinitionVersionsImpl(this);
    this.policySetDefinitions = new PolicySetDefinitionsImpl(this);
    this.policySetDefinitionVersions = new PolicySetDefinitionVersionsImpl(this);
    this.policyAssignments = new PolicyAssignmentsImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(request: PipelineRequest, next: SendRequest): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      },
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  policyDefinitions: PolicyDefinitions;
  policyDefinitionVersions: PolicyDefinitionVersions;
  policySetDefinitions: PolicySetDefinitions;
  policySetDefinitionVersions: PolicySetDefinitionVersions;
  policyAssignments: PolicyAssignments;
}
