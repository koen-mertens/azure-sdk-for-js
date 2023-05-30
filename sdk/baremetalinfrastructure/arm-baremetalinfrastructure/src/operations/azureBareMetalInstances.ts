/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AzureBareMetalInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BareMetalInfrastructureClient } from "../bareMetalInfrastructureClient";
import {
  AzureBareMetalInstance,
  AzureBareMetalInstancesListBySubscriptionNextOptionalParams,
  AzureBareMetalInstancesListBySubscriptionOptionalParams,
  AzureBareMetalInstancesListBySubscriptionResponse,
  AzureBareMetalInstancesListByResourceGroupNextOptionalParams,
  AzureBareMetalInstancesListByResourceGroupOptionalParams,
  AzureBareMetalInstancesListByResourceGroupResponse,
  AzureBareMetalInstancesGetOptionalParams,
  AzureBareMetalInstancesGetResponse,
  Tags,
  AzureBareMetalInstancesUpdateOptionalParams,
  AzureBareMetalInstancesUpdateResponse,
  AzureBareMetalInstancesListBySubscriptionNextResponse,
  AzureBareMetalInstancesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AzureBareMetalInstances operations. */
export class AzureBareMetalInstancesImpl implements AzureBareMetalInstances {
  private readonly client: BareMetalInfrastructureClient;

  /**
   * Initialize a new instance of the class AzureBareMetalInstances class.
   * @param client Reference to the service client
   */
  constructor(client: BareMetalInfrastructureClient) {
    this.client = client;
  }

  /**
   * Gets a list of AzureBareMetal instances in the specified subscription. The operations returns
   * various properties of each Azure BareMetal instance.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AzureBareMetalInstancesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AzureBareMetalInstance> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: AzureBareMetalInstancesListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AzureBareMetalInstance[]> {
    let result: AzureBareMetalInstancesListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: AzureBareMetalInstancesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<AzureBareMetalInstance> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of AzureBareMetal instances in the specified subscription and resource group. The
   * operations returns various properties of each Azure BareMetal instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AzureBareMetalInstancesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AzureBareMetalInstance> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: AzureBareMetalInstancesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AzureBareMetalInstance[]> {
    let result: AzureBareMetalInstancesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AzureBareMetalInstancesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AzureBareMetalInstance> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of AzureBareMetal instances in the specified subscription. The operations returns
   * various properties of each Azure BareMetal instance.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AzureBareMetalInstancesListBySubscriptionOptionalParams
  ): Promise<AzureBareMetalInstancesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Gets a list of AzureBareMetal instances in the specified subscription and resource group. The
   * operations returns various properties of each Azure BareMetal instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AzureBareMetalInstancesListByResourceGroupOptionalParams
  ): Promise<AzureBareMetalInstancesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets an Azure BareMetal instance for the specified subscription, resource group, and instance name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure BareMetal on Azure instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    options?: AzureBareMetalInstancesGetOptionalParams
  ): Promise<AzureBareMetalInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, azureBareMetalInstanceName, options },
      getOperationSpec
    );
  }

  /**
   * Patches the Tags field of a Azure BareMetal instance for the specified subscription, resource group,
   * and instance name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure BareMetal on Azure instance.
   * @param tagsParameter Request body that only contains the new Tags field
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    tagsParameter: Tags,
    options?: AzureBareMetalInstancesUpdateOptionalParams
  ): Promise<AzureBareMetalInstancesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, azureBareMetalInstanceName, tagsParameter, options },
      updateOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AzureBareMetalInstancesListBySubscriptionNextOptionalParams
  ): Promise<AzureBareMetalInstancesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AzureBareMetalInstancesListByResourceGroupNextOptionalParams
  ): Promise<AzureBareMetalInstancesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances/{azureBareMetalInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureBareMetalInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances/{azureBareMetalInstanceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.tagsParameter,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureBareMetalInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};