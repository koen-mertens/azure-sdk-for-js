# Azure CommunicationMessages REST client library for JavaScript

This package contains a JavaScript SDK for Azure Communication Messages Services.

Key links:

- [Quick Start][azure_communication_messaging_qs]

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)

### Prerequisites

- You must have an [Azure subscription][azure_sub] to use this package.
- An existing Communication Services resource. If you need to create the resource, you can use the [Azure Portal][azure_portal], the [Azure PowerShell][azure_powershell], or the [Azure CLI][azure_cli].
- See [how to register whatsapp business account & create a channel][register_whatsapp_business_account] for registering whatsapp channel to your Communication Services resource.

### Install the `@azure-rest/communication-messages` package

Install the Azure CommunicationMessages REST client REST client library for JavaScript with `npm`:

```bash
npm install @azure-rest/communication-messages
```

## Authentication

You can get a key and/or connection string from your Communication Services resource in [Azure Portal][azure_portal]. Once you have a key, you may authenticate with any of the following methods:

### Using a connection string

```ts snippet:ReadmeSampleCreateClient_ConnectionString
import MessageClient from "@azure-rest/communication-messages";

const connectionString = `endpoint=https://<resource-name>.communication.azure.com/;accessKey=<Base64-Encoded-Key>`;
const client = MessageClient(connectionString);
```

### Using `AzureKeyCredential`

```ts snippet:ReadmeSampleCreateClient_KeyCredential
import { AzureKeyCredential } from "@azure/core-auth";
import MessageClient from "@azure-rest/communication-messages";

const endpoint = "https://<resource-name>.communication.azure.com";
const credential = new AzureKeyCredential("<Base64-Encoded-Key>");
const client = MessageClient(endpoint, credential);
```

### Using Azure Active Directory managed identity

Client API key authentication is used in most of the examples, but you can also authenticate with Azure Active Directory using the [Azure Identity library][azure_identity]. To use the [DefaultAzureCredential][defaultazurecredential] provider shown below, or other credential providers provided with the Azure SDK, please install the [`@azure/identity`][azure_identity] package:

```bash
npm install @azure/identity
```

The [`@azure/identity`][azure_identity] package provides a variety of credential types that your application can use to do this. The README for @azure/identity provides more details and samples to get you started.
AZURE_CLIENT_SECRET, AZURE_CLIENT_ID and AZURE_TENANT_ID environment variables are needed to create a DefaultAzureCredential object.

```ts snippet:ReadmeSampleCreateClient_DefaultAzureCredential
import { DefaultAzureCredential } from "@azure/identity";
import MessageClient from "@azure-rest/communication-messages";

const endpoint = "https://<resource-name>.communication.azure.com";
const credential = new DefaultAzureCredential();
const client = MessageClient(endpoint, credential);
```

## Send a Template Message with WhatsApp Channel

`Note: Business always starts the conversation with a template message.`

To send an Template Message, you need add template to your WhatsApp Bussiness Account. For more detail on WhatsApp Template, refer [Create and Manage Templates][create-manage-whatsapp-template]. In below example, we are using

```
 Template Name: sample_issue_resolution
 Template Language: en_US

 Template Body: "Hi {{1}}, were we able to solve the issue that you were facing?"

 With Quick Action Button (Yes, No)

```

```ts snippet:ReadmeSampleSendTemplateMessage
import { DefaultAzureCredential } from "@azure/identity";
import MessageClient, { isUnexpected } from "@azure-rest/communication-messages";

const endpoint = "https://<resource-name>.communication.azure.com";
const credential = new DefaultAzureCredential();
const client = MessageClient(endpoint, credential);

const nameValue = {
  kind: "text",
  name: "name",
  text: "Arif",
};

const yesAction = {
  kind: "quickAction",
  name: "Yes",
  payload: "Yes",
};

const noAction = {
  kind: "quickAction",
  name: "No",
  payload: "No",
};

const templateBindings = {
  kind: "whatsApp",
  body: [
    {
      refValue: "name",
    },
  ],
  buttons: [
    {
      subType: "quickReply",
      refValue: "Yes",
    },
    {
      subType: "quickReply",
      refValue: "No",
    },
  ],
};

