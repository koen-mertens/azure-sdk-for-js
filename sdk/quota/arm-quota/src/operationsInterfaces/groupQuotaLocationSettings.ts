/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  GroupQuotasEnforcementResponse,
  GroupQuotaLocationSettingsListOptionalParams,
  GroupQuotaLocationSettingsCreateOrUpdateOptionalParams,
  GroupQuotaLocationSettingsCreateOrUpdateResponse,
  GroupQuotaLocationSettingsUpdateOptionalParams,
  GroupQuotaLocationSettingsUpdateResponse,
  GroupQuotaLocationSettingsGetOptionalParams,
  GroupQuotaLocationSettingsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GroupQuotaLocationSettings. */
export interface GroupQuotaLocationSettings {
  /**
   * Returns only the list of the Azure regions settings, where the GroupQuotas enforcement is enabled.
   * The locations not included in GroupQuota Enforcement will not be listed, the regions in failed
   * status with listed as status Failed.
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param options The options parameters.
   */
  list(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    options?: GroupQuotaLocationSettingsListOptionalParams,
  ): PagedAsyncIterableIterator<GroupQuotasEnforcementResponse>;
  /**
   * Enables the GroupQuotas enforcement for the resource provider and the location specified. The
   * resource provider will start using the group quotas as the overall quota for the subscriptions
   * included in the GroupQuota. The subscriptions cannot request quota at subscription level.
   * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is
   * used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
   * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable
   * GroupQuota Enforcement -
   *  1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check
   * the example - GroupQuotaSubscriptions_Delete).
   *  2. Ten delete the GroupQuota (Check the example - GroupQuotas_Delete).
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GroupQuotaLocationSettingsCreateOrUpdateResponse>,
      GroupQuotaLocationSettingsCreateOrUpdateResponse
    >
  >;
  /**
   * Enables the GroupQuotas enforcement for the resource provider and the location specified. The
   * resource provider will start using the group quotas as the overall quota for the subscriptions
   * included in the GroupQuota. The subscriptions cannot request quota at subscription level.
   * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is
   * used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
   * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable
   * GroupQuota Enforcement -
   *  1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check
   * the example - GroupQuotaSubscriptions_Delete).
   *  2. Ten delete the GroupQuota (Check the example - GroupQuotas_Delete).
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsCreateOrUpdateOptionalParams,
  ): Promise<GroupQuotaLocationSettingsCreateOrUpdateResponse>;
  /**
   * Enables the GroupQuotas enforcement for the resource provider and the location specified. The
   * resource provider will start using the group quotas as the overall quota for the subscriptions
   * included in the GroupQuota. The subscriptions cannot request quota at subscription level.
   * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is
   * used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
   * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable
   * GroupQuota Enforcement -
   *  1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check
   * the example - GroupQuotaSubscriptions_Delete).
   *  2. Ten delete the GroupQuota (Check the example - GroupQuotas_Delete).
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  beginUpdate(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GroupQuotaLocationSettingsUpdateResponse>,
      GroupQuotaLocationSettingsUpdateResponse
    >
  >;
  /**
   * Enables the GroupQuotas enforcement for the resource provider and the location specified. The
   * resource provider will start using the group quotas as the overall quota for the subscriptions
   * included in the GroupQuota. The subscriptions cannot request quota at subscription level.
   * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is
   * used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
   * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable
   * GroupQuota Enforcement -
   *  1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check
   * the example - GroupQuotaSubscriptions_Delete).
   *  2. Ten delete the GroupQuota (Check the example - GroupQuotas_Delete).
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsUpdateOptionalParams,
  ): Promise<GroupQuotaLocationSettingsUpdateResponse>;
  /**
   * Gets the GroupQuotas enforcement settings for the ResourceProvider/location. The locations, where
   * GroupQuota enforcement is not enabled will return Not Found.
   * @param managementGroupId Management Group Id.
   * @param groupQuotaName The GroupQuota name. The name should be unique for the provided context
   *                       tenantId/MgId.
   * @param resourceProviderName The resource provider name, such as - Microsoft.Compute. Currently only
   *                             Microsoft.Compute resource provider supports this API.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  get(
    managementGroupId: string,
    groupQuotaName: string,
    resourceProviderName: string,
    location: string,
    options?: GroupQuotaLocationSettingsGetOptionalParams,
  ): Promise<GroupQuotaLocationSettingsGetResponse>;
}
