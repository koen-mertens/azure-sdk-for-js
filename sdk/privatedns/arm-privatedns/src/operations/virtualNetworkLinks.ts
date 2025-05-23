/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { VirtualNetworkLinks } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { PrivateDnsManagementClient } from "../privateDnsManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  VirtualNetworkLink,
  VirtualNetworkLinksListNextOptionalParams,
  VirtualNetworkLinksListOptionalParams,
  VirtualNetworkLinksListResponse,
  VirtualNetworkLinksCreateOrUpdateOptionalParams,
  VirtualNetworkLinksCreateOrUpdateResponse,
  VirtualNetworkLinksUpdateOptionalParams,
  VirtualNetworkLinksUpdateResponse,
  VirtualNetworkLinksDeleteOptionalParams,
  VirtualNetworkLinksGetOptionalParams,
  VirtualNetworkLinksGetResponse,
  VirtualNetworkLinksListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing VirtualNetworkLinks operations. */
export class VirtualNetworkLinksImpl implements VirtualNetworkLinks {
  private readonly client: PrivateDnsManagementClient;

  /**
   * Initialize a new instance of the class VirtualNetworkLinks class.
   * @param client Reference to the service client
   */
  constructor(client: PrivateDnsManagementClient) {
    this.client = client;
  }

  /**
   * Lists the virtual network links to the specified Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    privateZoneName: string,
    options?: VirtualNetworkLinksListOptionalParams,
  ): PagedAsyncIterableIterator<VirtualNetworkLink> {
    const iter = this.listPagingAll(
      resourceGroupName,
      privateZoneName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          privateZoneName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    privateZoneName: string,
    options?: VirtualNetworkLinksListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<VirtualNetworkLink[]> {
    let result: VirtualNetworkLinksListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, privateZoneName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        privateZoneName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    privateZoneName: string,
    options?: VirtualNetworkLinksListOptionalParams,
  ): AsyncIterableIterator<VirtualNetworkLink> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      privateZoneName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates a virtual network link to the specified Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    privateZoneName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLink,
    options?: VirtualNetworkLinksCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualNetworkLinksCreateOrUpdateResponse>,
      VirtualNetworkLinksCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VirtualNetworkLinksCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        privateZoneName,
        virtualNetworkLinkName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      VirtualNetworkLinksCreateOrUpdateResponse,
      OperationState<VirtualNetworkLinksCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a virtual network link to the specified Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateZoneName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLink,
    options?: VirtualNetworkLinksCreateOrUpdateOptionalParams,
  ): Promise<VirtualNetworkLinksCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      privateZoneName,
      virtualNetworkLinkName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a virtual network link to the specified Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    privateZoneName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLink,
    options?: VirtualNetworkLinksUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualNetworkLinksUpdateResponse>,
      VirtualNetworkLinksUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VirtualNetworkLinksUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        privateZoneName,
        virtualNetworkLinkName,
        parameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      VirtualNetworkLinksUpdateResponse,
      OperationState<VirtualNetworkLinksUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a virtual network link to the specified Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    privateZoneName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLink,
    options?: VirtualNetworkLinksUpdateOptionalParams,
  ): Promise<VirtualNetworkLinksUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      privateZoneName,
      virtualNetworkLinkName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a virtual network link to the specified Private DNS zone. WARNING: In case of a registration
   * virtual network, all auto-registered DNS records in the zone for the virtual network will also be
   * deleted. This operation cannot be undone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    privateZoneName: string,
    virtualNetworkLinkName: string,
    options?: VirtualNetworkLinksDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        privateZoneName,
        virtualNetworkLinkName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a virtual network link to the specified Private DNS zone. WARNING: In case of a registration
   * virtual network, all auto-registered DNS records in the zone for the virtual network will also be
   * deleted. This operation cannot be undone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    privateZoneName: string,
    virtualNetworkLinkName: string,
    options?: VirtualNetworkLinksDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      privateZoneName,
      virtualNetworkLinkName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a virtual network link to the specified Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateZoneName: string,
    virtualNetworkLinkName: string,
    options?: VirtualNetworkLinksGetOptionalParams,
  ): Promise<VirtualNetworkLinksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateZoneName, virtualNetworkLinkName, options },
      getOperationSpec,
    );
  }

  /**
   * Lists the virtual network links to the specified Private DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    privateZoneName: string,
    options?: VirtualNetworkLinksListOptionalParams,
  ): Promise<VirtualNetworkLinksListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateZoneName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param privateZoneName The name of the Private DNS zone (without a terminating dot).
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    privateZoneName: string,
    nextLink: string,
    options?: VirtualNetworkLinksListNextOptionalParams,
  ): Promise<VirtualNetworkLinksListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateZoneName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkLink,
    },
    201: {
      bodyMapper: Mappers.VirtualNetworkLink,
    },
    202: {
      bodyMapper: Mappers.VirtualNetworkLink,
    },
    204: {
      bodyMapper: Mappers.VirtualNetworkLink,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId,
    Parameters.virtualNetworkLinkName,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkLink,
    },
    201: {
      bodyMapper: Mappers.VirtualNetworkLink,
    },
    202: {
      bodyMapper: Mappers.VirtualNetworkLink,
    },
    204: {
      bodyMapper: Mappers.VirtualNetworkLink,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId,
    Parameters.virtualNetworkLinkName,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId,
    Parameters.virtualNetworkLinkName,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkLink,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId,
    Parameters.virtualNetworkLinkName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkLinkListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkLinkListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.privateZoneName,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
