// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how the createOrUpdateInstallation() method can be used to create or overwrite an
 * installation in place.
 *
 * See https://learn.microsoft.com/azure/notification-hubs/notification-hubs-push-notification-registration-management
 * to learn about installations.
 *
 *
 * @summary Demonstrates how to create or overwrite an installation using Azure Notification Hubs
 */

import "dotenv/config";
import { createClientContext, createOrUpdateInstallation } from "@azure/notification-hubs/api";
import { createFcmV1Installation } from "@azure/notification-hubs/models";
import { randomUUID } from "@azure/core-util";

// Define connection string and hub name
const connectionString = process.env.NOTIFICATIONHUBS_CONNECTION_STRING || "<connection string>";
const hubName = process.env.NOTIFICATION_HUB_NAME || "<hub name>";

// Define message constants
const DUMMY_REGISTRATION = "00fc13adff785122b4ad28809a3420982341241421348097878e577c991de8f0";
const fcmV1RegistrationId = process.env.FCMV1_REGISTRATION_ID || DUMMY_REGISTRATION;

async function main(): Promise<void> {
  const context = createClientContext(connectionString, hubName);

  const installation = createFcmV1Installation({
    installationId: randomUUID(),
    pushChannel: fcmV1RegistrationId,
    tags: ["likes_hockey", "likes_football"],
  });

  const result = await createOrUpdateInstallation(context, installation);
  console.log(`Tracking ID: ${result.trackingId}`);
  console.log(`Correlation ID: ${result.correlationId}`);
}

main().catch((err) => {
  console.log("createInstallation Sample: Error occurred: ", err);
  process.exit(1);
});
