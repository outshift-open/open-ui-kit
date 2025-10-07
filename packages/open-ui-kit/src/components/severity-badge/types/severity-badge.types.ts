/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndicatorBadgeProps } from "@/components";
import { Severity } from "@/common";

export interface SeverityBadgeProps {
  /**
   * Set a type if you want to display the badge in severity colors.
   */
  severity?: Severity;
  /**
   * Set a value if you want to display the badge in score system colors.
   * `severity` param overrides this behaviour.
   */
  value?: number;
  /**
   * Customizable colors / thresholds.
   */
  scoreSystem?: SeverityBadgeScoreSystemItem[];
}

export interface SeverityBadgeConfiguration extends IndicatorBadgeProps {
  label?: string;
}

export interface SeverityBadgeScoreSystemItem {
  configuration: SeverityBadgeConfiguration;
  threshold: number;
}
