/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { UserIdentities } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
  UserIdentityContract,
  UserIdentitiesListNextOptionalParams,
  UserIdentitiesListOptionalParams,
  UserIdentitiesListResponse,
  UserIdentitiesListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing UserIdentities operations. */
export class UserIdentitiesImpl implements UserIdentities {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class UserIdentities class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * List of all user identities.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    userId: string,
    options?: UserIdentitiesListOptionalParams,
  ): PagedAsyncIterableIterator<UserIdentityContract> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      userId,
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
          serviceName,
          userId,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    userId: string,
    options?: UserIdentitiesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<UserIdentityContract[]> {
    let result: UserIdentitiesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        serviceName,
        userId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        userId,
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
    serviceName: string,
    userId: string,
    options?: UserIdentitiesListOptionalParams,
  ): AsyncIterableIterator<UserIdentityContract> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      userId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List of all user identities.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    userId: string,
    options?: UserIdentitiesListOptionalParams,
  ): Promise<UserIdentitiesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, userId, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    userId: string,
    nextLink: string,
    options?: UserIdentitiesListNextOptionalParams,
  ): Promise<UserIdentitiesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, userId, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/users/{userId}/identities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserIdentityCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.userId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserIdentityCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.serviceName,
    Parameters.userId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
