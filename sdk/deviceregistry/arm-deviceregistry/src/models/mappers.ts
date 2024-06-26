/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay",
        },
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail",
        },
      },
    },
  },
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail",
            },
          },
        },
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo",
            },
          },
        },
      },
    },
  },
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const AssetEndpointProfileListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetEndpointProfileListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AssetEndpointProfile",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AssetEndpointProfileProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetEndpointProfileProperties",
    modelProperties: {
      uuid: {
        serializedName: "uuid",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      targetAddress: {
        serializedName: "targetAddress",
        required: true,
        type: {
          name: "String",
        },
      },
      userAuthentication: {
        serializedName: "userAuthentication",
        type: {
          name: "Composite",
          className: "UserAuthentication",
        },
      },
      transportAuthentication: {
        serializedName: "transportAuthentication",
        type: {
          name: "Composite",
          className: "TransportAuthentication",
        },
      },
      additionalConfiguration: {
        serializedName: "additionalConfiguration",
        type: {
          name: "String",
        },
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UserAuthentication: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAuthentication",
    modelProperties: {
      mode: {
        serializedName: "mode",
        required: true,
        type: {
          name: "String",
        },
      },
      usernamePasswordCredentials: {
        serializedName: "usernamePasswordCredentials",
        type: {
          name: "Composite",
          className: "UsernamePasswordCredentials",
        },
      },
      x509Credentials: {
        serializedName: "x509Credentials",
        type: {
          name: "Composite",
          className: "X509Credentials",
        },
      },
    },
  },
};

export const UsernamePasswordCredentials: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UsernamePasswordCredentials",
    modelProperties: {
      usernameReference: {
        serializedName: "usernameReference",
        required: true,
        type: {
          name: "String",
        },
      },
      passwordReference: {
        serializedName: "passwordReference",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const X509Credentials: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "X509Credentials",
    modelProperties: {
      certificateReference: {
        serializedName: "certificateReference",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const TransportAuthentication: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TransportAuthentication",
    modelProperties: {
      ownCertificates: {
        serializedName: "ownCertificates",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OwnCertificate",
            },
          },
        },
      },
    },
  },
};

export const OwnCertificate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OwnCertificate",
    modelProperties: {
      certThumbprint: {
        serializedName: "certThumbprint",
        type: {
          name: "String",
        },
      },
      certSecretReference: {
        serializedName: "certSecretReference",
        type: {
          name: "String",
        },
      },
      certPasswordReference: {
        serializedName: "certPasswordReference",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ExtendedLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtendedLocation",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData",
        },
      },
    },
  },
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String",
        },
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String",
        },
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime",
        },
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String",
        },
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String",
        },
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const AssetListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Asset",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AssetProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetProperties",
    modelProperties: {
      uuid: {
        serializedName: "uuid",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      assetType: {
        serializedName: "assetType",
        type: {
          name: "String",
        },
      },
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean",
        },
      },
      externalAssetId: {
        serializedName: "externalAssetId",
        type: {
          name: "String",
        },
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        type: {
          name: "String",
        },
      },
      assetEndpointProfileUri: {
        serializedName: "assetEndpointProfileUri",
        required: true,
        type: {
          name: "String",
        },
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "Number",
        },
      },
      manufacturer: {
        serializedName: "manufacturer",
        type: {
          name: "String",
        },
      },
      manufacturerUri: {
        serializedName: "manufacturerUri",
        type: {
          name: "String",
        },
      },
      model: {
        serializedName: "model",
        type: {
          name: "String",
        },
      },
      productCode: {
        serializedName: "productCode",
        type: {
          name: "String",
        },
      },
      hardwareRevision: {
        serializedName: "hardwareRevision",
        type: {
          name: "String",
        },
      },
      softwareRevision: {
        serializedName: "softwareRevision",
        type: {
          name: "String",
        },
      },
      documentationUri: {
        serializedName: "documentationUri",
        type: {
          name: "String",
        },
      },
      serialNumber: {
        serializedName: "serialNumber",
        type: {
          name: "String",
        },
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
      defaultDataPointsConfiguration: {
        serializedName: "defaultDataPointsConfiguration",
        type: {
          name: "String",
        },
      },
      defaultEventsConfiguration: {
        serializedName: "defaultEventsConfiguration",
        type: {
          name: "String",
        },
      },
      dataPoints: {
        serializedName: "dataPoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPoint",
            },
          },
        },
      },
      events: {
        serializedName: "events",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Event",
            },
          },
        },
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "AssetStatus",
        },
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DataPoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPoint",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      dataSource: {
        serializedName: "dataSource",
        required: true,
        type: {
          name: "String",
        },
      },
      capabilityId: {
        serializedName: "capabilityId",
        type: {
          name: "String",
        },
      },
      observabilityMode: {
        defaultValue: "none",
        serializedName: "observabilityMode",
        type: {
          name: "String",
        },
      },
      dataPointConfiguration: {
        serializedName: "dataPointConfiguration",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Event: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Event",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      eventNotifier: {
        serializedName: "eventNotifier",
        required: true,
        type: {
          name: "String",
        },
      },
      capabilityId: {
        serializedName: "capabilityId",
        type: {
          name: "String",
        },
      },
      observabilityMode: {
        defaultValue: "none",
        serializedName: "observabilityMode",
        type: {
          name: "String",
        },
      },
      eventConfiguration: {
        serializedName: "eventConfiguration",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AssetStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetStatus",
    modelProperties: {
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AssetStatusError",
            },
          },
        },
      },
      version: {
        serializedName: "version",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const AssetStatusError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetStatusError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "Number",
        },
      },
      message: {
        serializedName: "message",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OperationStatusResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationStatusResult",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String",
        },
      },
      percentComplete: {
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 0,
        },
        serializedName: "percentComplete",
        type: {
          name: "Number",
        },
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime",
        },
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime",
        },
      },
      operations: {
        serializedName: "operations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationStatusResult",
            },
          },
        },
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail",
        },
      },
    },
  },
};

