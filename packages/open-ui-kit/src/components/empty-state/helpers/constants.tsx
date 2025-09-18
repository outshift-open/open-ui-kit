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

import { ButtonProps, SvgIconProps, TypographyProps } from "@mui/material";
import { CSSProperties, ReactElement } from "react";
import { Info, Negative, Positive, Warning } from "@/custom-illustrations";
import { GeneralSize } from "@/common";

export type Variant = "info" | "positive" | "warning" | "negative";

export type Direction = "row" | "column";

export const Illustrations: Record<
  Variant,
  (props: SvgIconProps) => ReactElement
> = {
  info: Info,
  positive: Positive,
  warning: Warning,
  negative: Negative,
};

export const sizeToIllustrationSizeMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "224px",
  [GeneralSize.Medium]: "76px",
  [GeneralSize.Small]: "36px",
};

export const sizeToMainFlexGapSizeMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "12px",
  [GeneralSize.Medium]: "4px",
  [GeneralSize.Small]: "0px",
};

export const sizeToSecondaryFlexGapSizeMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "8px",
  [GeneralSize.Medium]: "4px",
  [GeneralSize.Small]: "0px",
};

export const sizeToTitleVariantMapping: Record<
  GeneralSize,
  TypographyProps["variant"]
> = {
  [GeneralSize.Large]: "h6",
  [GeneralSize.Medium]: "headingSubSection",
  [GeneralSize.Small]: "headingSubSection",
};

export const sizeToDescriptionVariantMapping: Record<
  GeneralSize,
  TypographyProps["variant"]
> = {
  [GeneralSize.Large]: "body1",
  [GeneralSize.Medium]: "body2",
  [GeneralSize.Small]: "body2",
};

export const sizeToActionSizeMapping: Record<GeneralSize, ButtonProps["size"]> =
  {
    [GeneralSize.Large]: "medium",
    [GeneralSize.Medium]: "small",
    [GeneralSize.Small]: "small",
  };

export const directionToFlexAlignmentMapping: Record<
  Direction,
  CSSProperties["alignItems"]
> = {
  row: "flex-start",
  column: "center",
};

export const directionToTextAlignmentMapping: Record<
  Direction,
  CSSProperties["textAlign"]
> = {
  row: "start",
  column: "center",
};

export const directionToTextMaxWidthMapping: Record<Direction, string> = {
  row: "596px",
  column: "unset",
};

export const DefaultDescription = "No matched found";