const template = {
  name: "sample_issue_resolution",
  language: "en_US",
  bindings: templateBindings,
  values: [nameValue, yesAction, noAction],
};

const result = await client.path("/messages/notifications:send").post({
  contentType: "application/json",
  body: {
    channelRegistrationId: "<Channel_Registration_Id>",
    to: ["<to-phone-number-1>"],
    kind: "template",
    template: template,
  },
});

if (!isUnexpected(result)) {
  result.body.receipts.forEach((receipt) => {
    console.log("Message sent to:" + receipt.to + " with message id:" + receipt.messageId);
  });
}
```

## Send a Text Message with WhatsApp Channel

`Note: Business can't start a conversation with a text message. It needs to be user initiated.`

```ts snippet:ReadmeSampleSendTextMessage
import { DefaultAzureCredential } from "@azure/identity";
import MessageClient, { isUnexpected } from "@azure-rest/communication-messages";

const endpoint = "https://<resource-name>.communication.azure.com";
const credential = new DefaultAzureCredential();
const client = MessageClient(endpoint, credential);

const result = await client.path("/messages/notifications:send").post({
  contentType: "application/json",
  body: {
    channelRegistrationId: "<Channel_Registration_Id>",
    to: ["<to-phone-number-1>"],
    kind: "text",
    content: "Hello World!!",
  },
});

if (!isUnexpected(result)) {
  result.body.receipts.forEach((receipt) => {
    console.log("Message sent to:" + receipt.to + " with message id:" + receipt.messageId);
  });
}
```

## Send a Media Message with WhatsApp Channel

`Note: Business can't start a conversation with a media message. It needs to be user initiated.`

```ts snippet:ReadmeSampleSendMediaMessage
import { DefaultAzureCredential } from "@azure/identity";
import MessageClient, { isUnexpected } from "@azure-rest/communication-messages";

const endpoint = "https://<resource-name>.communication.azure.com";
const credential = new DefaultAzureCredential();
const client = MessageClient(endpoint, credential);

const result = await client.path("/messages/notifications:send").post({
  contentType: "application/json",
  body: {
    channelRegistrationId: "<Channel_Registration_Id>",
    to: ["<to-phone-number-1>"],
    kind: "image",
    mediaUri: "https://<your-media-image-file>",
  },
});

if (!isUnexpected(result)) {
  result.body.receipts.forEach((receipt) => {
    console.log("Message sent to:" + receipt.to + " with message id:" + receipt.messageId);
  });
}
```

## Send a Button Action Interactive Message with WhatsApp Channel

`Note: Business can't start a conversation with a media message. It needs to be user initiated.`

```ts snippet:ReadmeSampleSendButtonActionInteractiveMessage
import { DefaultAzureCredential } from "@azure/identity";
import MessageClient, {
  InteractiveMessage,
  isUnexpected,
} from "@azure-rest/communication-messages";

const endpoint = "https://<resource-name>.communication.azure.com";
const credential = new DefaultAzureCredential();
const client = MessageClient(endpoint, credential);

const interactiveMessage: InteractiveMessage = {
  body: {
    kind: "text",
    text: "Do you want to proceed?",
  },
  action: {
    kind: "whatsAppButtonAction",
    content: {
      kind: "buttonSet",
      buttons: [
        {
          id: "yes",
          title: "Yes",
        },
        {
          id: "no",
          title: "No",
        },
      ],
    },
  },
};

const result = await client.path("/messages/notifications:send").post({
  contentType: "application/json",
  body: {
    channelRegistrationId: "<Channel_Registration_Id>",
    to: ["<to-phone-number-1>"],
    kind: "interactive",
    interactiveMessage: interactiveMessage,
  },
});

if (!isUnexpected(result)) {
  result.body.receipts.forEach((receipt) => {
    console.log("Message sent to:" + receipt.to + " with message id:" + receipt.messageId);
  });
}
```

## Send a List Action Interactive Message with WhatsApp Channel

`Note: Business can't start a conversation with a media message. It needs to be user initiated.`

