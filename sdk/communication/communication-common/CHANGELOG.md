# Release History

## 2.4.1 (Unreleased)

### Features Added

### Breaking Changes

### Bugs Fixed

### Other Changes

## 2.4.0 (2025-06-04)

### Features Added
Introduced support for `TokenCredential` with `EntraCommunicationTokenCredentialOptions`, allowing an Entra user with a Teams license to use Teams Phone Extensibility features through the Azure Communication Services resource.

- Added support for a new communication identifier `TeamsExtensionUserIdentifier`.
    - Added a type `TeamsExtensionUserKind` with rawId in the format `8:acs:{resourceId}_{tenantId}_{userId}`.
    - Added a method `isTeamsExtensionUserIdentifier` to check if the identifier is `TeamsExtensionUserIdentifier`.
    - Mandatory fields of `TeamsExtensionUserIdentifier` are `userId`, `tenantId` and `resourceId`.
    - With this version, rawId starting with `8:acs` may be either `CommunicationUserIdentifier` or new `TeamsExtensionUserIdentifier`.
- Added optional fields `isAnonymous` and `assertedId` to the communication identifier `PhoneNumberIdentifier`.
    - `isAnonymous` is used for anonymous numbers with rawId equals to `4:anonymous`.
    - `assertedId` is used when the same number is used several times in the same call. It contains value after the last underscore (_)
      character in the phone number. It is undefined otherwise.

## 2.3.2-beta.1 (2025-03-28)

### Features Added
Introduced support for `TokenCredential` with `EntraCommunicationTokenCredentialOptions`, enabling Entra users to authorize Communication Services and allowing an Entra user with a Teams license to use Teams Phone Extensibility features through the Azure Communication Services resource.

- Added support for a new communication identifier `TeamsExtensionUserIdentifier`.
    - Added a type `TeamsExtensionUserKind` with rawId in the format `8:acs:{resourceId}_{tenantId}_{userId}`.
    - Added a method `isTeamsExtensionUserIdentifier` to check if the identifier is `TeamsExtensionUserIdentifier`.
    - Mandatory fields of `TeamsExtensionUserIdentifier` are `userId`, `tenantId` and `resourceId`.
    - With this version, rawId starting with `8:acs` may be either `CommunicationUserIdentifier` or new `TeamsExtensionUserIdentifier`.
- Added optional fields `isAnonymous` and `assertedId` to the communication identifier `PhoneNumberIdentifier`.
    - `isAnonymous` is used for anonymous numbers with rawId equals to `4:anonymous`.
    - `assertedId` is used when the same number is used several times in the same call. It contains value after the last underscore (_)
      character in the phone number. It is undefined otherwise.

## 2.3.1 (2024-02-20)

### Bugs Fixed

- Renamed field `teamAppId` to `appId` in `SerializedMicrosoftTeamsAppIdentifier` to match the REST specification.

## 2.3.0 (2023-09-27)

### Features Added

- Added support for a new communication identifier `MicrosoftTeamsAppIdentifier`.
    - Added a type `MicrosoftTeamsAppKind`.
    - Added a method `isMicrosoftTeamsAppIdentifier` to check if the identifier is `MicrosoftTeamsAppIdentifier`.
    - Added a field `teamsAppId` to `MicrosoftTeamsAppIdentifier`.
    - With this version, any rawId starting with `28:` will map to MicrosoftTeamsAppIdentifier. Previously it mapped to `UnknownIdentifier`.

## 2.2.1 (2023-06-16)

### Bugs Fixed

- Bug fix for when running the policy, a query param is always being detected as the URLSearchParams object exists, even if it is empty.

## 3.0.0-beta.1 (2023-03-27)

### Features Added

- Added support for a new communication identifier `MicrosoftBotIdentifier`.

### Breaking Changes

- Introduction of `MicrosoftBotIdentifier` is a breaking change. It will affect code that relied on using `UnknownIdentifier` with a rawID starting with `28:`

## 2.2.0 (2022-11-03)

### Features Added

- Optimized the logic for deserializing types derived from the `CommunicationIdentifier`.

### Bugs Fixed

