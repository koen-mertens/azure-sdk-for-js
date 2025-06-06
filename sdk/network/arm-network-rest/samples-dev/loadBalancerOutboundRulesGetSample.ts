// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { LoadBalancerOutboundRulesGetParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the specified load balancer outbound rule.
 *
 * @summary Gets the specified load balancer outbound rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/LoadBalancerOutboundRuleGet.json
 */
async function loadBalancerOutboundRuleGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb1";
  const outboundRuleName = "rule1";
  const options: LoadBalancerOutboundRulesGetParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/outboundRules/{outboundRuleName}",
      subscriptionId,
      resourceGroupName,
      loadBalancerName,
      outboundRuleName,
    )
    .get(options);
  console.log(result);
}

loadBalancerOutboundRuleGet().catch(console.error);
