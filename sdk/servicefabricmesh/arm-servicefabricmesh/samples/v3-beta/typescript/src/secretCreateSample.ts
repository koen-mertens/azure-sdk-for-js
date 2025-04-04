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
  SecretResourceDescription,
  ServiceFabricMeshManagementClient
} from "@azure/arm-servicefabricmesh";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a secret resource with the specified name, description and properties. If a secret resource with the same name exists, then it is updated with the specified description and properties.
 *
 * @summary Creates a secret resource with the specified name, description and properties. If a secret resource with the same name exists, then it is updated with the specified description and properties.
 * x-ms-original-file: specification/servicefabricmesh/resource-manager/Microsoft.ServiceFabricMesh/preview/2018-09-01-preview/examples/secrets/create_update.json
 */
async function createOrUpdateSecret(): Promise<void> {
  const subscriptionId =
    process.env["SERVICEFABRICMESH_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SERVICEFABRICMESH_RESOURCE_GROUP"] || "sbz_demo";
  const secretResourceName = "dbConnectionString";
  const secretResourceDescription: SecretResourceDescription = {
    location: "EastUS",
    properties: {
      description: "Mongo DB connection string for backend database!",
      contentType: "text/plain",
      kind: "inlinedValue"
    },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricMeshManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.secret.create(
    resourceGroupName,
    secretResourceName,
    secretResourceDescription
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateSecret();
}

main().catch(console.error);
