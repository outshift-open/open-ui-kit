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

export function TargetSensitive(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4.63636C7.93318 4.63636 4.63636 7.93318 4.63636 12C4.63636 16.0668 7.93318 19.3636 12 19.3636C16.0668 19.3636 19.3636 16.0668 19.3636 12C19.3636 7.93318 16.0668 4.63636 12 4.63636ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          fill={props.fill ?? "currentColor"}
        />
        <path
          d="M14.7 12C14.7 13.4912 13.4912 14.7 12 14.7C10.5088 14.7 9.3 13.4912 9.3 12C9.3 10.5088 10.5088 9.3 12 9.3C13.4912 9.3 14.7 10.5088 14.7 12Z"
          fill={props.fill ?? "currentColor"}
        />
        <path
          d="M11.1 3.9C11.1 3.40294 11.5029 3 12 3C12.4971 3 12.9 3.40294 12.9 3.9V6.15C12.9 6.64706 12.4971 7.05 12 7.05C11.5029 7.05 11.1 6.64706 11.1 6.15V3.9Z"
          fill={props.fill ?? "currentColor"}
        />
        <path
          d="M11.1 17.85C11.1 17.3529 11.5029 16.95 12 16.95C12.4971 16.95 12.9 17.3529 12.9 17.85V20.1C12.9 20.5971 12.4971 21 12 21C11.5029 21 11.1 20.5971 11.1 20.1V17.85Z"
          fill={props.fill ?? "currentColor"}
        />
        <path
          d="M6.15 11.1C6.64706 11.1 7.05 11.5029 7.05 12C7.05 12.4971 6.64706 12.9 6.15 12.9H3.9C3.40294 12.9 3 12.4971 3 12C3 11.5029 3.40294 11.1 3.9 11.1H6.15Z"
          fill={props.fill ?? "currentColor"}
        />
        <path
          d="M20.1 11.1C20.5971 11.1 21 11.5029 21 12C21 12.4971 20.5971 12.9 20.1 12.9H17.85C17.3529 12.9 16.95 12.4971 16.95 12C16.95 11.5029 17.3529 11.1 17.85 11.1H20.1Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
