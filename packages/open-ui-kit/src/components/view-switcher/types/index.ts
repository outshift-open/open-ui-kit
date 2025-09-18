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

import { SvgIconProps, BoxProps } from "@mui/material";
import { ComponentType, ReactNode } from "react";

export type ViewSwitcherOptionObject = {
  size?: ViewSwitcherSize | undefined;
  disabled?: boolean | undefined;
  value: string;
} & (
  | {
      icon?: never | undefined;
      label: ReactNode;
    }
  | {
      icon: ComponentType<SvgIconProps>;
      label?: never | undefined;
    }
);

export type ViewSwitcherSize = "sm" | "md";

export type ViewSwitcherOption = ViewSwitcherOptionObject | string;

export type ViewSwitcherOptionProperties = Omit<
  ViewSwitcherOptionObject,
  "value"
> & {
  onChange: (value: string) => void;
  selected: boolean;
  value: NonNullable<ViewSwitcherOptionObject["value"]>;
};

export interface ViewSwitcherProps {
  containerProps?: BoxProps | undefined;
  disabled?: boolean | undefined;
  fullWidth?: boolean | undefined;
  onChange: ViewSwitcherOptionProperties["onChange"];
  options: readonly ViewSwitcherOption[];
  size?: ViewSwitcherSize | undefined;
  value: string | undefined;
}
