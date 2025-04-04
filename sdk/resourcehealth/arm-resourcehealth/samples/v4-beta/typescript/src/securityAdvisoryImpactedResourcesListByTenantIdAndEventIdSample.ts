/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftResourceHealth } from "@azure/arm-resourcehealth";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists impacted resources in the tenant by an event (Security Advisory).
 *
 * @summary Lists impacted resources in the tenant by an event (Security Advisory).
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/preview/2023-10-01-preview/examples/SecurityAdvisoryImpactedResources_ListByTenantId_ListByEventId.json
 */
async function listSecurityAdvisoryImpactedResourcesByTenantId(): Promise<void> {
  const eventTrackingId = "BC_1-FXZ";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential);
  const resArray = new Array();
  for await (let item of client.securityAdvisoryImpactedResources.listByTenantIdAndEventId(
    eventTrackingId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  listSecurityAdvisoryImpactedResourcesByTenantId();
}

main().catch(console.error);
