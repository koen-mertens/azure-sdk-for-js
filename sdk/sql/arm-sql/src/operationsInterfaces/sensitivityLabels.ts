/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SensitivityLabel,
  SensitivityLabelsListCurrentByDatabaseOptionalParams,
  SensitivityLabelsListRecommendedByDatabaseOptionalParams,
  SensitivityLabelUpdateList,
  SensitivityLabelsUpdateOptionalParams,
  SensitivityLabelsEnableRecommendationOptionalParams,
  SensitivityLabelsDisableRecommendationOptionalParams,
  SensitivityLabelSource,
  SensitivityLabelsGetOptionalParams,
  SensitivityLabelsGetResponse,
  SensitivityLabelsCreateOrUpdateOptionalParams,
  SensitivityLabelsCreateOrUpdateResponse,
  SensitivityLabelsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SensitivityLabels. */
export interface SensitivityLabels {
  /**
   * Gets the sensitivity labels of a given database
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listCurrentByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: SensitivityLabelsListCurrentByDatabaseOptionalParams,
  ): PagedAsyncIterableIterator<SensitivityLabel>;
  /**
   * Gets the sensitivity labels of a given database
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listRecommendedByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: SensitivityLabelsListRecommendedByDatabaseOptionalParams,
  ): PagedAsyncIterableIterator<SensitivityLabel>;
  /**
   * Update sensitivity labels of a given database using an operations batch.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters A list of sensitivity label update operations.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: SensitivityLabelUpdateList,
    options?: SensitivityLabelsUpdateOptionalParams,
  ): Promise<void>;
  /**
   * Enables sensitivity recommendations on a given column (recommendations are enabled by default on all
   * columns)
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  enableRecommendation(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: SensitivityLabelsEnableRecommendationOptionalParams,
  ): Promise<void>;
  /**
   * Disables sensitivity recommendations on a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  disableRecommendation(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: SensitivityLabelsDisableRecommendationOptionalParams,
  ): Promise<void>;
  /**
   * Gets the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param sensitivityLabelSource The source of the sensitivity label.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    sensitivityLabelSource: SensitivityLabelSource,
    options?: SensitivityLabelsGetOptionalParams,
  ): Promise<SensitivityLabelsGetResponse>;
  /**
   * Creates or updates the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param parameters The column sensitivity label resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    parameters: SensitivityLabel,
    options?: SensitivityLabelsCreateOrUpdateOptionalParams,
  ): Promise<SensitivityLabelsCreateOrUpdateResponse>;
  /**
   * Deletes the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: SensitivityLabelsDeleteOptionalParams,
  ): Promise<void>;
}
