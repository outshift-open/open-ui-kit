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

export const defaultPopperContentStyle = {
  width: "480px",
  maxHeight: "375px",
};

export const selectNodeListItemStyle = {
  gap: "8px",
  justifyContent: "space-between",
  cursor: "pointer",
};

export const iconStyle = {
  width: "24px",
  height: "24px",
};

export const selectNodeStyle = (nestLevel: number) => ({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  padding: 0,
  alignItems: "center",
  gap: "8px",
  alignSelf: "stretch",
  marginLeft: `${32 * nestLevel}px`,
  cursor: "pointer",
  overflow: "hidden",
});

export const overflowTooltipPopperStyle = {
  wordBreak: "break-word",
};

export const searchMatchTextStyle = (theme: Theme) => ({
  color: theme.palette.vars?.successTextDefault,
});
