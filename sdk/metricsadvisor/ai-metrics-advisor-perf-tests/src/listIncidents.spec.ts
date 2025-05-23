// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { PerfOptionDictionary } from "@azure-tools/test-perf";
import { getEnvVar } from "@azure-tools/test-perf";
import { MetricsAdvisorTest } from "./metricsAdvisor.spec.js";

type MetricsAdvisorTestOptions = Record<string, unknown>;

export class IncidentsListTest extends MetricsAdvisorTest<MetricsAdvisorTestOptions> {
  alertId: string;
  alertConfigId: string;
  public options: PerfOptionDictionary<MetricsAdvisorTestOptions> = {};
  constructor() {
    super();
    this.alertId = getEnvVar("METRICS_ADVISOR_ALERT_ID");
    this.alertConfigId = getEnvVar("METRICS_ADVISOR_ALERT_CONFIG_ID");
  }

  async run(): Promise<void> {
    const listIterator = this.client.listIncidentsForAlert({
      alertConfigId: this.alertConfigId,
      id: this.alertId,
    });

    // eslint-disable-next-line no-empty
    for await (const _incident of listIterator) {
    }
  }
}
