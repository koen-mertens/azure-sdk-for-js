/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Secret,
  SecretsListOptionalParams,
  SecretCreateOrUpdateParameters,
  SecretsCreateOrUpdateOptionalParams,
  SecretsCreateOrUpdateResponse,
  SecretPatchParameters,
  SecretsUpdateOptionalParams,
  SecretsUpdateResponse,
  SecretsGetOptionalParams,
  SecretsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Secrets. */
export interface Secrets {
  /**
   * The List operation gets information about the secrets in a vault.  NOTE: This API is intended for
   * internal use in ARM deployments. Users should use the data-plane REST service for interaction with
   * vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vaultName: string,
    options?: SecretsListOptionalParams,
  ): PagedAsyncIterableIterator<Secret>;
  /**
   * Create or update a secret in a key vault in the specified subscription.  NOTE: This API is intended
   * for internal use in ARM deployments. Users should use the data-plane REST service for interaction
   * with vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param secretName Name of the secret. The value you provide may be copied globally for the purpose
   *                   of running the service. The value provided should not include personally identifiable or sensitive
   *                   information.
   * @param parameters Parameters to create or update the secret
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    secretName: string,
    parameters: SecretCreateOrUpdateParameters,
    options?: SecretsCreateOrUpdateOptionalParams,
  ): Promise<SecretsCreateOrUpdateResponse>;
  /**
   * Update a secret in the specified subscription.  NOTE: This API is intended for internal use in ARM
   * deployments.  Users should use the data-plane REST service for interaction with vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param secretName Name of the secret
   * @param parameters Parameters to patch the secret
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    vaultName: string,
    secretName: string,
    parameters: SecretPatchParameters,
    options?: SecretsUpdateOptionalParams,
  ): Promise<SecretsUpdateResponse>;
  /**
   * Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments. Users
   * should use the data-plane REST service for interaction with vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param secretName The name of the secret.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    secretName: string,
    options?: SecretsGetOptionalParams,
  ): Promise<SecretsGetResponse>;
}
