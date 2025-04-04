// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @file Testing the ts-naming-subclients rule.
 *
 */

import { createRuleTester } from "../ruleTester.js";
import rule from "../../src/rules/ts-naming-subclients.js";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = createRuleTester();

ruleTester.run("ts-naming-subclients", rule, {
  valid: [
    // normal valid example
    {
      code: "class ExampleClient { getSubClient(): SubClient {}; };",
    },
    // bad name but returning the same class
    {
      code: "class ExampleClient { getExampleClient(): ExampleClient {}; };",
    },
    // bad name in a non-client class
    {
      code: "class Example { get(): SubClient {}; };",
    },
  ],
  invalid: [
    // single
    {
      code: "class ExampleClient { get(): SubClient {}; };",
      errors: [
        {
          message:
            "ExampleClient's method get returns a subclient of type SubClient and should be called getSubClient",
        },
      ],
    },
    // multiple
    {
      code: "class ExampleClient { get(): SubClient {}; get2(): SubSubClient {}; };",
      errors: [
        {
          message:
            "ExampleClient's method get returns a subclient of type SubClient and should be called getSubClient",
        },
        {
          message:
            "ExampleClient's method get2 returns a subclient of type SubSubClient and should be called getSubSubClient",
        },
      ],
    },
  ],
});