```ts snippet:ReadmeSampleSendListActionInteractiveMessage
import { DefaultAzureCredential } from "@azure/identity";
import MessageClient, {
  InteractiveMessage,
  isUnexpected,
} from "@azure-rest/communication-messages";

const endpoint = "https://<resource-name>.communication.azure.com";
const credential = new DefaultAzureCredential();
const client = MessageClient(endpoint, credential);

const interactiveMessage: InteractiveMessage = {
  body: {
    kind: "text",
    text: "Which shipping option do you want?",
  },
  action: {
    kind: "whatsAppListAction",
    content: {
      kind: "group",
      title: "Shipping Options",
      groups: [
        {
          title: "Express Delivery",
          items: [
            {
              id: "priority_mail_express",
              title: "Priority Mail Express",
              description: "Delivered on same day!",
            },
            {
              id: "priority_mail",
              title: "Priority Mail",
              description: "Delivered in 1-2 days",
            },
          ],
        },
        {
          title: "Normal Delivery",
          items: [
            {
              id: "usps_ground_advantage",
              title: "USPS Ground Advantage",
              description: "Delivered in 2-5 days",
            },
            {
              id: "usps_mail",
              title: "Normal Mail",
              description: "Delivered in 5-8 days",
            },
          ],
        },
      ],
    },
  },
};

const result = await client.path("/messages/notifications:send").post({
  contentType: "application/json",
  body: {
    channelRegistrationId: "<Channel_Registration_Id>",
    to: ["<to-phone-number-1>"],
    kind: "interactive",
    interactiveMessage: interactiveMessage,
  },
});

if (!isUnexpected(result)) {
  result.body.receipts.forEach((receipt) => {
    console.log("Message sent to:" + receipt.to + " with message id:" + receipt.messageId);
  });
}
```

## Send a Url Action Interactive Message with WhatsApp Channel

`Note: Business can't start a conversation with a media message. It needs to be user initiated.`

```ts snippet:ReadmeSampleSendUrlActionInteractiveMessage
import { DefaultAzureCredential } from "@azure/identity";
import MessageClient, {
  InteractiveMessage,
  isUnexpected,
} from "@azure-rest/communication-messages";

const endpoint = "https://<resource-name>.communication.azure.com";
const credential = new DefaultAzureCredential();
const client = MessageClient(endpoint, credential);

const interactiveMessage: InteractiveMessage = {
  body: {
    kind: "text",
    text: "Find more detail in the link.",
  },
  action: {
    kind: "whatsAppUrlAction",
    content: {
      kind: "url",
      title: "link",
      url: "https://<your-url-link>",
    },
  },
  footer: {
    kind: "text",
    text: "This is a footer message",
  },
};

const result = await client.path("/messages/notifications:send").post({
  contentType: "application/json",
  body: {
    channelRegistrationId: "<Channel_Registration_Id>",
    to: ["<to-phone-number-1>"],
    kind: "interactive",
    interactiveMessage: interactiveMessage,
  },
});

if (!isUnexpected(result)) {
  result.body.receipts.forEach((receipt) => {
    console.log("Message sent to:" + receipt.to + " with message id:" + receipt.messageId);
  });
}
```

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```ts snippet:SetLogLevel
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).

## Next steps

Please take a look at the [samples](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communication/communication-messages-rest/samples) directory for detailed examples on how to use this library.

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/main/CONTRIBUTING.md) to learn more about how to build and test the code.

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)

[azure_cli]: https://learn.microsoft.com/cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[azure_portal]: https://portal.azure.com
[azure_powershell]: https://learn.microsoft.com/powershell/module/az.communication/new-azcommunicationservice
[defaultazurecredential]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#defaultazurecredential
[azure_identity]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity
[azure_communication_messaging_qs]: https://learn.microsoft.com/azure/communication-services/concepts/advanced-messaging/whatsapp/whatsapp-overview
[register_whatsapp_business_account]: https://learn.microsoft.com/azure/communication-services/quickstarts/advanced-messaging/whatsapp/connect-whatsapp-business-account
[create-manage-whatsapp-template]: https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/
