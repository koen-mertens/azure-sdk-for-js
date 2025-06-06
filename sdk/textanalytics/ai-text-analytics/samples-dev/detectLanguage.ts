// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * In this sample, we use the language detection endpoint to determine the
 * written language of several documents written in different languages. The
 * endpoint provides a primary language as well as a score representing the
 * service's confidence in the correctness of its assessment.
 *
 * @summary detects the language of a piece of text
 * @azsdk-weight 100
 */

import { TextAnalyticsClient } from "@azure/ai-text-analytics";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import "dotenv/config";

// You will need to set these environment variables or edit the following values
const endpoint = process.env["LANGUAGE_ENDPOINT"] || "<endpoint>";

const documents = [
  "This document is written in English.",
  "Este es un document escrito en Español.",
  "这是一个用中文写的文件",
  "Dies ist ein Dokument in deutsche Sprache.",
  "Detta är ett dokument skrivet på engelska.",
];

export async function main(): Promise<void> {
  console.log("== Detect Language Sample ==");

  const client = new TextAnalyticsClient(endpoint, new DefaultAzureCredential());

  const results = await client.detectLanguage(documents);

  for (const result of results) {
    console.log(`- Document ${result.id}`);
    if (!result.error) {
      const primaryLanguage = result.primaryLanguage;
      console.log(
        `\tDetected language: ${primaryLanguage.name} (ISO 6391 code: ${primaryLanguage.iso6391Name})`,
      );
    } else {
      console.error("\tError:", result.error);
    }
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
