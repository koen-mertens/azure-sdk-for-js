/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ClassicAdministrator,
  ClassicAdministratorsListOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ClassicAdministrators. */
export interface ClassicAdministrators {
  /**
   * Gets service administrator, account administrator, and co-administrators for the subscription.
   * @param options The options parameters.
   */
  list(
    options?: ClassicAdministratorsListOptionalParams
  ): PagedAsyncIterableIterator<ClassicAdministrator>;
}
