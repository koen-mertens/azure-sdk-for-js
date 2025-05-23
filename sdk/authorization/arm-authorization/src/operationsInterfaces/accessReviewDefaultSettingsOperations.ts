/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AccessReviewDefaultSettingsGetOptionalParams,
  AccessReviewDefaultSettingsGetResponse,
  AccessReviewScheduleSettings,
  AccessReviewDefaultSettingsPutOptionalParams,
  AccessReviewDefaultSettingsPutResponse
} from "../models/index.js";

/** Interface representing a AccessReviewDefaultSettingsOperations. */
export interface AccessReviewDefaultSettingsOperations {
  /**
   * Get access review default settings for the subscription
   * @param options The options parameters.
   */
  get(
    options?: AccessReviewDefaultSettingsGetOptionalParams
  ): Promise<AccessReviewDefaultSettingsGetResponse>;
  /**
   * Get access review default settings for the subscription
   * @param properties Access review schedule settings.
   * @param options The options parameters.
   */
  put(
    properties: AccessReviewScheduleSettings,
    options?: AccessReviewDefaultSettingsPutOptionalParams
  ): Promise<AccessReviewDefaultSettingsPutResponse>;
}
