/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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
