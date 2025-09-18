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

export function Crossplane(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0469 1.74609C13.5657 1.74609 14.9407 2.3617 15.936 3.35701C16.9313 4.35231 17.5469 5.72731 17.5469 7.24609L17.547 17.0728C17.547 18.227 16.6111 19.1628 15.4569 19.1628H13.4219V22.3711C13.4219 23.1305 12.8063 23.7461 12.0469 23.7461C11.2875 23.7461 10.6719 23.1305 10.6719 22.3711V19.1628H8.63687C8.61561 19.1628 8.59443 19.1624 8.57332 19.1618C8.52623 19.1604 8.47953 19.1574 8.43327 19.153C7.37454 19.0506 6.54688 18.1583 6.54688 17.0728V7.24609C6.54688 4.20853 9.00931 1.74609 12.0469 1.74609ZM7.64688 11.6461L15.1581 4.13482C15.9544 4.93107 16.4469 6.03107 16.4469 7.24609V10.1796L8.56616 18.0603C8.0524 18.024 7.64688 17.5957 7.64688 17.0728V11.6461Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
