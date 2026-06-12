/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralSize, IconPosition } from "@/common";
import type { CSSProperties } from "react";
import type { SvgIconProps, SxProps, Theme } from "@mui/material";
import type { LinkProps as RouterLinkProps, To } from "react-router-dom";

export type LinkState = "default" | "hover" | "pressed" | "disabled";

export interface LinkColorStatus {
  /** Whether the link is disabled and cannot be interacted with. */
  disabled: boolean;
  /** Whether the link is currently being pressed. */
  pressed: boolean;
  /** Whether the link is currently hovered. */
  hovered: boolean;
}

export enum LinkType {
  UnderlineRegular = "underlineRegular",
  StandaloneRegular = "standaloneRegular",
  StandaloneBold = "standaloneBold",
}

export enum LinkColorEnum {
  Primary = "primary",
  Secondary = "secondary",
}

export interface LinkProps extends Omit<RouterLinkProps, "color" | "to"> {
  /** Optional icon component rendered before or after the label. */
  Icon?: React.ElementType<SvgIconProps>;
  /** Color family used for all interactive states. */
  color?: LinkColorEnum;
  /** Optional color resolver for custom interactive state colors. */
  customizeColor?: ({ disabled, pressed, hovered }: LinkColorStatus) => string;
  /** Disables navigation and uses the disabled color state. */
  disabled?: boolean;
  /** Truncates long labels with an ellipsis. */
  ellipsis?: boolean;
  /** Optional style override for the text element only. */
  fontStyle?: CSSProperties;
  /** Navigation target passed to the underlying React Router link. */
  href?: To;
  /** Controls whether the icon is hidden, placed before text, or placed after text. */
  iconPosition?: IconPosition;
  /** Visual treatment for underline and font weight. */
  linkType?: LinkType;
  /** Opens the link target in a new browser tab. */
  openInNewTab?: boolean;
  /** Text and icon size. */
  size?: GeneralSize;
  /** Optional style overrides for the root link. */
  sx?: SxProps<Theme>;
}
