/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { AzureBareMetalStorageInstance } from "@azure/arm-baremetalinfrastructure";
import { BareMetalInfrastructureClient } from "@azure/arm-baremetalinfrastructure";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create an azure bare metal storage resource.
 *
 * @summary Create an azure bare metal storage resource.
 * x-ms-original-file: specification/baremetalinfrastructure/resource-manager/Microsoft.BareMetalInfrastructure/preview/2023-08-04-preview/examples/AzureBareMetalStorageInstances_Create.json
 */
async function putANewAzureBareMetalStorageInstance(): Promise<void> {
  const subscriptionId =
    process.env["BAREMETALINFRASTRUCTURE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["BAREMETALINFRASTRUCTURE_RESOURCE_GROUP"] || "myResourceGroup";
  const azureBareMetalStorageInstanceName = "myAzureBareMetalStorageInstance";
  const requestBodyParameters: AzureBareMetalStorageInstance = {
    azureBareMetalStorageInstanceUniqueIdentifier: "23415635-4d7e-41dc-9598-8194f22c24e9",
    location: "westus2",
    storageProperties: {
      generation: "Gen4",
      hardwareType: "NetApp",
      offeringType: "EPIC",
      provisioningState: "Succeeded",
      storageBillingProperties: {
        azureBareMetalStorageInstanceSize: "",
        billingMode: "PAYG",
      },
      storageType: "FC",
      workloadType: "ODB",
    },
    tags: { key: "value" },
  };
  const credential = new DefaultAzureCredential();
  const client = new BareMetalInfrastructureClient(credential, subscriptionId);
  const result = await client.azureBareMetalStorageInstances.create(
    resourceGroupName,
    azureBareMetalStorageInstanceName,
    requestBodyParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await putANewAzureBareMetalStorageInstance();
}

main().catch(console.error);
