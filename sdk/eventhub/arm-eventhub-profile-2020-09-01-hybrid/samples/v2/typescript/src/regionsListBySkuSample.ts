/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventHubManagementClient } from "@azure/arm-eventhub-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the available Regions for a given sku
 *
 * @summary Gets the available Regions for a given sku
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2017-04-01/examples/EHRegionsListBySkuBasic.json
 */
async function regionsListBySkuBasic(): Promise<void> {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] || "subscriptionid";
  const sku = "Basic";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.regions.listBySku(sku)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Gets the available Regions for a given sku
 *
 * @summary Gets the available Regions for a given sku
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2017-04-01/examples/EHRegionsListBySkuStandard.json
 */
async function regionsListBySkuStandard(): Promise<void> {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] || "subscriptionid";
  const sku = "Standard";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.regions.listBySku(sku)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  regionsListBySkuBasic();
  regionsListBySkuStandard();
}

main().catch(console.error);
