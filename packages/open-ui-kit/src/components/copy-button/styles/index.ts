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

import { Theme } from "@mui/material";
import { CopyButtonPosition } from "../components/copy-button";

export interface CopyButtonStylesProps {
  position?: CopyButtonPosition;
  theme?: Theme;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const styles = ({
  position,
  theme,
  top,
  left,
  right,
}: CopyButtonStylesProps) => ({
  border: `1px solid ${theme?.palette.vars.controlBorderDefault}`,
  borderRadius: "4px",
  padding: "4px",
  width: "32px",
  height: "32px",
  ...(position && { position: "absolute", top: top ?? "16px" }),
  ...(position === "left" && { left: left ?? "16px" }),
  ...(position === "right" && { right: right ?? "16px" }),
  "&:hover": {
    border: `1px solid ${theme?.palette.vars.controlBorderDefault}`,
    backgroundColor: "transparent",
  },
  "&.MuiSvgIcon-root, svg": {
    width: "20px",
    height: "20px",
  },
});
