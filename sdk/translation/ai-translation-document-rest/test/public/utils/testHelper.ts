// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  BatchRequest,
  DocumentFilter,
  Glossary,
  SourceInput,
  StorageInputType,
  StorageSource,
  TargetInput,
} from "../../../src/index.js";
import { isLiveMode } from "../../utils/injectables.js";

export function createSourceInput(
  sourceUrl: string,
  language?: string,
  storageSource?: StorageSource,
  filter?: DocumentFilter,
): SourceInput {
  return {
    sourceUrl,
    language,
    storageSource,
    filter,
  };
}

export function createTargetInput(
  targetUrl: string,
  language: string,
  storageSource?: StorageSource,
  glossaries?: Glossary[],
  category?: string,
): TargetInput {
  return {
    targetUrl,
    language,
    storageSource,
    glossaries,
    category,
  };
}

export function createBatchRequest(
  source: SourceInput,
  targets: Array<TargetInput>,
  storageType?: StorageInputType,
): BatchRequest {
  return {
    source,
    targets,
    storageType,
  };
}

export function getTranslationOperationID(url: string): string {
  try {
    const parsedUrl = new URL(url);
    const pathSegments = parsedUrl.pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    return typeof lastSegment === "string" ? lastSegment : "";
  } catch (error) {
    console.error("Invalid Operation-location URL:", error);
    return "";
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, isLiveMode() ? ms : 1));
}
