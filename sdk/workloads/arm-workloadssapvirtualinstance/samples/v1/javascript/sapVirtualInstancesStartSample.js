// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-workloadssapvirtualinstance");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to starts the SAP application, that is the Central Services instance and Application server instances.
 *
 * @summary starts the SAP application, that is the Central Services instance and Application server instances.
 * x-ms-original-file: 2024-09-01/SapVirtualInstances_Start.json
 */
async function sapVirtualInstancesStart() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sapVirtualInstances.start("test-rg", "X00", {
    body: { startVm: true },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to starts the SAP application, that is the Central Services instance and Application server instances.
 *
 * @summary starts the SAP application, that is the Central Services instance and Application server instances.
 * x-ms-original-file: 2024-09-01/SapVirtualInstances_StartWithInfraOperations.json
 */
async function sapVirtualInstancesStartWithInfraOperations() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sapVirtualInstances.start("test-rg", "X00", {
    body: { startVm: true },
  });
  console.log(result);
}

async function main() {
  await sapVirtualInstancesStart();
  await sapVirtualInstancesStartWithInfraOperations();
}

main().catch(console.error);
