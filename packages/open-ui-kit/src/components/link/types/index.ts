/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralSize, IconPosition } from "@/common";
import { CSSProperties, SvgIconProps } from "@mui/material";
import { LinkProps as RouterLinkProps, To } from "react-router-dom";

export type LinkVariants = "body1" | "body2" | "caption";

export interface LinkColorStatus {
  disabled: boolean;
  pressed: boolean;
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

export interface LinkProps extends Omit<RouterLinkProps, "to"> {
  Icon?: React.ElementType<SvgIconProps>;
  color?: LinkColorEnum;
  customizeColor?: ({ disabled, pressed, hovered }: LinkColorStatus) => string;
  disabled?: boolean;
  ellipsis?: boolean;
  fontStyle?: CSSProperties;
  href?: To;
  iconPosition?: IconPosition;
  linkType?: LinkType;
  openInNewTab?: boolean;
  size?: GeneralSize;
  sx?: CSSProperties;
}
