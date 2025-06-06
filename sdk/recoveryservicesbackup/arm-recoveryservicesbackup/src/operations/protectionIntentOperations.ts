/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ProtectionIntentOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient.js";
import {
  PreValidateEnableBackupRequest,
  ProtectionIntentValidateOptionalParams,
  ProtectionIntentValidateResponse,
  ProtectionIntentGetOptionalParams,
  ProtectionIntentGetResponse,
  ProtectionIntentResource,
  ProtectionIntentCreateOrUpdateOptionalParams,
  ProtectionIntentCreateOrUpdateResponse,
  ProtectionIntentDeleteOptionalParams,
} from "../models/index.js";

/** Class containing ProtectionIntentOperations operations. */
export class ProtectionIntentOperationsImpl
  implements ProtectionIntentOperations
{
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class ProtectionIntentOperations class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * It will validate followings
   * 1. Vault capacity
   * 2. VM is already protected
   * 3. Any VM related configuration passed in properties.
   * @param azureRegion Azure region to hit Api
   * @param parameters Enable backup validation request on Virtual Machine
   * @param options The options parameters.
   */
  validate(
    azureRegion: string,
    parameters: PreValidateEnableBackupRequest,
    options?: ProtectionIntentValidateOptionalParams,
  ): Promise<ProtectionIntentValidateResponse> {
    return this.client.sendOperationRequest(
      { azureRegion, parameters, options },
      validateOperationSpec,
    );
  }

  /**
   * Provides the details of the protection intent up item. This is an asynchronous operation. To know
   * the status of the operation,
   * call the GetItemOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param intentObjectName Backed up item name whose details are to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    intentObjectName: string,
    options?: ProtectionIntentGetOptionalParams,
  ): Promise<ProtectionIntentGetResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, fabricName, intentObjectName, options },
      getOperationSpec,
    );
  }

  /**
   * Create Intent for Enabling backup of an item. This is a synchronous operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the backup item.
   * @param intentObjectName Intent object name.
   * @param parameters resource backed up item
   * @param options The options parameters.
   */
  createOrUpdate(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    intentObjectName: string,
    parameters: ProtectionIntentResource,
    options?: ProtectionIntentCreateOrUpdateOptionalParams,
  ): Promise<ProtectionIntentCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        intentObjectName,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Used to remove intent from an item
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the intent.
   * @param intentObjectName Intent to be deleted.
   * @param options The options parameters.
   */
  delete(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    intentObjectName: string,
    options?: ProtectionIntentDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, fabricName, intentObjectName, options },
      deleteOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const validateOperationSpec: coreClient.OperationSpec = {
  path: "/Subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupPreValidateProtection",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PreValidateEnableBackupResponse,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.azureRegion,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/backupProtectionIntent/{intentObjectName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionIntentResource,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.intentObjectName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/backupProtectionIntent/{intentObjectName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionIntentResource,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.intentObjectName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/backupProtectionIntent/{intentObjectName}",
  httpMethod: "DELETE",
  responses: { 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.intentObjectName,
  ],
  serializer,
};
