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

import { SxProps } from "@mui/material";

export const styles: Record<string | number | symbol, SxProps> = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  barsContainer: { flex: 1, overflow: "auto" },
  barContainer: { cursor: "pointer" },
  header: { display: "flex", justifyContent: "space-between", marginBottom: 2 },
  icon: { width: 32, height: 32 },
  labelsContainer: { display: "flex", justifyContent: "space-between" },
};

export const getBarStyle = (
  value: number,
  maxValue: number,
  color: string,
): SxProps => ({
  width: (value / maxValue) * 100 + "%",
  height: 8,
  borderRadius: 0.5,
  backgroundColor: color,
});
