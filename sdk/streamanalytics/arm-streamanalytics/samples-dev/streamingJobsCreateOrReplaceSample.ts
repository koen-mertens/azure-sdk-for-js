/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { StreamingJob } from "@azure/arm-streamanalytics";
import { StreamAnalyticsManagementClient } from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a streaming job or replaces an already existing streaming job.
 *
 * @summary Creates a streaming job or replaces an already existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/StreamingJob_Create_CompleteJob.json
 */
async function createACompleteStreamingJobAStreamingJobWithATransformationAtLeast1InputAndAtLeast1Output(): Promise<void> {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg3276";
  const jobName = "sj7804";
  const streamingJob: StreamingJob = {
    compatibilityLevel: "1.0",
    dataLocale: "en-US",
    eventsLateArrivalMaxDelayInSeconds: 5,
    eventsOutOfOrderMaxDelayInSeconds: 0,
    eventsOutOfOrderPolicy: "Drop",
    externals: {
      path: "UserCustomCode.zip",
      container: "mycontainer",
      refreshConfiguration: {
        dateFormat: "yyyy-dd-MM",
        pathPattern: "{date}\\\\{time}",
        refreshInterval: "00:01:00",
        refreshType: "Nonblocking",
        timeFormat: "HH",
      },
      storageAccount: { accountKey: "mykey", accountName: "mystorageaccount" },
    },
    functions: [],
    inputs: [
      {
        name: "inputtest",
        properties: {
          type: "Stream",
          datasource: {
            type: "Microsoft.Storage/Blob",
            container: "containerName",
            pathPattern: "",
            storageAccounts: [
              {
                accountKey: "yourAccountKey==",
                accountName: "yourAccountName",
              },
            ],
          },
          serialization: { type: "Json", encoding: "UTF8" },
        },
      },
    ],
    location: "West US",
    outputErrorPolicy: "Drop",
    outputs: [
      {
        name: "outputtest",
        datasource: {
          type: "Microsoft.Sql/Server/Database",
          database: "databaseName",
          password: "userPassword",
          server: "serverName",
          table: "tableName",
          user: "<user>",
        },
      },
    ],
    skuPropertiesSku: { name: "Standard" },
    tags: { key1: "value1", key3: "value3", randomKey: "randomValue" },
    transformation: {
      name: "transformationtest",
      query: "Select Id, Name from inputtest",
      streamingUnits: 1,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const result = await client.streamingJobs.beginCreateOrReplaceAndWait(
    resourceGroupName,
    jobName,
    streamingJob,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a streaming job or replaces an already existing streaming job.
 *
 * @summary Creates a streaming job or replaces an already existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/StreamingJob_Create_JobShell.json
 */
async function createAStreamingJobShellAStreamingJobWithNoInputsOutputsTransformationOrFunctions(): Promise<void> {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg6936";
  const jobName = "sj59";
  const streamingJob: StreamingJob = {
    compatibilityLevel: "1.0",
    dataLocale: "en-US",
    eventsLateArrivalMaxDelayInSeconds: 16,
    eventsOutOfOrderMaxDelayInSeconds: 5,
    eventsOutOfOrderPolicy: "Drop",
    functions: [],
    inputs: [],
    location: "West US",
    outputErrorPolicy: "Drop",
    outputs: [],
    skuPropertiesSku: { name: "Standard" },
    tags: { key1: "value1", key3: "value3", randomKey: "randomValue" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const result = await client.streamingJobs.beginCreateOrReplaceAndWait(
    resourceGroupName,
    jobName,
    streamingJob,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a streaming job or replaces an already existing streaming job.
 *
 * @summary Creates a streaming job or replaces an already existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/StreamingJob_Create_UserAssignedIdentity.json
 */
async function createAStreamingJobShellAStreamingJobWithNoInputsOutputsTransformationOrFunctionsWithUserAssignedIdentity(): Promise<void> {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const streamingJob: StreamingJob = {
    compatibilityLevel: "1.0",
    dataLocale: "en-US",
    eventsLateArrivalMaxDelayInSeconds: 16,
    eventsOutOfOrderMaxDelayInSeconds: 5,
    eventsOutOfOrderPolicy: "Drop",
    functions: [],
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/fa68082f8ff74a2595c7Ce9da541242f/resourceGroups/akvenkat/providers/MicrosoftManagedIdentity/userAssignedIdentities/sdkIdentity":
          {},
      },
    },
    inputs: [],
    location: "West US",
    outputErrorPolicy: "Drop",
    outputs: [],
    skuPropertiesSku: { name: "Standard" },
    tags: { key1: "value1", key3: "value3", randomKey: "randomValue" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const result = await client.streamingJobs.beginCreateOrReplaceAndWait(
    resourceGroupName,
    jobName,
    streamingJob,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createACompleteStreamingJobAStreamingJobWithATransformationAtLeast1InputAndAtLeast1Output();
  await createAStreamingJobShellAStreamingJobWithNoInputsOutputsTransformationOrFunctions();
  await createAStreamingJobShellAStreamingJobWithNoInputsOutputsTransformationOrFunctionsWithUserAssignedIdentity();
}

main().catch(console.error);
