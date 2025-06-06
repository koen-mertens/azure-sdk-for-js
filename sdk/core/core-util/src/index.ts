// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as tspRuntime from "@typespec/ts-http-runtime/internal/util";

export {
  type AbortOptions,
  type AbortablePromiseBuilder,
  cancelablePromiseRace,
} from "./aborterUtils.js";
export {
  type CreateAbortablePromiseOptions,
  createAbortablePromise,
} from "./createAbortablePromise.js";
export { type DelayOptions, delay } from "./delay.js";
export { getErrorMessage } from "./error.js";
export { isDefined, isObjectWithProperties, objectHasProperty } from "./typeGuards.js";

/**
 * Calculates the delay interval for retry attempts using exponential delay with jitter.
 *
 * @param retryAttempt - The current retry attempt number.
 *
 * @param config - The exponential retry configuration.
 *
 * @returns An object containing the calculated retry delay.
 */
export function calculateRetryDelay(
  retryAttempt: number,
  config: {
    retryDelayInMs: number;
    maxRetryDelayInMs: number;
  },
): {
  retryAfterInMs: number;
} {
  return tspRuntime.calculateRetryDelay(retryAttempt, config);
}

/**
 * Generates a SHA-256 hash.
 *
 * @param content - The data to be included in the hash.
 *
 * @param encoding - The textual encoding to use for the returned hash.
 */
export function computeSha256Hash(content: string, encoding: "base64" | "hex"): Promise<string> {
  return tspRuntime.computeSha256Hash(content, encoding);
}

/**
 * Generates a SHA-256 HMAC signature.
 *
 * @param key - The HMAC key represented as a base64 string, used to generate the cryptographic HMAC hash.
 *
 * @param stringToSign - The data to be signed.
 *
 * @param encoding - The textual encoding to use for the returned HMAC digest.
 */
export function computeSha256Hmac(
  key: string,
  stringToSign: string,
  encoding: "base64" | "hex",
): Promise<string> {
  return tspRuntime.computeSha256Hmac(key, stringToSign, encoding);
}

/**
 * Returns a random integer value between a lower and upper bound, inclusive of both bounds. Note that this uses Math.random and isn't secure. If you need to use this for any kind of security purpose, find a better source of random.
 *
 * @param min - The smallest integer value allowed.
 *
 * @param max - The largest integer value allowed.
 */
export function getRandomIntegerInclusive(min: number, max: number): number {
  return tspRuntime.getRandomIntegerInclusive(min, max);
}

/**
 * Typeguard for an error object shape (has name and message)
 *
 * @param e - Something caught by a catch clause.
 */
export function isError(e: unknown): e is Error {
  return tspRuntime.isError(e);
}

/**
 * Helper to determine when an input is a generic JS object.
 *
 * @returns true when input is an object type that is not null, Array, RegExp, or Date.
 */
export function isObject(input: unknown): input is UnknownObject {
  return tspRuntime.isObject(input);
}

/**
 * Generated Universally Unique Identifier
 *
 * @returns RFC4122 v4 UUID.
 */
export function randomUUID(): string {
  return tspRuntime.randomUUID();
}

/**
 * Supported HTTP methods to use when making requests.
 *
 * @public
 */
export type HttpMethods =
  | "GET"
  | "PUT"
  | "POST"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS"
  | "TRACE";

/**
 * A generic shape for a plain JS object.
 */
export type UnknownObject = {
  [s: string]: unknown;
};

/**
 * A constant that indicates whether the environment the code is running is a Web Browser.
 */
export const isBrowser: boolean = tspRuntime.isBrowser;
/**
 * A constant that indicates whether the environment the code is running is Bun.sh.
 */
export const isBun: boolean = tspRuntime.isBun;
/**
 * A constant that indicates whether the environment the code is running is Deno.
 */
export const isDeno: boolean = tspRuntime.isDeno;
/**
 * A constant that indicates whether the environment the code is running is a Node.js compatible environment.
 *
 * @deprecated
 *
 * Use `isNodeLike` instead.
 */
export const isNode: boolean = tspRuntime.isNodeLike;
/**
 * A constant that indicates whether the environment the code is running is a Node.js compatible environment.
 */
export const isNodeLike: boolean = tspRuntime.isNodeLike;
/**
 * A constant that indicates whether the environment the code is running is Node.JS.
 */
export const isNodeRuntime: boolean = tspRuntime.isNodeRuntime;
/**
 * A constant that indicates whether the environment the code is running is in React-Native.
 */
export const isReactNative: boolean = tspRuntime.isReactNative;
/**
 * A constant that indicates whether the environment the code is running is a Web Worker.
 */
export const isWebWorker: boolean = tspRuntime.isWebWorker;

/** The supported character encoding type */
export type EncodingType = "utf-8" | "base64" | "base64url" | "hex";

/**
 * The helper that transforms bytes with specific character encoding into string
 * @param bytes - the uint8array bytes
 * @param format - the format we use to encode the byte
 * @returns a string of the encoded string
 */
export function uint8ArrayToString(bytes: Uint8Array, format: EncodingType): string {
  return tspRuntime.uint8ArrayToString(bytes, format);
}

/**
 * The helper that transforms string to specific character encoded bytes array.
 * @param value - the string to be converted
 * @param format - the format we use to decode the value
 * @returns a uint8array
 */
export function stringToUint8Array(value: string, format: EncodingType): Uint8Array {
  return tspRuntime.stringToUint8Array(value, format);
}
