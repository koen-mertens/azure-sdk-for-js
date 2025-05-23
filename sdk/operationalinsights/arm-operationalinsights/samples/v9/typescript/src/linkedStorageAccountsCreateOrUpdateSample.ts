/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  LinkedStorageAccountsResource,
  OperationalInsightsManagementClient
} from "@azure/arm-operationalinsights";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or Update a link relation between current workspace and a group of storage accounts of a specific data source type.
 *
 * @summary Create or Update a link relation between current workspace and a group of storage accounts of a specific data source type.
 * x-ms-original-file: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/stable/2020-08-01/examples/LinkedStorageAccountsCreate.json
 */
async function linkedStorageAccountsCreate(): Promise<void> {
  const subscriptionId =
    process.env["OPERATIONALINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-00000000000";
  const resourceGroupName =
    process.env["OPERATIONALINSIGHTS_RESOURCE_GROUP"] || "mms-eus";
  const workspaceName = "testLinkStorageAccountsWS";
  const dataSourceType = "CustomLogs";
  const parameters: LinkedStorageAccountsResource = {
    storageAccountIds: [
      "/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/mms-eus/providers/Microsoft.Storage/storageAccounts/testStorageA",
      "/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/mms-eus/providers/Microsoft.Storage/storageAccounts/testStorageB"
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new OperationalInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.linkedStorageAccounts.createOrUpdate(
    resourceGroupName,
    workspaceName,
    dataSourceType,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  linkedStorageAccountsCreate();
}

main().catch(console.error);
