/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { PrivateZone } from "@azure/arm-privatedns";
import { PrivateDnsManagementClient } from "@azure/arm-privatedns";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a Private DNS zone. Does not modify Links to virtual networks or DNS records within the zone.
 *
 * @summary Creates or updates a Private DNS zone. Does not modify Links to virtual networks or DNS records within the zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/PrivateZonePut.json
 */
async function putPrivateDnsZone(): Promise<void> {
  const subscriptionId = process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const parameters: PrivateZone = {
    location: "Global",
    tags: { key1: "value1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.privateZones.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateZoneName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await putPrivateDnsZone();
}

main().catch(console.error);
