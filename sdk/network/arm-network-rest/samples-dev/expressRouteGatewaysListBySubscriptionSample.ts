// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ExpressRouteGatewaysListBySubscriptionParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists ExpressRoute gateways under a given subscription.
 *
 * @summary Lists ExpressRoute gateways under a given subscription.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ExpressRouteGatewayListBySubscription.json
 */
async function expressRouteGatewayListBySubscription(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const options: ExpressRouteGatewaysListBySubscriptionParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteGateways",
      subscriptionId,
    )
    .get(options);
  console.log(result);
}

expressRouteGatewayListBySubscription().catch(console.error);
