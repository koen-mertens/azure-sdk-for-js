// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { IoTFirmwareDefenseClient } = require("@azure/arm-iotfirmwaredefense");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to the operation to create a firmware.
 *
 * @summary the operation to create a firmware.
 * x-ms-original-file: 2025-04-01-preview/Firmwares_Create_MaximumSet_Gen.json
 */
async function firmwaresCreateMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "5C707B5F-6130-4F71-819E-953A28942E88";
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.firmwares.create(
    "rgiotfirmwaredefense",
    "exampleWorkspaceName",
    "00000000-0000-0000-0000-000000000000",
    {
      properties: {
        fileName: "dmnqhyxssutvnewntlb",
        vendor: "hymojocxpxqhtblioaavylnzyg",
        model: "wmyfbyjsggbvxcuin",
        version: "nhtxzslgcbtptu",
        fileSize: 30,
        status: "Pending",
        statusMessages: [{ errorCode: 20, message: "edtylkjvj" }],
        description: "sqt",
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to the operation to create a firmware.
 *
 * @summary the operation to create a firmware.
 * x-ms-original-file: 2025-04-01-preview/Firmwares_Create_MinimumSet_Gen.json
 */
async function firmwaresCreateMinimumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "685C0C6F-9867-4B1C-A534-AA3A05B54BCE";
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.firmwares.create("rgworkspaces-firmwares", "A7", "umrkdttp", {
    properties: {},
  });
  console.log(result);
}

async function main() {
  await firmwaresCreateMaximumSetGenGeneratedByMaximumSetRule();
  await firmwaresCreateMinimumSetGen();
}

main().catch(console.error);
