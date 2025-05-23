/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VaultExtendedInfo } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RecoveryServicesClient } from "../recoveryServicesClient.js";
import {
  VaultExtendedInfoGetOptionalParams,
  VaultExtendedInfoGetResponse,
  VaultExtendedInfoResource,
  VaultExtendedInfoCreateOrUpdateOptionalParams,
  VaultExtendedInfoCreateOrUpdateResponse,
  VaultExtendedInfoUpdateOptionalParams,
  VaultExtendedInfoUpdateResponse,
} from "../models/index.js";

/** Class containing VaultExtendedInfo operations. */
export class VaultExtendedInfoImpl implements VaultExtendedInfo {
  private readonly client: RecoveryServicesClient;

  /**
   * Initialize a new instance of the class VaultExtendedInfo class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesClient) {
    this.client = client;
  }

  /**
   * Get the vault extended info.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    options?: VaultExtendedInfoGetOptionalParams,
  ): Promise<VaultExtendedInfoGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      getOperationSpec,
    );
  }

  /**
   * Create vault extended info.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param resourceExtendedInfoDetails Details of ResourceExtendedInfo
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    resourceExtendedInfoDetails: VaultExtendedInfoResource,
    options?: VaultExtendedInfoCreateOrUpdateOptionalParams,
  ): Promise<VaultExtendedInfoCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, resourceExtendedInfoDetails, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Update vault extended info.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param resourceExtendedInfoDetails Details of ResourceExtendedInfo
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    vaultName: string,
    resourceExtendedInfoDetails: VaultExtendedInfoResource,
    options?: VaultExtendedInfoUpdateOptionalParams,
  ): Promise<VaultExtendedInfoUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, resourceExtendedInfoDetails, options },
      updateOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/extendedInformation/vaultExtendedInfo",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultExtendedInfoResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/extendedInformation/vaultExtendedInfo",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VaultExtendedInfoResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.resourceExtendedInfoDetails,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/extendedInformation/vaultExtendedInfo",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VaultExtendedInfoResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.resourceExtendedInfoDetails,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
