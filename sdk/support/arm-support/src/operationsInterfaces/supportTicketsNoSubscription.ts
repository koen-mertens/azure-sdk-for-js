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
  SupportTicketDetails,
  SupportTicketsNoSubscriptionListOptionalParams,
  CheckNameAvailabilityInput,
  SupportTicketsNoSubscriptionCheckNameAvailabilityOptionalParams,
  SupportTicketsNoSubscriptionCheckNameAvailabilityResponse,
  SupportTicketsNoSubscriptionGetOptionalParams,
  SupportTicketsNoSubscriptionGetResponse,
  UpdateSupportTicket,
  SupportTicketsNoSubscriptionUpdateOptionalParams,
  SupportTicketsNoSubscriptionUpdateResponse,
  SupportTicketsNoSubscriptionCreateOptionalParams,
  SupportTicketsNoSubscriptionCreateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SupportTicketsNoSubscription. */
export interface SupportTicketsNoSubscription {
  /**
   * Lists all the support tickets. <br/><br/>You can also filter the support tickets by <i>Status</i>,
   * <i>CreatedDate</i>, , <i>ServiceId</i>, and <i>ProblemClassificationId</i> using the $filter
   * parameter. Output will be a paged result with <i>nextLink</i>, using which you can retrieve the next
   * set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket
   * creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
   * @param options The options parameters.
   */
  list(
    options?: SupportTicketsNoSubscriptionListOptionalParams,
  ): PagedAsyncIterableIterator<SupportTicketDetails>;
  /**
   * Check the availability of a resource name. This API should be used to check the uniqueness of the
   * name for support ticket creation for the selected subscription.
   * @param checkNameAvailabilityInput Input to check.
   * @param options The options parameters.
   */
  checkNameAvailability(
    checkNameAvailabilityInput: CheckNameAvailabilityInput,
    options?: SupportTicketsNoSubscriptionCheckNameAvailabilityOptionalParams,
  ): Promise<SupportTicketsNoSubscriptionCheckNameAvailabilityResponse>;
  /**
   * Gets details for a specific support ticket. Support ticket data is available for 18 months after
   * ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an
   * error.
   * @param supportTicketName Support ticket name.
   * @param options The options parameters.
   */
  get(
    supportTicketName: string,
    options?: SupportTicketsNoSubscriptionGetOptionalParams,
  ): Promise<SupportTicketsNoSubscriptionGetResponse>;
  /**
   * This API allows you to update the severity level, ticket status, and your contact information in the
   * support ticket.<br/><br/>Note: The severity levels cannot be changed if a support ticket is actively
   * being worked upon by an Azure support engineer. In such a case, contact your support engineer to
   * request severity update by adding a new communication using the Communications API.
   * @param supportTicketName Support ticket name.
   * @param updateSupportTicket UpdateSupportTicket object.
   * @param options The options parameters.
   */
  update(
    supportTicketName: string,
    updateSupportTicket: UpdateSupportTicket,
    options?: SupportTicketsNoSubscriptionUpdateOptionalParams,
  ): Promise<SupportTicketsNoSubscriptionUpdateResponse>;
  /**
   * Creates a new support ticket for Billing, and Subscription Management issues. Learn the
   * [prerequisites](https://aka.ms/supportAPI) required to create a support ticket.<br/><br/>Always call
   * the Services and ProblemClassifications API to get the most recent set of services and problem
   * categories required for support ticket creation.<br/><br/>Adding attachments is not currently
   * supported via the API. To add a file to an existing support ticket, visit the [Manage support
   * ticket](https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/managesupportrequest)
   * page in the Azure portal, select the support ticket, and use the file upload control to add a new
   * file.<br/><br/>Providing consent to share diagnostic information with Azure support is currently not
   * supported via the API. The Azure support engineer working on your ticket will reach out to you for
   * consent if your issue requires gathering diagnostic information from your Azure resources.<br/><br/>
   * @param supportTicketName Support ticket name.
   * @param createSupportTicketParameters Support ticket request payload.
   * @param options The options parameters.
   */
  beginCreate(
    supportTicketName: string,
    createSupportTicketParameters: SupportTicketDetails,
    options?: SupportTicketsNoSubscriptionCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SupportTicketsNoSubscriptionCreateResponse>,
      SupportTicketsNoSubscriptionCreateResponse
    >
  >;
  /**
   * Creates a new support ticket for Billing, and Subscription Management issues. Learn the
   * [prerequisites](https://aka.ms/supportAPI) required to create a support ticket.<br/><br/>Always call
   * the Services and ProblemClassifications API to get the most recent set of services and problem
   * categories required for support ticket creation.<br/><br/>Adding attachments is not currently
   * supported via the API. To add a file to an existing support ticket, visit the [Manage support
   * ticket](https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/managesupportrequest)
   * page in the Azure portal, select the support ticket, and use the file upload control to add a new
   * file.<br/><br/>Providing consent to share diagnostic information with Azure support is currently not
   * supported via the API. The Azure support engineer working on your ticket will reach out to you for
   * consent if your issue requires gathering diagnostic information from your Azure resources.<br/><br/>
   * @param supportTicketName Support ticket name.
   * @param createSupportTicketParameters Support ticket request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    supportTicketName: string,
    createSupportTicketParameters: SupportTicketDetails,
    options?: SupportTicketsNoSubscriptionCreateOptionalParams,
  ): Promise<SupportTicketsNoSubscriptionCreateResponse>;
}
