// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DependencyMapClient } = require("@azure/arm-dependencymap");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list MapsResource resources by subscription ID
 *
 * @summary list MapsResource resources by subscription ID
 * x-ms-original-file: 2025-01-31-preview/Maps_ListBySubscription.json
 */
async function mapsListBySubscriptionGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "D6E58BDB-45F1-41EC-A884-1FC945058848";
  const client = new DependencyMapClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.maps.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await mapsListBySubscriptionGeneratedByMaximumSetRule();
}

main().catch(console.error);
