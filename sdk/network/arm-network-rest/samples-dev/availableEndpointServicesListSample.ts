// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { AvailableEndpointServicesListParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient, { paginate } from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List what values of endpoint services are available for use.
 *
 * @summary List what values of endpoint services are available for use.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/EndpointServicesList.json
 */
async function endpointServicesList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const location = "westus";
  const options: AvailableEndpointServicesListParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/virtualNetworkAvailableEndpointServices",
      subscriptionId,
      location,
    )
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

endpointServicesList().catch(console.error);
