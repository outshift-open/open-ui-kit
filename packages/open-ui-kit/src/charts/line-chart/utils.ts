/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
