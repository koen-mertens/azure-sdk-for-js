/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ScheduleOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AutomationClient } from "../automationClient.js";
import {
  Schedule,
  ScheduleListByAutomationAccountNextOptionalParams,
  ScheduleListByAutomationAccountOptionalParams,
  ScheduleListByAutomationAccountResponse,
  ScheduleCreateOrUpdateParameters,
  ScheduleCreateOrUpdateOptionalParams,
  ScheduleCreateOrUpdateResponse,
  ScheduleUpdateParameters,
  ScheduleUpdateOptionalParams,
  ScheduleUpdateResponse,
  ScheduleGetOptionalParams,
  ScheduleGetResponse,
  ScheduleDeleteOptionalParams,
  ScheduleListByAutomationAccountNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ScheduleOperations operations. */
export class ScheduleOperationsImpl implements ScheduleOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class ScheduleOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of schedules.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  public listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: ScheduleListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<Schedule> {
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
    options?: ScheduleListByAutomationAccountOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Schedule[]> {
    let result: ScheduleListByAutomationAccountResponse;
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
    options?: ScheduleListByAutomationAccountOptionalParams
  ): AsyncIterableIterator<Schedule> {
    for await (const page of this.listByAutomationAccountPagingPage(
      resourceGroupName,
      automationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create a schedule.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param scheduleName The schedule name.
   * @param parameters The parameters supplied to the create or update schedule operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    scheduleName: string,
    parameters: ScheduleCreateOrUpdateParameters,
    options?: ScheduleCreateOrUpdateOptionalParams
  ): Promise<ScheduleCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        scheduleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update the schedule identified by schedule name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param scheduleName The schedule name.
   * @param parameters The parameters supplied to the update schedule operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    scheduleName: string,
    parameters: ScheduleUpdateParameters,
    options?: ScheduleUpdateOptionalParams
  ): Promise<ScheduleUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        scheduleName,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Retrieve the schedule identified by schedule name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param scheduleName The schedule name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    scheduleName: string,
    options?: ScheduleGetOptionalParams
  ): Promise<ScheduleGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, scheduleName, options },
      getOperationSpec
    );
  }

  /**
   * Delete the schedule identified by schedule name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param scheduleName The schedule name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    scheduleName: string,
    options?: ScheduleDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, scheduleName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieve a list of schedules.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  private _listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: ScheduleListByAutomationAccountOptionalParams
  ): Promise<ScheduleListByAutomationAccountResponse> {
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
    options?: ScheduleListByAutomationAccountNextOptionalParams
  ): Promise<ScheduleListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nextLink, options },
      listByAutomationAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    201: {
      bodyMapper: Mappers.Schedule
    },
    409: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters21,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.scheduleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters22,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.scheduleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
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
    Parameters.scheduleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}",
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
    Parameters.scheduleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAutomationAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduleListResult
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
      bodyMapper: Mappers.ScheduleListResult
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
