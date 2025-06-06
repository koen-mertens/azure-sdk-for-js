// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { MongoClusterManagementClient } from "./mongoClusterManagementClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  MongoCluster,
  MongoClusterProperties,
  KnownCreateMode,
  CreateMode,
  MongoClusterRestoreParameters,
  MongoClusterReplicaParameters,
  AdministratorProperties,
  KnownProvisioningState,
  ProvisioningState,
  KnownMongoClusterStatus,
  MongoClusterStatus,
  KnownPublicNetworkAccess,
  PublicNetworkAccess,
  HighAvailabilityProperties,
  KnownHighAvailabilityMode,
  HighAvailabilityMode,
  StorageProperties,
  KnownStorageType,
  StorageType,
  ShardingProperties,
  ComputeProperties,
  BackupProperties,
  DataApiProperties,
  KnownDataApiMode,
  DataApiMode,
  PrivateEndpointConnection,
  PrivateEndpointConnectionProperties,
  PrivateEndpoint,
  PrivateLinkServiceConnectionState,
  KnownPrivateEndpointServiceConnectionStatus,
  PrivateEndpointServiceConnectionStatus,
  KnownPrivateEndpointConnectionProvisioningState,
  PrivateEndpointConnectionProvisioningState,
  KnownPreviewFeature,
  PreviewFeature,
  ReplicationProperties,
  KnownReplicationRole,
  ReplicationRole,
  KnownReplicationState,
  ReplicationState,
  AuthConfigProperties,
  KnownAuthenticationMode,
  AuthenticationMode,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  TrackedResource,
  MongoClusterUpdate,
  MongoClusterUpdateProperties,
  ListConnectionStringsResult,
  ConnectionString,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  KnownCheckNameAvailabilityReason,
  CheckNameAvailabilityReason,
  PromoteReplicaRequest,
  KnownPromoteOption,
  PromoteOption,
  KnownPromoteMode,
  PromoteMode,
  FirewallRule,
  FirewallRuleProperties,
  ProxyResource,
  PrivateEndpointConnectionResource,
  PrivateLinkResource,
  PrivateLinkResourceProperties,
  Replica,
  User,
  UserProperties,
  IdentityProvider,
  IdentityProviderUnion,
  KnownIdentityProviderType,
  IdentityProviderType,
  EntraIdentityProvider,
  EntraIdentityProviderProperties,
  KnownEntraPrincipalType,
  EntraPrincipalType,
  DatabaseRole,
  KnownUserRole,
  UserRole,
  KnownVersions,
} from "./models/index.js";
export { MongoClusterManagementClientOptionalParams } from "./api/index.js";
export {
  FirewallRulesListByMongoClusterOptionalParams,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesGetOptionalParams,
} from "./api/firewallRules/index.js";
export {
  MongoClustersPromoteOptionalParams,
  MongoClustersCheckNameAvailabilityOptionalParams,
  MongoClustersListConnectionStringsOptionalParams,
  MongoClustersListOptionalParams,
  MongoClustersListByResourceGroupOptionalParams,
  MongoClustersDeleteOptionalParams,
  MongoClustersUpdateOptionalParams,
  MongoClustersCreateOrUpdateOptionalParams,
  MongoClustersGetOptionalParams,
} from "./api/mongoClusters/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export {
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateEndpointConnectionsCreateOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsListByMongoClusterOptionalParams,
} from "./api/privateEndpointConnections/index.js";
export { PrivateLinksListByMongoClusterOptionalParams } from "./api/privateLinks/index.js";
export { ReplicasListByParentOptionalParams } from "./api/replicas/index.js";
export {
  UsersListByMongoClusterOptionalParams,
  UsersDeleteOptionalParams,
  UsersCreateOrUpdateOptionalParams,
  UsersGetOptionalParams,
} from "./api/users/index.js";
export {
  FirewallRulesOperations,
  MongoClustersOperations,
  OperationsOperations,
  PrivateEndpointConnectionsOperations,
  PrivateLinksOperations,
  ReplicasOperations,
  UsersOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
