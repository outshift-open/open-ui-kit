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

import { ViewSwitcherProps } from "../types";
import { StyledBox } from "./elements";
import { ViewSwitcherOption } from "./view-switcher-option";

export const ViewSwitcher = ({
  disabled,
  fullWidth,
  onChange,
  options,
  size = "md",
  value,
  containerProps,
}: ViewSwitcherProps) => {
  return (
    <StyledBox fullWidth={fullWidth} {...containerProps}>
      {options.map((option) =>
        typeof option === "string" ? (
          <ViewSwitcherOption
            disabled={disabled}
            key={option}
            label={option}
            onChange={onChange}
            selected={value === option}
            value={option}
            size={size}
          />
        ) : (
          <ViewSwitcherOption
            disabled={disabled || option.disabled}
            icon={option.icon}
            key={option.value}
            label={option.label}
            onChange={onChange}
            selected={value === option.value}
            value={option.value}
            size={size}
          />
        ),
      )}
    </StyledBox>
  );
};
