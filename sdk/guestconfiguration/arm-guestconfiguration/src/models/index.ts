/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Guest configuration assignment properties. */
export interface GuestConfigurationAssignmentProperties {
  /**
   * VM resource Id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetResourceId?: string;
  /** The guest configuration to assign. */
  guestConfiguration?: GuestConfigurationNavigation;
  /**
   * A value indicating compliance status of the machine for the assigned guest configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceStatus?: ComplianceStatus;
  /**
   * Date and time when last compliance status was checked.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastComplianceStatusChecked?: Date;
  /**
   * Id of the latest report for the guest configuration assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly latestReportId?: string;
  /**
   * parameter hash for the guest configuration assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parameterHash?: string;
  /** Last reported guest configuration assignment report. */
  latestAssignmentReport?: AssignmentReport;
  /** The source which initiated the guest configuration assignment. Ex: Azure Policy */
  context?: string;
  /**
   * Combined hash of the configuration package and parameters.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly assignmentHash?: string;
  /**
   * The provisioning state, which only appears in the response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Type of the resource - VMSS / VM
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceType?: string;
  /** The list of VM Compliance data for VMSS */
  vmssVMList?: VmssvmInfo[];
}

/** Guest configuration is an artifact that encapsulates DSC configuration and its dependencies. The artifact is a zip file containing DSC configuration (as MOF) and dependent resources and other dependencies like modules. */
export interface GuestConfigurationNavigation {
  /** Kind of the guest configuration. For example:DSC */
  kind?: Kind;
  /** Name of the guest configuration. */
  name?: string;
  /** Version of the guest configuration. */
  version?: string;
  /** Uri of the storage where guest configuration package is uploaded. */
  contentUri?: string;
  /** Combined hash of the guest configuration package and configuration parameters. */
  contentHash?: string;
  /** Specifies the assignment type and execution of the configuration. Possible values are Audit, DeployAndAutoCorrect, ApplyAndAutoCorrect and ApplyAndMonitor. */
  assignmentType?: AssignmentType;
  /**
   * Specifies the origin of the configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly assignmentSource?: string;
  /**
   * Specifies the content type of the configuration. Possible values could be Builtin or Custom.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly contentType?: string;
  /** The configuration parameters for the guest configuration. */
  configurationParameter?: ConfigurationParameter[];
  /** The protected configuration parameters for the guest configuration. */
  configurationProtectedParameter?: ConfigurationParameter[];
  /**
   * The configuration setting for the guest configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly configurationSetting?: ConfigurationSetting;
}

/** Represents a configuration parameter. */
export interface ConfigurationParameter {
  /** Name of the configuration parameter. */
  name?: string;
  /** Value of the configuration parameter. */
  value?: string;
}

/** Configuration setting of LCM (Local Configuration Manager). */
export interface ConfigurationSetting {
  /**
   * Specifies how the LCM(Local Configuration Manager) actually applies the configuration to the target nodes. Possible values are ApplyOnly, ApplyAndMonitor, and ApplyAndAutoCorrect.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly configurationMode?: ConfigurationMode;
  /**
   * If true - new configurations downloaded from the pull service are allowed to overwrite the old ones on the target node. Otherwise, false
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly allowModuleOverwrite?: boolean;
  /**
   * Specifies what happens after a reboot during the application of a configuration. The possible values are ContinueConfiguration and StopConfiguration
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionAfterReboot?: ActionAfterReboot;
  /**
   * The time interval, in minutes, at which the LCM checks a pull service to get updated configurations. This value is ignored if the LCM is not configured in pull mode. The default value is 30.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly refreshFrequencyMins?: number;
  /**
   * Set this to true to automatically reboot the node after a configuration that requires reboot is applied. Otherwise, you will have to manually reboot the node for any configuration that requires it. The default value is false. To use this setting when a reboot condition is enacted by something other than DSC (such as Windows Installer), combine this setting with the xPendingReboot module.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly rebootIfNeeded?: boolean;
  /**
   * How often, in minutes, the current configuration is checked and applied. This property is ignored if the ConfigurationMode property is set to ApplyOnly. The default value is 15.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly configurationModeFrequencyMins?: number;
}

export interface AssignmentReport {
  /**
   * ARM resource id of the report for the guest configuration assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * GUID that identifies the guest configuration assignment report under a subscription, resource group.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reportId?: string;
  /** Configuration details of the guest configuration assignment. */
  assignment?: AssignmentInfo;
  /** Information about the VM. */
  vm?: VMInfo;
  /**
   * Start date and time of the guest configuration assignment compliance status check.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTime?: Date;
  /**
   * End date and time of the guest configuration assignment compliance status check.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endTime?: Date;
  /**
   * A value indicating compliance status of the machine for the assigned guest configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceStatus?: ComplianceStatus;
  /**
   * Type of report, Consistency or Initial
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operationType?: Type;
  /** The list of resources for which guest configuration assignment compliance is checked. */
  resources?: AssignmentReportResource[];
}

/** Information about the guest configuration assignment. */
export interface AssignmentInfo {
  /**
   * Name of the guest configuration assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** Information about the configuration. */
  configuration?: ConfigurationInfo;
}

/** Information about the configuration. */
export interface ConfigurationInfo {
  /**
   * Name of the configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Version of the configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
}

/** Information about the VM. */
export interface VMInfo {
  /**
   * Azure resource Id of the VM.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * UUID(Universally Unique Identifier) of the VM.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly uuid?: string;
}

/** The guest configuration assignment resource. */
export interface AssignmentReportResource {
  /**
   * A value indicating compliance status of the machine for the assigned guest configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceStatus?: ComplianceStatus;
  /**
   * Name of the guest configuration assignment resource setting.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceId?: string;
  /** Compliance reason and reason code for a resource. */
  reasons?: AssignmentReportResourceComplianceReason[];
  /**
   * Properties of a guest configuration assignment resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly properties?: Record<string, unknown>;
}

/** Reason and code for the compliance of the guest configuration assignment resource. */
export interface AssignmentReportResourceComplianceReason {
  /**
   * Reason for the compliance of the guest configuration assignment resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly phrase?: string;
  /**
   * Code for the compliance of the guest configuration assignment resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
}

/** Information about VMSS VM */
export interface VmssvmInfo {
  /**
   * UUID of the VM.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly vmId?: string;
  /**
   * Azure resource Id of the VM.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly vmResourceId?: string;
  /**
   * A value indicating compliance status of the machine for the assigned guest configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceStatus?: ComplianceStatus;
  /**
   * Id of the latest report for the guest configuration assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly latestReportId?: string;
  /**
   * Date and time when last compliance status was checked.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastComplianceChecked?: Date;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** The core properties of ARM resources */
export interface Resource {
  /**
   * ARM resource id of the guest configuration assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /** Name of the guest configuration assignment. */
  name?: string;
  /** Region where the VM is located. */
  location?: string;
  /**
   * The type of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Error response of an operation failure */
export interface ErrorResponse {
  error?: ErrorResponseError;
}

export interface ErrorResponseError {
  /** Error code. */
  code?: string;
  /** Detail error message indicating why the operation failed. */
  message?: string;
}

/** The response of the list guest configuration assignment operation. */
export interface GuestConfigurationAssignmentList {
  /** Result of the list guest configuration assignment operation. */
  value?: GuestConfigurationAssignment[];
}

/** List of guest configuration assignment reports. */
export interface GuestConfigurationAssignmentReportList {
  /** List of reports for the guest configuration. Report contains information such as compliance status, reason and more. */
  value?: GuestConfigurationAssignmentReport[];
}

/** Report for the guest configuration assignment. Report contains information such as compliance status, reason, and more. */
export interface GuestConfigurationAssignmentReport {
  /**
   * ARM resource id of the report for the guest configuration assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * GUID that identifies the guest configuration assignment report under a subscription, resource group.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** Properties of the guest configuration report. */
  properties?: GuestConfigurationAssignmentReportProperties;
}

/** Report for the guest configuration assignment. Report contains information such as compliance status, reason, and more. */
export interface GuestConfigurationAssignmentReportProperties {
  /**
   * A value indicating compliance status of the machine for the assigned guest configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceStatus?: ComplianceStatus;
  /**
   * GUID that identifies the guest configuration assignment report under a subscription, resource group.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reportId?: string;
  /** Configuration details of the guest configuration assignment. */
  assignment?: AssignmentInfo;
  /** Information about the VM. */
  vm?: VMInfo;
  /**
   * Start date and time of the guest configuration assignment compliance status check.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTime?: Date;
  /**
   * End date and time of the guest configuration assignment compliance status check.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endTime?: Date;
  /** Details of the assignment report. */
  details?: AssignmentReportDetails;
  /**
   * Azure resource Id of the VMSS.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly vmssResourceId?: string;
}

/** Details of the guest configuration assignment report. */
export interface AssignmentReportDetails {
  /**
   * A value indicating compliance status of the machine for the assigned guest configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceStatus?: ComplianceStatus;
  /**
   * Start date and time of the guest configuration assignment compliance status check.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTime?: Date;
  /**
   * End date and time of the guest configuration assignment compliance status check.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endTime?: Date;
  /**
   * GUID of the report.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly jobId?: string;
  /**
   * Type of report, Consistency or Initial
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operationType?: Type;
  /** The list of resources for which guest configuration assignment compliance is checked. */
  resources?: AssignmentReportResource[];
}

/** The response model for the list of Automation operations */
export interface OperationList {
  /** List of Automation operations supported by the Automation resource provider. */
  value?: Operation[];
}

/** GuestConfiguration REST API operation */
export interface Operation {
  /** Operation name: For ex. providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/write or read */
  name?: string;
  /** Provider, Resource, Operation and description values. */
  display?: OperationDisplay;
  /** Provider, Resource, Operation and description values. */
  properties?: OperationProperties;
}

/** Provider, Resource, Operation and description values. */
export interface OperationDisplay {
  /** Service provider: Microsoft.GuestConfiguration */
  provider?: string;
  /** Resource on which the operation is performed:  For ex. */
  resource?: string;
  /** Operation type: Read, write, delete, etc. */
  operation?: string;
  /** Description about operation. */
  description?: string;
}

/** Provider, Resource, Operation and description values. */
export interface OperationProperties {
  /** Service provider: Microsoft.GuestConfiguration */
  statusCode?: string;
}

/** ARM proxy resource. */
export interface ProxyResource extends Resource {}

/** Guest configuration assignment is an association between a machine and guest configuration. */
export interface GuestConfigurationAssignment extends ProxyResource {
  /** Properties of the Guest configuration assignment. */
  properties?: GuestConfigurationAssignmentProperties;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Known values of {@link Kind} that the service accepts. */
export enum KnownKind {
  /** DSC */
  DSC = "DSC",
}

/**
 * Defines values for Kind. \
 * {@link KnownKind} can be used interchangeably with Kind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DSC**
 */
export type Kind = string;

/** Known values of {@link AssignmentType} that the service accepts. */
export enum KnownAssignmentType {
  /** Audit */
  Audit = "Audit",
  /** DeployAndAutoCorrect */
  DeployAndAutoCorrect = "DeployAndAutoCorrect",
  /** ApplyAndAutoCorrect */
  ApplyAndAutoCorrect = "ApplyAndAutoCorrect",
  /** ApplyAndMonitor */
  ApplyAndMonitor = "ApplyAndMonitor",
}

/**
 * Defines values for AssignmentType. \
 * {@link KnownAssignmentType} can be used interchangeably with AssignmentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Audit** \
 * **DeployAndAutoCorrect** \
 * **ApplyAndAutoCorrect** \
 * **ApplyAndMonitor**
 */
export type AssignmentType = string;

/** Known values of {@link ConfigurationMode} that the service accepts. */
export enum KnownConfigurationMode {
  /** ApplyOnly */
  ApplyOnly = "ApplyOnly",
  /** ApplyAndMonitor */
  ApplyAndMonitor = "ApplyAndMonitor",
  /** ApplyAndAutoCorrect */
  ApplyAndAutoCorrect = "ApplyAndAutoCorrect",
}

/**
 * Defines values for ConfigurationMode. \
 * {@link KnownConfigurationMode} can be used interchangeably with ConfigurationMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ApplyOnly** \
 * **ApplyAndMonitor** \
 * **ApplyAndAutoCorrect**
 */
export type ConfigurationMode = string;

/** Known values of {@link ActionAfterReboot} that the service accepts. */
export enum KnownActionAfterReboot {
  /** ContinueConfiguration */
  ContinueConfiguration = "ContinueConfiguration",
  /** StopConfiguration */
  StopConfiguration = "StopConfiguration",
}

/**
 * Defines values for ActionAfterReboot. \
 * {@link KnownActionAfterReboot} can be used interchangeably with ActionAfterReboot,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ContinueConfiguration** \
 * **StopConfiguration**
 */
export type ActionAfterReboot = string;

/** Known values of {@link ComplianceStatus} that the service accepts. */
export enum KnownComplianceStatus {
  /** Compliant */
  Compliant = "Compliant",
  /** NonCompliant */
  NonCompliant = "NonCompliant",
  /** Pending */
  Pending = "Pending",
}

/**
 * Defines values for ComplianceStatus. \
 * {@link KnownComplianceStatus} can be used interchangeably with ComplianceStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Compliant** \
 * **NonCompliant** \
 * **Pending**
 */
export type ComplianceStatus = string;

/** Known values of {@link Type} that the service accepts. */
export enum KnownType {
  /** Consistency */
  Consistency = "Consistency",
  /** Initial */
  Initial = "Initial",
}

/**
 * Defines values for Type. \
 * {@link KnownType} can be used interchangeably with Type,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Consistency** \
 * **Initial**
 */
export type Type = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Created */
  Created = "Created",
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Created**
 */
export type ProvisioningState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Optional parameters. */
export interface GuestConfigurationAssignmentsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type GuestConfigurationAssignmentsCreateOrUpdateResponse =
  GuestConfigurationAssignment;

/** Optional parameters. */
export interface GuestConfigurationAssignmentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GuestConfigurationAssignmentsGetResponse =
  GuestConfigurationAssignment;

/** Optional parameters. */
export interface GuestConfigurationAssignmentsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GuestConfigurationAssignmentsSubscriptionListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the subscriptionList operation. */
export type GuestConfigurationAssignmentsSubscriptionListResponse =
  GuestConfigurationAssignmentList;

/** Optional parameters. */
export interface GuestConfigurationAssignmentsRGListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the rGList operation. */
export type GuestConfigurationAssignmentsRGListResponse =
  GuestConfigurationAssignmentList;

/** Optional parameters. */
export interface GuestConfigurationAssignmentsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type GuestConfigurationAssignmentsListResponse =
  GuestConfigurationAssignmentList;

/** Optional parameters. */
export interface GuestConfigurationAssignmentReportsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type GuestConfigurationAssignmentReportsListResponse =
  GuestConfigurationAssignmentReportList;

/** Optional parameters. */
export interface GuestConfigurationAssignmentReportsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GuestConfigurationAssignmentReportsGetResponse =
  GuestConfigurationAssignmentReport;

/** Optional parameters. */
export interface GuestConfigurationHcrpAssignmentsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type GuestConfigurationHcrpAssignmentsCreateOrUpdateResponse =
  GuestConfigurationAssignment;

/** Optional parameters. */
export interface GuestConfigurationHcrpAssignmentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GuestConfigurationHcrpAssignmentsGetResponse =
  GuestConfigurationAssignment;

/** Optional parameters. */
export interface GuestConfigurationHcrpAssignmentsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GuestConfigurationHcrpAssignmentsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type GuestConfigurationHcrpAssignmentsListResponse =
  GuestConfigurationAssignmentList;

/** Optional parameters. */
export interface GuestConfigurationHcrpAssignmentReportsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type GuestConfigurationHcrpAssignmentReportsListResponse =
  GuestConfigurationAssignmentReportList;

/** Optional parameters. */
export interface GuestConfigurationHcrpAssignmentReportsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GuestConfigurationHcrpAssignmentReportsGetResponse =
  GuestConfigurationAssignmentReport;

/** Optional parameters. */
export interface GuestConfigurationAssignmentsVmssCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type GuestConfigurationAssignmentsVmssCreateOrUpdateResponse =
  GuestConfigurationAssignment;

/** Optional parameters. */
export interface GuestConfigurationAssignmentsVmssGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GuestConfigurationAssignmentsVmssGetResponse =
  GuestConfigurationAssignment;

/** Optional parameters. */
export interface GuestConfigurationAssignmentsVmssDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delete operation. */
export type GuestConfigurationAssignmentsVmssDeleteResponse =
  GuestConfigurationAssignment;

/** Optional parameters. */
export interface GuestConfigurationAssignmentsVmssListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type GuestConfigurationAssignmentsVmssListResponse =
  GuestConfigurationAssignmentList;

/** Optional parameters. */
export interface GuestConfigurationAssignmentReportsVmssListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type GuestConfigurationAssignmentReportsVmssListResponse =
  GuestConfigurationAssignmentReportList;

/** Optional parameters. */
export interface GuestConfigurationAssignmentReportsVmssGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GuestConfigurationAssignmentReportsVmssGetResponse =
  GuestConfigurationAssignmentReport;

/** Optional parameters. */
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateResponse =
  GuestConfigurationAssignment;

/** Optional parameters. */
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GuestConfigurationConnectedVMwarevSphereAssignmentsGetResponse =
  GuestConfigurationAssignment;

/** Optional parameters. */
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type GuestConfigurationConnectedVMwarevSphereAssignmentsListResponse =
  GuestConfigurationAssignmentList;

/** Optional parameters. */
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsReportsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type GuestConfigurationConnectedVMwarevSphereAssignmentsReportsListResponse =
  GuestConfigurationAssignmentReportList;

/** Optional parameters. */
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGetResponse =
  GuestConfigurationAssignmentReport;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationList;

/** Optional parameters. */
export interface GuestConfigurationClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
