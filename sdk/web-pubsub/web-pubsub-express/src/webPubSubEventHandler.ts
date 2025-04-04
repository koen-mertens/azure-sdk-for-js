// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type express from "express-serve-static-core";

import { CloudEventsDispatcher } from "./cloudEventsDispatcher.js";
import type { WebPubSubEventHandlerOptions } from "./cloudEventsProtocols.js";

/**
 * The handler to handle incoming CloudEvents messages
 */
export class WebPubSubEventHandler {
  /**
   * The path this CloudEvents handler listens to
   */
  public readonly path: string;

  private _cloudEventsHandler: CloudEventsDispatcher;

  /**
   * Creates an instance of a WebPubSubEventHandler for handling incoming CloudEvents messages.
   *
   * Example usage:
   * ```ts snippet:WebPubSubEventHandlerHandleMessages
   * import { WebPubSubEventHandler } from "@azure/web-pubsub-express";
   *
   * const endpoint = "https://xxxx.webpubsubdev.azure.com";
   * const handler = new WebPubSubEventHandler("chat", {
   *   handleConnect: (req, res) => {
   *     console.log(JSON.stringify(req));
   *     return {};
   *   },
   *   onConnected: (req) => {
   *     console.log(JSON.stringify(req));
   *   },
   *   handleUserEvent: (req, res) => {
   *     console.log(JSON.stringify(req));
   *     res.success("Hey " + req.data, req.dataType);
   *   },
   *   allowedEndpoints: [endpoint],
   * });
   * ```
   *
   * @param hub - The name of the hub to listen to
   * @param options - Options to configure the event handler
   */
  constructor(
    private hub: string,
    options?: WebPubSubEventHandlerOptions,
  ) {
    const path = (options?.path ?? `/api/webpubsub/hubs/${hub}/`).toLowerCase();
    this.path = path.endsWith("/") ? path : path + "/";
    this._cloudEventsHandler = new CloudEventsDispatcher(this.hub, options);
  }

  /**
   * Get the middleware to process the CloudEvents requests
   */
  public getMiddleware(): express.RequestHandler {
    return async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ): Promise<void> => {
      // Request originalUrl can contain query while baseUrl + path not
      let requestUrl = (req.baseUrl + req.path).toLowerCase();

      // normalize the Url
      requestUrl = requestUrl.endsWith("/") ? requestUrl : requestUrl + "/";
      if (requestUrl.startsWith(this.path)) {
        if (req.method === "OPTIONS") {
          if (this._cloudEventsHandler.handlePreflight(req, res)) {
            return;
          }
        } else if (req.method === "POST") {
          try {
            if (await this._cloudEventsHandler.handleRequest(req, res)) {
              return;
            }
          } catch (err: any) {
            next(err);
            return;
          }
        }
      }

      next();
    };
  }
}
