/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ImportJobs } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureDigitalTwinsAPI } from "../azureDigitalTwinsAPI.js";
import {
  ImportJob,
  ImportJobsListNextOptionalParams,
  ImportJobsListOptionalParams,
  ImportJobsListResponse,
  ImportJobsAddOptionalParams,
  ImportJobsAddResponse,
  ImportJobsGetByIdOptionalParams,
  ImportJobsGetByIdResponse,
  ImportJobsDeleteOptionalParams,
  ImportJobsCancelOptionalParams,
  ImportJobsCancelResponse,
  ImportJobsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ImportJobs operations. */
export class ImportJobsImpl implements ImportJobs {
  private readonly client: AzureDigitalTwinsAPI;

  /**
   * Initialize a new instance of the class ImportJobs class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDigitalTwinsAPI) {
    this.client = client;
  }

  /**
   * Retrieves all import jobs.
   * Status codes:
   * * 200 OK
   * @param options The options parameters.
   */
  public list(
    options?: ImportJobsListOptionalParams,
  ): PagedAsyncIterableIterator<ImportJob> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: ImportJobsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ImportJob[]> {
    let result: ImportJobsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ImportJobsListOptionalParams,
  ): AsyncIterableIterator<ImportJob> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieves all import jobs.
   * Status codes:
   * * 200 OK
   * @param options The options parameters.
   */
  private _list(
    options?: ImportJobsListOptionalParams,
  ): Promise<ImportJobsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Creates an import job.
   * Status codes:
   * * 201 Created
   * * 400 Bad Request
   *   * JobLimitReached - The maximum number of import jobs allowed has been reached.
   *   * ValidationFailed - The import job request is not valid.
   * @param id The id for the import job. The id is unique within the service and case sensitive.
   * @param importJob The import job being added.
   * @param options The options parameters.
   */
  add(
    id: string,
    importJob: ImportJob,
    options?: ImportJobsAddOptionalParams,
  ): Promise<ImportJobsAddResponse> {
    return this.client.sendOperationRequest(
      { id, importJob, options },
      addOperationSpec,
    );
  }

  /**
   * Retrieves an import job.
   * Status codes:
   * * 200 OK
   * * 404 Not Found
   *   * ImportJobNotFound - The import job was not found.
   * @param id The id for the import job. The id is unique within the service and case sensitive.
   * @param options The options parameters.
   */
  getById(
    id: string,
    options?: ImportJobsGetByIdOptionalParams,
  ): Promise<ImportJobsGetByIdResponse> {
    return this.client.sendOperationRequest(
      { id, options },
      getByIdOperationSpec,
    );
  }

  /**
   * Deletes an import job. This is simply used to remove a job id, so it may be reused later. It can not
   * be used to stop entities from being imported.
   * Status codes:
   * * 204 No Content
   * * 400 Bad Request
   *   * ValidationFailed - The import job request is not valid.
   * @param id The id for the import job. The id is unique within the service and case sensitive.
   * @param options The options parameters.
   */
  delete(id: string, options?: ImportJobsDeleteOptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { id, options },
      deleteOperationSpec,
    );
  }

  /**
   * Cancels an import job that is currently running. Service will stop any import operations triggered
   * by the current import job that are in progress, and go to a cancelled state. Please note that this
   * will leave your instance in an unknown state as there won't be any rollback operation.
   * Status codes:
   * * 200 Request Accepted
   * * 400 Bad Request
   *   * ValidationFailed - The import job request is not valid.
   * @param id The id for the import job. The id is unique within the service and case sensitive.
   * @param options The options parameters.
   */
  cancel(
    id: string,
    options?: ImportJobsCancelOptionalParams,
  ): Promise<ImportJobsCancelResponse> {
    return this.client.sendOperationRequest(
      { id, options },
      cancelOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ImportJobsListNextOptionalParams,
  ): Promise<ImportJobsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/jobs/imports",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImportJobCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ImportJobsListExceptionHeaders,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.resultsPerPage],
  serializer,
};
const addOperationSpec: coreClient.OperationSpec = {
  path: "/jobs/imports/{id}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.ImportJob,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ImportJobsAddExceptionHeaders,
    },
  },
  requestBody: Parameters.importJob,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path: "/jobs/imports/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImportJob,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ImportJobsGetByIdExceptionHeaders,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/jobs/imports/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ImportJobsDeleteExceptionHeaders,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path: "/jobs/imports/{id}/cancel",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ImportJob,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ImportJobsCancelExceptionHeaders,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImportJobCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ImportJobsListNextExceptionHeaders,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept, Parameters.resultsPerPage],
  serializer,
};
