/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ChipProps, SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";
import type { GeneralSize } from "@/common";

export interface TagStatusStyle {
  backgroundColor: string;
  border: string;
  iconColor: string;
  icon: React.ElementType;
}

export enum TagAvatarSize {
  small = "20",
  medium = "24",
  large = "32",
}

export enum TagBackgroundColorVariants {
  Primary = "controlBackgroundMedium",
  Secondary = "accentGWeak",
  AccentAWeak = "accentAWeak",
  AccentBWeak = "accentBWeak",
  AccentCWeak = "accentCWeak",
  AccentDWeak = "accentDWeak",
  AccentEWeak = "accentEWeak",
  AccentFWeak = "accentFWeak",
  AccentGWeak = "accentGWeak",
  AccentHWeak = "accentHWeak",
  AccentIWeak = "accentIWeak",
  AccentJWeak = "accentJWeak",
}

export enum TagStatus {
  "Excellent" = "Excellent",
  "Positive" = "Positive",
  "Warning" = "Warning",
  "SevereWarning" = "Severe warning",
  "Negative" = "Negative",
  "Inactive" = "Inactive",
  "Disabled" = "Disabled",
  "InProgress" = "In progress",
  "Info" = "Info",
  "Allow" = "Allow",
  "Deny" = "Deny",
}

export interface TagProps
  extends Omit<ChipProps, "size" | "children" | "label" | "color" | "sx"> {
  /** Background color token variant used for non-status tags. */
  color?: TagBackgroundColorVariants;
  /** Tag label content. */
  children: ReactNode;
  /** Tag scale. Small is 20px tall, medium is 24px, and large is 32px. */
  size?: GeneralSize;
  /** Semantic status treatment. When set, it overrides the color variant. */
  status?: TagStatus;
  /** Root style overrides. Consumer styles are applied after internal styles. */
  sx?: SxProps<Theme>;
}
