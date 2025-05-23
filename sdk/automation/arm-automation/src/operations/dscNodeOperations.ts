/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { DscNodeOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AutomationClient } from "../automationClient.js";
import {
  DscNode,
  DscNodeListByAutomationAccountNextOptionalParams,
  DscNodeListByAutomationAccountOptionalParams,
  DscNodeListByAutomationAccountResponse,
  DscNodeDeleteOptionalParams,
  DscNodeGetOptionalParams,
  DscNodeGetResponse,
  DscNodeUpdateParameters,
  DscNodeUpdateOptionalParams,
  DscNodeUpdateResponse,
  DscNodeListByAutomationAccountNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing DscNodeOperations operations. */
export class DscNodeOperationsImpl implements DscNodeOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class DscNodeOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of dsc nodes.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  public listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: DscNodeListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<DscNode> {
    const iter = this.listByAutomationAccountPagingAll(
      resourceGroupName,
      automationAccountName,
      options
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
        return this.listByAutomationAccountPagingPage(
          resourceGroupName,
          automationAccountName,
          options,
          settings
        );
      }
    };
  }

  private async *listByAutomationAccountPagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    options?: DscNodeListByAutomationAccountOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DscNode[]> {
    let result: DscNodeListByAutomationAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAutomationAccount(
        resourceGroupName,
        automationAccountName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAutomationAccountNext(
        resourceGroupName,
        automationAccountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAutomationAccountPagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    options?: DscNodeListByAutomationAccountOptionalParams
  ): AsyncIterableIterator<DscNode> {
    for await (const page of this.listByAutomationAccountPagingPage(
      resourceGroupName,
      automationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Delete the dsc node identified by node id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The node id.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    nodeId: string,
    options?: DscNodeDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nodeId, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieve the dsc node identified by node id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The node id.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    nodeId: string,
    options?: DscNodeGetOptionalParams
  ): Promise<DscNodeGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nodeId, options },
      getOperationSpec
    );
  }

  /**
   * Update the dsc node.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId Parameters supplied to the update dsc node.
   * @param dscNodeUpdateParameters Parameters supplied to the update dsc node.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    nodeId: string,
    dscNodeUpdateParameters: DscNodeUpdateParameters,
    options?: DscNodeUpdateOptionalParams
  ): Promise<DscNodeUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        nodeId,
        dscNodeUpdateParameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Retrieve a list of dsc nodes.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  private _listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: DscNodeListByAutomationAccountOptionalParams
  ): Promise<DscNodeListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, options },
      listByAutomationAccountOperationSpec
    );
  }

  /**
   * ListByAutomationAccountNext
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nextLink The nextLink from the previous successful call to the ListByAutomationAccount
   *                 method.
   * @param options The options parameters.
   */
  private _listByAutomationAccountNext(
    resourceGroupName: string,
    automationAccountName: string,
    nextLink: string,
    options?: DscNodeListByAutomationAccountNextOptionalParams
  ): Promise<DscNodeListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nextLink, options },
      listByAutomationAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nodeId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscNode
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
    Parameters.automationAccountName,
    Parameters.nodeId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DscNode
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.dscNodeUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nodeId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByAutomationAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscNodeListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.skip,
    Parameters.top,
    Parameters.inlinecount
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAutomationAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscNodeListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