export const AssetEndpointProfileUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetEndpointProfileUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AssetEndpointProfileUpdateProperties",
        },
      },
    },
  },
};

export const AssetEndpointProfileUpdateProperties: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "AssetEndpointProfileUpdateProperties",
      modelProperties: {
        targetAddress: {
          serializedName: "targetAddress",
          type: {
            name: "String",
          },
        },
        userAuthentication: {
          serializedName: "userAuthentication",
          type: {
            name: "Composite",
            className: "UserAuthenticationUpdate",
          },
        },
        transportAuthentication: {
          serializedName: "transportAuthentication",
          type: {
            name: "Composite",
            className: "TransportAuthenticationUpdate",
          },
        },
        additionalConfiguration: {
          serializedName: "additionalConfiguration",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const UserAuthenticationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAuthenticationUpdate",
    modelProperties: {
      mode: {
        serializedName: "mode",
        type: {
          name: "String",
        },
      },
      usernamePasswordCredentials: {
        serializedName: "usernamePasswordCredentials",
        type: {
          name: "Composite",
          className: "UsernamePasswordCredentialsUpdate",
        },
      },
      x509Credentials: {
        serializedName: "x509Credentials",
        type: {
          name: "Composite",
          className: "X509CredentialsUpdate",
        },
      },
    },
  },
};

export const UsernamePasswordCredentialsUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UsernamePasswordCredentialsUpdate",
    modelProperties: {
      usernameReference: {
        serializedName: "usernameReference",
        type: {
          name: "String",
        },
      },
      passwordReference: {
        serializedName: "passwordReference",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const X509CredentialsUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "X509CredentialsUpdate",
    modelProperties: {
      certificateReference: {
        serializedName: "certificateReference",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const TransportAuthenticationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TransportAuthenticationUpdate",
    modelProperties: {
      ownCertificates: {
        serializedName: "ownCertificates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OwnCertificate",
            },
          },
        },
      },
    },
  },
};

export const AssetUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AssetUpdateProperties",
        },
      },
    },
  },
};

export const AssetUpdateProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetUpdateProperties",
    modelProperties: {
      assetType: {
        serializedName: "assetType",
        type: {
          name: "String",
        },
      },
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean",
        },
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        type: {
          name: "String",
        },
      },
      manufacturer: {
        serializedName: "manufacturer",
        type: {
          name: "String",
        },
      },
      manufacturerUri: {
        serializedName: "manufacturerUri",
        type: {
          name: "String",
        },
      },
      model: {
        serializedName: "model",
        type: {
          name: "String",
        },
      },
      productCode: {
        serializedName: "productCode",
        type: {
          name: "String",
        },
      },
      hardwareRevision: {
        serializedName: "hardwareRevision",
        type: {
          name: "String",
        },
      },
      softwareRevision: {
        serializedName: "softwareRevision",
        type: {
          name: "String",
        },
      },
      documentationUri: {
        serializedName: "documentationUri",
        type: {
          name: "String",
        },
      },
      serialNumber: {
        serializedName: "serialNumber",
        type: {
          name: "String",
        },
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
      defaultDataPointsConfiguration: {
        serializedName: "defaultDataPointsConfiguration",
        type: {
          name: "String",
        },
      },
      defaultEventsConfiguration: {
        serializedName: "defaultEventsConfiguration",
        type: {
          name: "String",
        },
      },
      dataPoints: {
        serializedName: "dataPoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPoint",
            },
          },
        },
      },
      events: {
        serializedName: "events",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Event",
            },
          },
        },
      },
    },
  },
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AssetEndpointProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetEndpointProfile",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AssetEndpointProfileProperties",
        },
      },
      extendedLocation: {
        serializedName: "extendedLocation",
        type: {
          name: "Composite",
          className: "ExtendedLocation",
        },
      },
    },
  },
};

export const Asset: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Asset",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AssetProperties",
        },
      },
      extendedLocation: {
        serializedName: "extendedLocation",
        type: {
          name: "Composite",
          className: "ExtendedLocation",
        },
      },
    },
  },
};

export const AssetEndpointProfilesCreateOrReplaceHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "AssetEndpointProfilesCreateOrReplaceHeaders",
      modelProperties: {
        retryAfter: {
          serializedName: "retry-after",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const AssetEndpointProfilesUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetEndpointProfilesUpdateHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const AssetEndpointProfilesDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetEndpointProfilesDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const AssetsCreateOrReplaceHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetsCreateOrReplaceHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const AssetsUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetsUpdateHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const AssetsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetsDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
    },
  },
};
