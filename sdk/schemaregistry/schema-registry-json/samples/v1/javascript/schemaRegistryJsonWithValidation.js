// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates the use of JsonSchemaSerializer to create messages with json-serialized payload using schema from Schema Registry with validation using a third party library.
 */

const { DefaultAzureCredential } = require("@azure/identity");
const { SchemaRegistryClient, KnownSchemaFormats } = require("@azure/schema-registry");
const { JsonSchemaSerializer } = require("@azure/schema-registry-json");

const Ajv = require("ajv").default;
// Load the .env file if it exists
require("dotenv").config();

// The fully qualified namespace for schema registry
const schemaRegistryFullyQualifiedNamespace =
  process.env["SCHEMAREGISTRY_JSON_FULLY_QUALIFIED_NAMESPACE"] || "<namespace>";

// The schema group to use for schema registration or lookup
const groupName = process.env["SCHEMA_REGISTRY_GROUP"] || "AzureSdkSampleGroup";

// Sample Json Schema for user with first and last names
const schemaObject = {
  $id: "user",
  title: "User",
  description: "A user for the product",
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
  },
  required: ["firstName", "lastName"],
};

const schema = JSON.stringify(schemaObject);

// Description of the schema for registration
const schemaDescription = {
  name: schemaObject.$id,
  groupName,
  format: KnownSchemaFormats.Json,
  definition: schema,
};

async function main() {
  // Create a credential
  const credential = new DefaultAzureCredential();

  // Create a new client
  const client = new SchemaRegistryClient(schemaRegistryFullyQualifiedNamespace, credential);

  // Register the schema. This would generally have been done somewhere else.
  await client.registerSchema(schemaDescription);

  // Create a new serializer backed by the client
  const serializer = new JsonSchemaSerializer(client, { groupName });

  // serialize an object that matches the schema and put it in a message
  const value = { firstName: "Jane", lastName: "Doe" };
  const message = await serializer.serialize(value, schema);
  console.log("Created message:");
  console.log(JSON.stringify(message));

  // Validation using a third party library
  const ajv = new Ajv();
  const validator = ajv.compile(JSON.parse(schema));
  const validators = new Map();
  validators.set(schema, validator);
  const validateOptions = {
    validateCallback(value, schema) {
      const validator = validators.get(schema);
      if (validator) {
        const valid = validator(value);
        if (!valid) {
          throw new Error(JSON.stringify(validator.errors));
        }
      } else {
        throw new Error("Unable to find validator");
      }
    },
  };

  // deserialize the message back to an object with validation
  const deserializedObject = await serializer.deserialize(message, validateOptions);
  console.log("Deserialized object:");
  console.log(JSON.stringify(deserializedObject));
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { schemaObject, main };
