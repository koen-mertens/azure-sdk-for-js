/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { WorkspaceProductPolicy } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
  WorkspaceProductPolicyListByProductOptionalParams,
  WorkspaceProductPolicyListByProductResponse,
  PolicyIdName,
  WorkspaceProductPolicyGetEntityTagOptionalParams,
  WorkspaceProductPolicyGetEntityTagResponse,
  WorkspaceProductPolicyGetOptionalParams,
  WorkspaceProductPolicyGetResponse,
  PolicyContract,
  WorkspaceProductPolicyCreateOrUpdateOptionalParams,
  WorkspaceProductPolicyCreateOrUpdateResponse,
  WorkspaceProductPolicyDeleteOptionalParams,
} from "../models/index.js";

/** Class containing WorkspaceProductPolicy operations. */
export class WorkspaceProductPolicyImpl implements WorkspaceProductPolicy {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceProductPolicy class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Get the policy configuration at the Product level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  listByProduct(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    options?: WorkspaceProductPolicyListByProductOptionalParams,
  ): Promise<WorkspaceProductPolicyListByProductResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, productId, options },
      listByProductOperationSpec,
    );
  }

  /**
   * Get the ETag of the policy configuration at the Product level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param policyId The identifier of the Policy.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    policyId: PolicyIdName,
    options?: WorkspaceProductPolicyGetEntityTagOptionalParams,
  ): Promise<WorkspaceProductPolicyGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
        policyId,
        options,
      },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Get the policy configuration at the Product level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param policyId The identifier of the Policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    policyId: PolicyIdName,
    options?: WorkspaceProductPolicyGetOptionalParams,
  ): Promise<WorkspaceProductPolicyGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
        policyId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates policy configuration for the Product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param policyId The identifier of the Policy.
   * @param parameters The policy contents to apply.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    policyId: PolicyIdName,
    parameters: PolicyContract,
    options?: WorkspaceProductPolicyCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceProductPolicyCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
        policyId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the policy configuration at the Product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param policyId The identifier of the Policy.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    policyId: PolicyIdName,
    ifMatch: string,
    options?: WorkspaceProductPolicyDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
        policyId,
        ifMatch,
        options,
      },
      deleteOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProductOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}/policies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.productId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}/policies/{policyId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.WorkspaceProductPolicyGetEntityTagHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.policyId,
    Parameters.productId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}/policies/{policyId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.WorkspaceProductPolicyGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.format],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.policyId,
    Parameters.productId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}/policies/{policyId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.WorkspaceProductPolicyCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.WorkspaceProductPolicyCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.policyId,
    Parameters.productId,
    Parameters.workspaceId,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}/policies/{policyId}",
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
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.policyId,
    Parameters.productId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