- Fixed the logic of `getIdentifierRawId` and `createIdentifierFromRawId` for `PhoneNumberIdentifier` to always maintain the original phone number string whether it included the leading `+` sign or not.

### Other Changes

- Updated to `@azure/core-tracing` 1.0.

## 2.1.0 (2022-08-02)

### Features Added

- Added `getIdentifierRawId` and `createIdentifierFromRawId` to translate between a `CommunicationIdentifier` and its underlying canonical rawId representation. Developers can now use the rawId as an encoded format for identifiers to store in their databases or as stable keys in general.
- Always include `rawId` when serializing identifiers to wire format.

### Bugs Fixed

- Made internal `CommunicationIdentifierSerializer` resilient to unknown additional response properties.

## 2.0.0 (2022-03-08)

### Features Added

- Optimization added: When the proactive refreshing is enabled and the token refresher fails to provide a token that's not about to expire soon, the subsequent refresh attempts will be scheduled for when the token reaches half of its remaining lifetime until a token with long enough validity (>10 minutes) is obtained.

### Breaking Changes

- Migrated from using `@azure/core-http` to `@azure/core-rest-pipeline` for the handling of HTTP requests. See [Azure Core v1 vs v2](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/core/core-rest-pipeline/documentation/core2.md) for more on the difference and benefits of the move.
  - `createCommunicationAccessKeyCredentialPolicy` and `createCommunicationAuthPolicy` newly return `PipelinePolicy` instead of `RequestPolicyFactory`.

## 1.1.0 (2021-07-22)

### Features Added

- With the dropping of support for Node.js versions that are no longer in LTS, the dependency on `@types/node` has been updated to version 12. Read our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.
- Updated our internal core package dependencies to their latest versions in order to add support for Opentelemetry 1.0.0 which is compatible with the latest versions of our other client libraries.
- Changed TS compilation target to ES2017 in order to produce smaller bundles and use more native platform features

## 1.0.0 (2021-03-22)

Updated `@azure/communication-common` version.

## 1.0.0-beta.6 (2021-03-09)

Updated `@azure/communication-common` version.

## 1.0.0-beta.5 (2021-02-09)

### Breaking Changes

- Removed `CallingApplicationIdentifier` and `isCallingApplicationIdentifier`.
- Removed `id` from `CommunicationUserIdentifier`.
- Renamed `id` to `rawId` in `PhoneNumberIdentifier`.
- Renamed `id` to `rawId` in `MicrosoftTeamsUserIdentifier`.
- Replaced `abortSignal?` argument in `CommunicationTokenCredential.getToken` with `options?: CommunicationGetTokenOptions`.

## 1.0.0-beta.4 (2021-01-25)

### Added

- Added `MicrosoftTeamsUserIdentifier` and `isMicrosoftTeamsUserIdentifier`.
- Added optional `id` property to communication identifiers.

### Breaking Changes

- Changed identifier `kind` property to use lowerCamelCase.
- Renamed `CommunicationUserCredential` to `CommunicationTokenCredential`.
- Renamed `RefreshOptions` to `CommunicationTokenRefreshOptions`.
- Renamed `Identifier` to `CommunicationIdentifier`.
- Renamed `IdentifierKind` to `CommunicationIdentifierKind`.
- Renamed `PhoneNumber` to `PhoneNumberIdentifier`.
- Renamed `isPhoneNumber` to `isPhoneNumberIdentifier`.
- Renamed `CommunicationUser` to `CommunicationUserIdentifier`.
- Renamed `isCommunicationUser` to `isCommunicationUserIdentifier`.
- Renamed `CallingApplication` to `CallingApplicationIdentifier`.
- Renamed `isCallingApplication` to `isCallingApplicationIdentifier`.

## 1.0.0-beta.3 (2020-11-16)

Updated `@azure/communication-common` version.

## 1.0.0-beta.2 (2020-10-06)

Updated `@azure/communication-common` version.

## 1.0.0-beta.1 (2020-09-22)

The Azure Communication Common Client library contains common code such as the CommunicationUserCredential that is being used by other Azure Communication Services.
