---
page_type: sample
languages:
  - typescript
products:
  - azure
  - azure-remote-rendering
  - azure-spatial-anchors
urlFragment: mixed-reality-authentication-typescript
---

# Azure Mixed Reality Authentication client library samples for TypeScript

These sample programs show how to use the TypeScript client libraries for Azure Mixed Reality Authentication in some common scenarios.

| **File Name**           | **Description**                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| [getToken.ts][gettoken] | This sample demonstrates how to retrieve an access token from the Mixed Reality security token service (STS). |

## Prerequisites

The sample programs are compatible with Node.js >=12.0.0.

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] and the following Azure resources to run these sample programs:

- [Azure Object Anchors account][createinstance_azureobjectanchorsaccount]
- [Azure Remote Rendering account][createinstance_azureremoterenderingaccount]
- [Azure Spatial Anchors account][createinstance_azurespatialanchorsaccount]

Any one of the above Azure resources can be used with the samples. Set the `MIXEDREALITY_ACCOUNT_DOMAIN`,
`MIXEDREALITY_ACCOUNT_ID`, and `MIXEDREALITY_ACCOUNT_KEY` environment variables to the corresponding value
from the account (of any of the above resource types) you wish to use when running the samples.

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
node dist/getToken.ts
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env MIXEDREALITY_ACCOUNT_DOMAIN="<mixedreality account domain>" MIXEDREALITY_ACCOUNT_ID="<mixedreality account id>" MIXEDREALITY_ACCOUNT_KEY="<mixedreality account key>" node dist/getToken.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[gettoken]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/mixed-reality-authentication/samples/v1/typescript/src/getToken.ts
[apiref]: https://learn.microsoft.com/javascript/api/
[freesub]: https://azure.microsoft.com/free/
[createinstance_azureobjectanchorsaccount]: https://learn.microsoft.com/azure/object-anchors/quickstarts/get-started-model-conversion#create-an-object-anchors-account
[createinstance_azureremoterenderingaccount]: https://learn.microsoft.com/azure/remote-rendering/quickstarts/convert-model#azure-setup
[createinstance_azurespatialanchorsaccount]: https://learn.microsoft.com/azure/spatial-anchors/quickstarts/get-started-hololens?tabs=azure-portal#create-a-spatial-anchors-resource
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/mixedreality/mixed-reality-authentication/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
