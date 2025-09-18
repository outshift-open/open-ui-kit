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

import { SvgIcon, SvgIconProps } from "@mui/material";

export function ArrowForwardIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <svg
        width="12"
        height="16"
        viewBox="0 0 16 16"
        fill={props.fill ?? "#E8E9EA"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.9267 8.66674H3.47666C3.28778 8.66674 3.12944 8.60285 3.00166 8.47507C2.87389 8.3473 2.81 8.18896 2.81 8.00007C2.81 7.81118 2.87389 7.65285 3.00166 7.52507C3.12944 7.39729 3.28778 7.33341 3.47666 7.33341H10.9267L7.66 4.06674C7.52666 3.93341 7.46278 3.77785 7.46833 3.60007C7.47389 3.4223 7.54333 3.26674 7.67666 3.13341C7.81 3.01118 7.96555 2.9473 8.14333 2.94174C8.32111 2.93618 8.47666 3.00007 8.61 3.13341L13.01 7.53341C13.0767 7.60007 13.1239 7.6723 13.1517 7.75007C13.1794 7.82785 13.1933 7.91118 13.1933 8.00007C13.1933 8.08896 13.1794 8.1723 13.1517 8.25007C13.1239 8.32785 13.0767 8.40007 13.01 8.46674L8.61 12.8667C8.48778 12.989 8.335 13.0501 8.15166 13.0501C7.96833 13.0501 7.81 12.989 7.67666 12.8667C7.54333 12.7334 7.47666 12.5751 7.47666 12.3917C7.47666 12.2084 7.54333 12.0501 7.67666 11.9167L10.9267 8.66674Z" />
      </svg>
      ;
    </SvgIcon>
  );
}
