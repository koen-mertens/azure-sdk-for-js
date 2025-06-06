// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample shows how to get the details of a custom classifier by its ID, including information about the document
 * types that the classifier supports.
 *
 * @summary get information about a classifier by its ID
 */

import { DocumentModelAdministrationClient } from "@azure/ai-form-recognizer";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

async function main(): Promise<void> {
  const endpoint = process.env.FORM_RECOGNIZER_ENDPOINT || "<endpoint>";
  const credential = new DefaultAzureCredential();

  const client = new DocumentModelAdministrationClient(endpoint, credential);

  const classifierId = process.env.CUSTOM_CLASSIFIER_ID ?? "<classifier id>";
  const classifier = await client.getDocumentClassifier(classifierId);

  console.log("ID", classifier.classifierId);
  console.log("Created:", classifier.createdOn);
  console.log("Description: ", classifier.description || "<none>");

  console.log("Document Types:");
  for (const [docType, details] of Object.entries(classifier.docTypes || {})) {
    // We can also programmatically access a schema of the fields.
    console.log(`- Name "${docType}", source: ${JSON.stringify(details, null, 2)}`);
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
