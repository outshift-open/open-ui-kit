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

import { SxProps, Theme, useTheme } from "@mui/material";
import { getColorBySeverity, Severity } from "@/common";
import { SeverityBar as SeverityBarIcon } from "@/custom-icons";
import { barStyle } from "../styles/styles";

export interface SeverityBarProps {
  /**
   * Severity of the bar
   */
  severity: Severity;

  /**
   * Styling for the bar
   */
  sx?: SxProps<Theme>;
}

export const SeverityBar = ({
  severity,
  sx,
}: SeverityBarProps): JSX.Element => {
  const theme = useTheme();

  return (
    <SeverityBarIcon
      fill={getColorBySeverity(severity, theme)}
      sx={{ ...barStyle, ...sx }}
    />
  );
};
