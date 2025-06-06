/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VpnGateway, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.
 *
 * @summary Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-07-01/examples/VpnGatewayPut.json
 */
async function vpnGatewayPut(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const gatewayName = "gateway1";
  const vpnGatewayParameters: VpnGateway = {
    bgpSettings: {
      asn: 65515,
      bgpPeeringAddresses: [
        {
          customBgpIpAddresses: ["169.254.21.5"],
          ipconfigurationId: "Instance0",
        },
        {
          customBgpIpAddresses: ["169.254.21.10"],
          ipconfigurationId: "Instance1",
        },
      ],
      peerWeight: 0,
    },
    connections: [
      {
        name: "vpnConnection1",
        remoteVpnSite: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnSites/vpnSite1",
        },
        vpnLinkConnections: [
          {
            name: "Connection-Link1",
            connectionBandwidth: 200,
            egressNatRules: [
              {
                id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnGateways/gateway1/natRules/nat03",
              },
            ],
            sharedKey: "key",
            vpnConnectionProtocolType: "IKEv2",
            vpnSiteLink: {
              id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnSites/vpnSite1/vpnSiteLinks/siteLink1",
            },
          },
        ],
      },
    ],
    enableBgpRouteTranslationForNat: false,
    isRoutingPreferenceInternet: false,
    location: "westcentralus",
    natRules: [
      {
        name: "nat03",
        typePropertiesType: "Static",
        externalMappings: [{ addressSpace: "192.168.0.0/26" }],
        internalMappings: [{ addressSpace: "0.0.0.0/26" }],
        ipConfigurationId: "",
        mode: "EgressSnat",
      },
    ],
    tags: { key1: "value1" },
    virtualHub: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.vpnGateways.beginCreateOrUpdateAndWait(
    resourceGroupName,
    gatewayName,
    vpnGatewayParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await vpnGatewayPut();
}

main().catch(console.error);
