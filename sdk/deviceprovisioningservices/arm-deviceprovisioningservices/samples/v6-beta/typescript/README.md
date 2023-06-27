# client library samples for TypeScript (Beta)

These sample programs show how to use the TypeScript client libraries for in some common scenarios.

| **File Name**                                                                                                                   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dpsCertificateCreateOrUpdateSample.ts][dpscertificatecreateorupdatesample]                                                     | Add new certificate or update an existing certificate. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSCertificateCreateOrUpdate.json                                                                                                                                                                                                  |
| [dpsCertificateDeleteSample.ts][dpscertificatedeletesample]                                                                     | Deletes the specified certificate associated with the Provisioning Service x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSDeleteCertificate.json                                                                                                                                                                                      |
| [dpsCertificateGenerateVerificationCodeSample.ts][dpscertificategenerateverificationcodesample]                                 | Generate verification code for Proof of Possession. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSGenerateVerificationCode.json                                                                                                                                                                                                      |
| [dpsCertificateGetSample.ts][dpscertificategetsample]                                                                           | Get the certificate from the provisioning service. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSGetCertificate.json                                                                                                                                                                                                                 |
| [dpsCertificateListSample.ts][dpscertificatelistsample]                                                                         | Get all the certificates tied to the provisioning service. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSGetCertificates.json                                                                                                                                                                                                        |
| [dpsCertificateVerifyCertificateSample.ts][dpscertificateverifycertificatesample]                                               | Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSVerifyCertificate.json                                                                                                                                  |
| [iotDpsResourceCheckProvisioningServiceNameAvailabilitySample.ts][iotdpsresourcecheckprovisioningservicenameavailabilitysample] | Check if a provisioning service name is available. This will validate if the name is syntactically valid and if the name is usable x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSCheckNameAvailability.json                                                                                                                          |
| [iotDpsResourceCreateOrUpdatePrivateEndpointConnectionSample.ts][iotdpsresourcecreateorupdateprivateendpointconnectionsample]   | Create or update the status of a private endpoint connection with the specified name x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSCreateOrUpdatePrivateEndpointConnection.json                                                                                                                                                      |
| [iotDpsResourceCreateOrUpdateSample.ts][iotdpsresourcecreateorupdatesample]                                                     | Create or update the metadata of the provisioning service. The usual pattern to modify a property is to retrieve the provisioning service metadata and security metadata, and then combine them with the modified values in a new body to update the provisioning service. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSCreate.json |
| [iotDpsResourceDeletePrivateEndpointConnectionSample.ts][iotdpsresourcedeleteprivateendpointconnectionsample]                   | Delete private endpoint connection with the specified name x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSDeletePrivateEndpointConnection.json                                                                                                                                                                                        |
| [iotDpsResourceDeleteSample.ts][iotdpsresourcedeletesample]                                                                     | Deletes the Provisioning Service. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSDelete.json                                                                                                                                                                                                                                          |
| [iotDpsResourceGetOperationResultSample.ts][iotdpsresourcegetoperationresultsample]                                             | Gets the status of a long running operation, such as create, update or delete a provisioning service. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSGetOperationResult.json                                                                                                                                                          |
| [iotDpsResourceGetPrivateEndpointConnectionSample.ts][iotdpsresourcegetprivateendpointconnectionsample]                         | Get private endpoint connection properties x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSGetPrivateEndpointConnection.json                                                                                                                                                                                                           |
| [iotDpsResourceGetPrivateLinkResourcesSample.ts][iotdpsresourcegetprivatelinkresourcessample]                                   | Get the specified private link resource for the given provisioning service x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSGetPrivateLinkResources.json                                                                                                                                                                                |
| [iotDpsResourceGetSample.ts][iotdpsresourcegetsample]                                                                           | Get the metadata of the provisioning service without SAS keys. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSGet.json                                                                                                                                                                                                                |
| [iotDpsResourceListByResourceGroupSample.ts][iotdpsresourcelistbyresourcegroupsample]                                           | Get a list of all provisioning services in the given resource group. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSListByResourceGroup.json                                                                                                                                                                                          |
| [iotDpsResourceListBySubscriptionSample.ts][iotdpsresourcelistbysubscriptionsample]                                             | List all the provisioning services for a given subscription id. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSListBySubscription.json                                                                                                                                                                                                |
| [iotDpsResourceListKeysForKeyNameSample.ts][iotdpsresourcelistkeysforkeynamesample]                                             | List primary and secondary keys for a specific key name x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSGetKey.json                                                                                                                                                                                                                    |
| [iotDpsResourceListKeysSample.ts][iotdpsresourcelistkeyssample]                                                                 | List the primary and secondary keys for a provisioning service. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSListKeys.json                                                                                                                                                                                                          |
| [iotDpsResourceListPrivateEndpointConnectionsSample.ts][iotdpsresourcelistprivateendpointconnectionssample]                     | List private endpoint connection properties x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSListPrivateEndpointConnections.json                                                                                                                                                                                                        |
| [iotDpsResourceListPrivateLinkResourcesSample.ts][iotdpsresourcelistprivatelinkresourcessample]                                 | List private link resources for the given provisioning service x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSListPrivateLinkResources.json                                                                                                                                                                                           |
| [iotDpsResourceListValidSkusSample.ts][iotdpsresourcelistvalidskussample]                                                       | Gets the list of valid SKUs and tiers for a provisioning service. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSGetValidSku.json                                                                                                                                                                                                     |
| [iotDpsResourceUpdateSample.ts][iotdpsresourceupdatesample]                                                                     | Update an existing provisioning service's tags. to update other fields use the CreateOrUpdate method x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSPatch.json                                                                                                                                                                        |
| [operationsListSample.ts][operationslistsample]                                                                                 | Lists all of the available Microsoft.Devices REST API operations. x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/preview/2023-03-01-preview/examples/DPSOperations.json                                                                                                                                                                                                      |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/dpsCertificateCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env DEVICEPROVISIONINGSERVICES_SUBSCRIPTION_ID="<deviceprovisioningservices subscription id>" DEVICEPROVISIONINGSERVICES_RESOURCE_GROUP="<deviceprovisioningservices resource group>" node dist/dpsCertificateCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[dpscertificatecreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/dpsCertificateCreateOrUpdateSample.ts
[dpscertificatedeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/dpsCertificateDeleteSample.ts
[dpscertificategenerateverificationcodesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/dpsCertificateGenerateVerificationCodeSample.ts
[dpscertificategetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/dpsCertificateGetSample.ts
[dpscertificatelistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/dpsCertificateListSample.ts
[dpscertificateverifycertificatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/dpsCertificateVerifyCertificateSample.ts
[iotdpsresourcecheckprovisioningservicenameavailabilitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceCheckProvisioningServiceNameAvailabilitySample.ts
[iotdpsresourcecreateorupdateprivateendpointconnectionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceCreateOrUpdatePrivateEndpointConnectionSample.ts
[iotdpsresourcecreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceCreateOrUpdateSample.ts
[iotdpsresourcedeleteprivateendpointconnectionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceDeletePrivateEndpointConnectionSample.ts
[iotdpsresourcedeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceDeleteSample.ts
[iotdpsresourcegetoperationresultsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceGetOperationResultSample.ts
[iotdpsresourcegetprivateendpointconnectionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceGetPrivateEndpointConnectionSample.ts
[iotdpsresourcegetprivatelinkresourcessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceGetPrivateLinkResourcesSample.ts
[iotdpsresourcegetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceGetSample.ts
[iotdpsresourcelistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceListByResourceGroupSample.ts
[iotdpsresourcelistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceListBySubscriptionSample.ts
[iotdpsresourcelistkeysforkeynamesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceListKeysForKeyNameSample.ts
[iotdpsresourcelistkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceListKeysSample.ts
[iotdpsresourcelistprivateendpointconnectionssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceListPrivateEndpointConnectionsSample.ts
[iotdpsresourcelistprivatelinkresourcessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceListPrivateLinkResourcesSample.ts
[iotdpsresourcelistvalidskussample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceListValidSkusSample.ts
[iotdpsresourceupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/iotDpsResourceUpdateSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/samples/v6-beta/typescript/src/operationsListSample.ts
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-deviceprovisioningservices?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/deviceprovisioningservices/arm-deviceprovisioningservices/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html