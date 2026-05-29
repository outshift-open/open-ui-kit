/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { format, parseISO } from "date-fns";

export function formatNumber(num: number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(num);
}

export function formatISODate(date: string, dateFormat: string) {
  const parsedDate = parseISO(date);
  return format(parsedDate, dateFormat);
}
