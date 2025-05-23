/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { WorkspaceDiagnostic } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
  DiagnosticContract,
  WorkspaceDiagnosticListByWorkspaceNextOptionalParams,
  WorkspaceDiagnosticListByWorkspaceOptionalParams,
  WorkspaceDiagnosticListByWorkspaceResponse,
  WorkspaceDiagnosticGetEntityTagOptionalParams,
  WorkspaceDiagnosticGetEntityTagResponse,
  WorkspaceDiagnosticGetOptionalParams,
  WorkspaceDiagnosticGetResponse,
  WorkspaceDiagnosticCreateOrUpdateOptionalParams,
  WorkspaceDiagnosticCreateOrUpdateResponse,
  DiagnosticUpdateContract,
  WorkspaceDiagnosticUpdateOptionalParams,
  WorkspaceDiagnosticUpdateResponse,
  WorkspaceDiagnosticDeleteOptionalParams,
  WorkspaceDiagnosticListByWorkspaceNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceDiagnostic operations. */
export class WorkspaceDiagnosticImpl implements WorkspaceDiagnostic {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceDiagnostic class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists all diagnostics in the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceDiagnosticListByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<DiagnosticContract> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      serviceName,
      workspaceId,
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
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          serviceName,
          workspaceId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceDiagnosticListByWorkspaceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DiagnosticContract[]> {
    let result: WorkspaceDiagnosticListByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByWorkspace(
        resourceGroupName,
        serviceName,
        workspaceId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByWorkspaceNext(
        resourceGroupName,
        serviceName,
        workspaceId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceDiagnosticListByWorkspaceOptionalParams,
  ): AsyncIterableIterator<DiagnosticContract> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      serviceName,
      workspaceId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all diagnostics in the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceDiagnosticListByWorkspaceOptionalParams,
  ): Promise<WorkspaceDiagnosticListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, options },
      listByWorkspaceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the Diagnostic specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
   *                     instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    diagnosticId: string,
    options?: WorkspaceDiagnosticGetEntityTagOptionalParams,
  ): Promise<WorkspaceDiagnosticGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, diagnosticId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the details of the Diagnostic specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
   *                     instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    diagnosticId: string,
    options?: WorkspaceDiagnosticGetOptionalParams,
  ): Promise<WorkspaceDiagnosticGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, diagnosticId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a new Diagnostic or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
   *                     instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    diagnosticId: string,
    parameters: DiagnosticContract,
    options?: WorkspaceDiagnosticCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceDiagnosticCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        diagnosticId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Updates the details of the Diagnostic specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
   *                     instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Diagnostic Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    diagnosticId: string,
    ifMatch: string,
    parameters: DiagnosticUpdateContract,
    options?: WorkspaceDiagnosticUpdateOptionalParams,
  ): Promise<WorkspaceDiagnosticUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        diagnosticId,
        ifMatch,
        parameters,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Deletes the specified Diagnostic.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
   *                     instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    diagnosticId: string,
    ifMatch: string,
    options?: WorkspaceDiagnosticDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        diagnosticId,
        ifMatch,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * ListByWorkspaceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param nextLink The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options The options parameters.
   */
  private _listByWorkspaceNext(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    nextLink: string,
    options?: WorkspaceDiagnosticListByWorkspaceNextOptionalParams,
  ): Promise<WorkspaceDiagnosticListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, nextLink, options },
      listByWorkspaceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/diagnostics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/diagnostics/{diagnosticId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.WorkspaceDiagnosticGetEntityTagHeaders,
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
    Parameters.diagnosticId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/diagnostics/{diagnosticId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticContract,
      headersMapper: Mappers.WorkspaceDiagnosticGetHeaders,
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
    Parameters.diagnosticId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/diagnostics/{diagnosticId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticContract,
      headersMapper: Mappers.WorkspaceDiagnosticCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.DiagnosticContract,
      headersMapper: Mappers.WorkspaceDiagnosticCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.diagnosticId,
    Parameters.workspaceId,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/diagnostics/{diagnosticId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticContract,
      headersMapper: Mappers.WorkspaceDiagnosticUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters91,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.diagnosticId,
    Parameters.workspaceId,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch1,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/diagnostics/{diagnosticId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
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
    Parameters.diagnosticId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticCollection,
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
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
