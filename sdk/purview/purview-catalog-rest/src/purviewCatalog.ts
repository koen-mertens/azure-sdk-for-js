// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import type { TokenCredential } from "@azure/core-auth";
import type { PurviewCatalogClient } from "./clientDefinitions.js";

export default function createClient(
  Endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {},
): PurviewCatalogClient {
  const baseUrl = options.baseUrl ?? `${Endpoint}/catalog/api`;
  options.apiVersion = options.apiVersion ?? "2022-03-01-preview";
  options = {
    ...options,
    credentials: {
      scopes: ["https://purview.azure.net/.default"],
    },
  };

  const userAgentInfo = `azsdk-js-purview-catalog-rest/1.0.0-beta.5`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(baseUrl, credentials, options) as PurviewCatalogClient;

  return client;
}
