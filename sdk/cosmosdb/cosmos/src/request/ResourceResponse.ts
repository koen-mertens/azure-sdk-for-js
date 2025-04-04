// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { CosmosDiagnostics } from "../CosmosDiagnostics";
import { Constants } from "../common";
import type { CosmosHeaders } from "../queryExecutionContext/CosmosHeaders";
import type { StatusCode, SubStatusCode } from "./StatusCodes";

export class ResourceResponse<TResource> {
  constructor(
    public readonly resource: TResource | undefined,
    public readonly headers: CosmosHeaders,
    public readonly statusCode: StatusCode,
    public readonly diagnostics: CosmosDiagnostics,
    public readonly substatus?: SubStatusCode,
  ) {}
  public get requestCharge(): number {
    return Number(this.headers[Constants.HttpHeaders.RequestCharge]) || 0;
  }
  public get activityId(): string {
    return this.headers[Constants.HttpHeaders.ActivityId] as string;
  }
  public get etag(): string {
    return this.headers[Constants.HttpHeaders.ETag] as string;
  }
}
