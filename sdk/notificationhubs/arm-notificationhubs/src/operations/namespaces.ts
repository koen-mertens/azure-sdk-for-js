/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import type { Namespaces } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { NotificationHubsManagementClient } from "../notificationHubsManagementClient.js";
import type { SimplePollerLike, OperationState } from "@azure/core-lro";
import { createHttpPoller } from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import type {
  NamespaceResource,
  NamespacesListAllNextOptionalParams,
  NamespacesListAllOptionalParams,
  NamespacesListAllResponse,
  NamespacesListNextOptionalParams,
  NamespacesListOptionalParams,
  NamespacesListResponse,
  SharedAccessAuthorizationRuleResource,
  NamespacesListAuthorizationRulesNextOptionalParams,
  NamespacesListAuthorizationRulesOptionalParams,
  NamespacesListAuthorizationRulesResponse,
  CheckAvailabilityParameters,
  NamespacesCheckAvailabilityOptionalParams,
  NamespacesCheckAvailabilityResponse,
  NamespacesGetOptionalParams,
  NamespacesGetResponse,
  NamespacesCreateOrUpdateOptionalParams,
  NamespacesCreateOrUpdateResponse,
  NamespacePatchParameters,
  NamespacesUpdateOptionalParams,
  NamespacesUpdateResponse,
  NamespacesDeleteOptionalParams,
  NamespacesCreateOrUpdateAuthorizationRuleOptionalParams,
  NamespacesCreateOrUpdateAuthorizationRuleResponse,
  NamespacesDeleteAuthorizationRuleOptionalParams,
  NamespacesGetAuthorizationRuleOptionalParams,
  NamespacesGetAuthorizationRuleResponse,
  NamespacesListKeysOptionalParams,
  NamespacesListKeysResponse,
  PolicyKeyResource,
  NamespacesRegenerateKeysOptionalParams,
  NamespacesRegenerateKeysResponse,
  NamespacesGetPnsCredentialsOptionalParams,
  NamespacesGetPnsCredentialsResponse,
  NamespacesListAllNextResponse,
  NamespacesListNextResponse,
  NamespacesListAuthorizationRulesNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Namespaces operations. */
export class NamespacesImpl implements Namespaces {
  private readonly client: NotificationHubsManagementClient;

  /**
   * Initialize a new instance of the class Namespaces class.
   * @param client Reference to the service client
   */
  constructor(client: NotificationHubsManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the available namespaces within the subscription.
   * @param options The options parameters.
   */
  public listAll(
    options?: NamespacesListAllOptionalParams,
  ): PagedAsyncIterableIterator<NamespaceResource> {
    const iter = this.listAllPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listAllPagingPage(options, settings);
      },
    };
  }

  private async *listAllPagingPage(
    options?: NamespacesListAllOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NamespaceResource[]> {
    let result: NamespacesListAllResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAll(options);
      const page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      const page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAllPagingAll(
    options?: NamespacesListAllOptionalParams,
  ): AsyncIterableIterator<NamespaceResource> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the available namespaces within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: NamespacesListOptionalParams,
  ): PagedAsyncIterableIterator<NamespaceResource> {
    const iter = this.listPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(resourceGroupName, options, settings);
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: NamespacesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NamespaceResource[]> {
    let result: NamespacesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, options);
      const page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(resourceGroupName, continuationToken, options);
      continuationToken = result.nextLink;
      const page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: NamespacesListOptionalParams,
  ): AsyncIterableIterator<NamespaceResource> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Gets the authorization rules for a namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param options The options parameters.
   */
  public listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesListAuthorizationRulesOptionalParams,
  ): PagedAsyncIterableIterator<SharedAccessAuthorizationRuleResource> {
    const iter = this.listAuthorizationRulesPagingAll(resourceGroupName, namespaceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listAuthorizationRulesPagingPage(
          resourceGroupName,
          namespaceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listAuthorizationRulesPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesListAuthorizationRulesOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SharedAccessAuthorizationRuleResource[]> {
    let result: NamespacesListAuthorizationRulesResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAuthorizationRules(resourceGroupName, namespaceName, options);
      const page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAuthorizationRulesNext(
        resourceGroupName,
        namespaceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      const page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAuthorizationRulesPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesListAuthorizationRulesOptionalParams,
  ): AsyncIterableIterator<SharedAccessAuthorizationRuleResource> {
    for await (const page of this.listAuthorizationRulesPagingPage(
      resourceGroupName,
      namespaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Checks the availability of the given service namespace across all Azure subscriptions. This is
   * useful because the domain name is created based on the service namespace name.
   * @param parameters Request content.
   * @param options The options parameters.
   */
  checkAvailability(
    parameters: CheckAvailabilityParameters,
    options?: NamespacesCheckAvailabilityOptionalParams,
  ): Promise<NamespacesCheckAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      checkAvailabilityOperationSpec,
    );
  }

  /**
   * Returns the given namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesGetOptionalParams,
  ): Promise<NamespacesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates / Updates a Notification Hub namespace. This operation is idempotent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param parameters Request content.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    parameters: NamespaceResource,
    options?: NamespacesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespacesCreateOrUpdateResponse>,
      NamespacesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<NamespacesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, namespaceName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      NamespacesCreateOrUpdateResponse,
      OperationState<NamespacesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates / Updates a Notification Hub namespace. This operation is idempotent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param parameters Request content.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    parameters: NamespaceResource,
    options?: NamespacesCreateOrUpdateOptionalParams,
  ): Promise<NamespacesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      namespaceName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Patches the existing namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param parameters Request content.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    namespaceName: string,
    parameters: NamespacePatchParameters,
    options?: NamespacesUpdateOptionalParams,
  ): Promise<NamespacesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Deletes an existing namespace. This operation also removes all associated notificationHubs under the
   * namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Lists all the available namespaces within the subscription.
   * @param options The options parameters.
   */
  private _listAll(options?: NamespacesListAllOptionalParams): Promise<NamespacesListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * Lists the available namespaces within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: NamespacesListOptionalParams,
  ): Promise<NamespacesListResponse> {
    return this.client.sendOperationRequest({ resourceGroupName, options }, listOperationSpec);
  }

  /**
   * Creates an authorization rule for a namespace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param authorizationRuleName Authorization Rule Name
   * @param parameters Request content.
   * @param options The options parameters.
   */
  createOrUpdateAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    authorizationRuleName: string,
    parameters: SharedAccessAuthorizationRuleResource,
    options?: NamespacesCreateOrUpdateAuthorizationRuleOptionalParams,
  ): Promise<NamespacesCreateOrUpdateAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        authorizationRuleName,
        parameters,
        options,
      },
      createOrUpdateAuthorizationRuleOperationSpec,
    );
  }

  /**
   * Deletes a namespace authorization rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param authorizationRuleName Authorization Rule Name
   * @param options The options parameters.
   */
  deleteAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    authorizationRuleName: string,
    options?: NamespacesDeleteAuthorizationRuleOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, authorizationRuleName, options },
      deleteAuthorizationRuleOperationSpec,
    );
  }

  /**
   * Gets an authorization rule for a namespace by name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param authorizationRuleName Authorization Rule Name
   * @param options The options parameters.
   */
  getAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    authorizationRuleName: string,
    options?: NamespacesGetAuthorizationRuleOptionalParams,
  ): Promise<NamespacesGetAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, authorizationRuleName, options },
      getAuthorizationRuleOperationSpec,
    );
  }

  /**
   * Gets the authorization rules for a namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param options The options parameters.
   */
  private _listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesListAuthorizationRulesOptionalParams,
  ): Promise<NamespacesListAuthorizationRulesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      listAuthorizationRulesOperationSpec,
    );
  }

  /**
   * Gets the Primary and Secondary ConnectionStrings to the namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param authorizationRuleName Authorization Rule Name
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    namespaceName: string,
    authorizationRuleName: string,
    options?: NamespacesListKeysOptionalParams,
  ): Promise<NamespacesListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, authorizationRuleName, options },
      listKeysOperationSpec,
    );
  }

  /**
   * Regenerates the Primary/Secondary Keys to the Namespace Authorization Rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param authorizationRuleName Authorization Rule Name
   * @param parameters Request content.
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    namespaceName: string,
    authorizationRuleName: string,
    parameters: PolicyKeyResource,
    options?: NamespacesRegenerateKeysOptionalParams,
  ): Promise<NamespacesRegenerateKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        authorizationRuleName,
        parameters,
        options,
      },
      regenerateKeysOperationSpec,
    );
  }

  /**
   * Lists the PNS credentials associated with a namespace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param options The options parameters.
   */
  getPnsCredentials(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespacesGetPnsCredentialsOptionalParams,
  ): Promise<NamespacesGetPnsCredentialsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      getPnsCredentialsOperationSpec,
    );
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: NamespacesListAllNextOptionalParams,
  ): Promise<NamespacesListAllNextResponse> {
    return this.client.sendOperationRequest({ nextLink, options }, listAllNextOperationSpec);
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: NamespacesListNextOptionalParams,
  ): Promise<NamespacesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListAuthorizationRulesNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param namespaceName Namespace name
   * @param nextLink The nextLink from the previous successful call to the ListAuthorizationRules method.
   * @param options The options parameters.
   */
  private _listAuthorizationRulesNext(
    resourceGroupName: string,
    namespaceName: string,
    nextLink: string,
    options?: NamespacesListAuthorizationRulesNextOptionalParams,
  ): Promise<NamespacesListAuthorizationRulesNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, nextLink, options },
      listAuthorizationRulesNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.NotificationHubs/checkNamespaceAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckAvailabilityResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceResource,
    },
    201: {
      bodyMapper: Mappers.NamespaceResource,
    },
    202: {
      bodyMapper: Mappers.NamespaceResource,
    },
    204: {
      bodyMapper: Mappers.NamespaceResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAllOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.NotificationHubs/namespaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId, Parameters.resourceGroupName],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SharedAccessAuthorizationRuleResource,
    },
    201: {
      bodyMapper: Mappers.SharedAccessAuthorizationRuleResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedAccessAuthorizationRuleResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAuthorizationRulesOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedAccessAuthorizationRuleListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListKeys,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const regenerateKeysOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListKeys,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getPnsCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/pnsCredentials",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PnsCredentialsResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAllNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [Parameters.$host, Parameters.subscriptionId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAuthorizationRulesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedAccessAuthorizationRuleListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
