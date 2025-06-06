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
  ManagerExtendedInfo,
  StorSimple8000SeriesManagementClient
} from "@azure/arm-storsimple8000series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates the extended info of the manager.
 *
 * @summary Updates the extended info of the manager.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/ManagersUpdateExtendedInfo.json
 */
async function managersUpdateExtendedInfo(): Promise<void> {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest2";
  const ifMatch = "674ab9df-af56-4c5c-a5ca-2bddcf1b781a";
  const parameters: ManagerExtendedInfo = {
    algorithm: "SHA256",
    etag: "674ab9df-af56-4c5c-a5ca-2bddcf1b781a",
    integrityKey: "BIl+RHqO8PZ6DRvuXTTK7g=="
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.managers.updateExtendedInfo(
    resourceGroupName,
    managerName,
    ifMatch,
    parameters
  );
  console.log(result);
}

managersUpdateExtendedInfo().catch(console.error);
