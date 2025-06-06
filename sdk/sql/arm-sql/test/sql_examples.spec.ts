/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { SqlManagementClient } from "../src/sqlManagementClient.js";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Sql test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: SqlManagementClient;
  let location: string;
  let resourceGroup: string;
  let serverName: string;
  let databaseName: string;

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new SqlManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "westus";
    resourceGroup = "myjstest";
    databaseName = "mydatabasezzzz";
    serverName = "myserverppp";
  });

  afterEach(async () => {
    await recorder.stop();
  });

  it("servers create test", async () => {
    const res = await client.servers.beginCreateOrUpdateAndWait(resourceGroup, serverName, {
      location,
      administratorLogin: "dummylogin",
      administratorLoginPassword: "Placeholder123",
      version: "12.0"
    }, testPollingOptions)
    assert.equal(res.name, serverName);
  });

  it("databases create test", async () => {
    const res = await client.databases.beginCreateOrUpdateAndWait(resourceGroup, serverName, databaseName, {
      location,
      readScale: "Disabled"
    }, testPollingOptions)
    assert.equal(res.name, databaseName);
  });

  it("databaseSecurityAlertPolicies create test", async () => {
    const res = await client.databaseSecurityAlertPolicies.createOrUpdate(resourceGroup, serverName, databaseName, "Default", {
      disabledAlerts: ["Sql_Injection", "Access_Anomaly"],
      state: "Enabled",
    })
    assert.equal(res.name, "Default");
  });

  it("servers get test", async () => {
    const res = await client.servers.get(resourceGroup, serverName);
    assert.equal(res.name, serverName);
  });

  it("databases get test", async () => {
    const res = await client.databases.get(resourceGroup, serverName, databaseName);
    assert.equal(res.name, databaseName);
  });

  it("servers list test", async () => {
    const resArray = new Array()
    for await (let item of client.servers.listByResourceGroup(resourceGroup)) {
      resArray.push(item)
    }
    assert.equal(resArray.length, 1);
  });

  it("databases list test", async () => {
    const resArray = new Array()
    for await (let item of client.databases.listByServer(resourceGroup, serverName)) {
      resArray.push(item)
    }
    assert.equal(resArray.length, 2);
  });

  it("servers update test", async () => {
    const res = await client.servers.beginUpdateAndWait(resourceGroup, serverName, {
      tags: {
        tag1: "value1"
      }
    }, testPollingOptions);
    assert.equal(res.type, "Microsoft.Sql/servers")
  });

  it("databases update test", async () => {
    const res = await client.databases.beginUpdateAndWait(resourceGroup, serverName, databaseName, {
      sku: {
        name: "S1",
        tier: "Standard",
      },
      collation: "SQL_Latin1_General_CP1_CI_AS",
      maxLogSizeBytes: 1073741824
    }, testPollingOptions);
    assert.equal(res.type, "Microsoft.Sql/servers/databases")
  });

  it("databases delete test", async () => {
    const resArray = new Array()
    await client.databases.beginDeleteAndWait(resourceGroup, serverName, databaseName, testPollingOptions);
    for await (let item of client.databases.listByServer(resourceGroup, serverName)) {
      resArray.push(item)
    }
    assert.equal(resArray.length, 1);
  });

  it("servers delete test", async () => {
    const resArray = new Array()
    await client.servers.beginDeleteAndWait(resourceGroup, serverName, testPollingOptions);
    for await (let item of client.servers.listByResourceGroup(resourceGroup)) {
      resArray.push(item)
    }
    assert.equal(resArray.length, 0);
  });
});
