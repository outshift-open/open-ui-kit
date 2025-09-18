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
