// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HealthDataAIServicesContext } from "../../api/healthDataAIServicesContext.js";
import { Operation } from "../../models/models.js";
import { operationsList } from "../../api/operations/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { OperationsListOptionalParams } from "../../models/options.js";

/** Interface representing a Operations operations. */
export interface OperationsOperations {
  /** List the operations for the provider */
  list: (options?: OperationsListOptionalParams) => PagedAsyncIterableIterator<Operation>;
}

export function getOperations(context: HealthDataAIServicesContext) {
  return {
    list: (options?: OperationsListOptionalParams) => operationsList(context, options),
  };
}

export function getOperationsOperations(
  context: HealthDataAIServicesContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}
