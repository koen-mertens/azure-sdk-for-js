/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a Kusto pool.
 *
 * @summary Deletes a Kusto pool.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolsDelete.json
 */
async function kustoPoolsDelete(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const workspaceName = "kustorptest";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "kustorptest";
  const kustoPoolName = "kustoclusterrptest4";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPools.beginDeleteAndWait(
    workspaceName,
    resourceGroupName,
    kustoPoolName
  );
  console.log(result);
}

async function main(): Promise<void> {
  kustoPoolsDelete();
}

main().catch(console.error);
