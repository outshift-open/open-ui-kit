/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Severity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL",
  INFORMATION = "INFORMATION",
}

export type TrendStatus = "good" | "bad" | "neutral";

export type TrendDirection = "up" | "down" | "neutral";
