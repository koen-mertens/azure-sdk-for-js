/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Get the list of policy configuration at the GraphQL API Resolver level.
 *
 * @summary Get the list of policy configuration at the GraphQL API Resolver level.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2024-05-01/examples/ApiManagementListGraphQLApiResolverPolicies.json
 */
async function apiManagementListGraphQlApiResolverPolicies() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const apiId = "599e2953193c3c0bd0b3e2fa";
  const resolverId = "599e29ab193c3c0bd0b3e2fb";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.graphQLApiResolverPolicy.listByResolver(
    resourceGroupName,
    serviceName,
    apiId,
    resolverId,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await apiManagementListGraphQlApiResolverPolicies();
}

main().catch(console.error);
