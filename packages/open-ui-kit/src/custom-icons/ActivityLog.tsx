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

export function ActivityLog(props: SvgIconProps) {
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
          d="M9.27273 19.2725C8.98485 19.2725 8.72727 19.1892 8.5 19.0225C8.27273 18.8558 8.10606 18.6437 8 18.3861L5.90909 12.9089H2.90909C2.65152 12.9089 2.43561 12.8217 2.26136 12.6475C2.08712 12.4733 2 12.2574 2 11.9998C2 11.7422 2.08712 11.5263 2.26136 11.3521C2.43561 11.1778 2.65152 11.0907 2.90909 11.0907H6.54545C6.74242 11.0907 6.91288 11.1437 7.05682 11.2498C7.20076 11.3558 7.31061 11.4998 7.38636 11.6816L9.27273 16.6361L13.4545 5.61341C13.5606 5.35584 13.7273 5.14372 13.9545 4.97705C14.1818 4.81038 14.4394 4.72705 14.7273 4.72705C15.0152 4.72705 15.2727 4.81038 15.5 4.97705C15.7273 5.14372 15.8939 5.35584 16 5.61341L18.0909 11.0907H21.0909C21.3485 11.0907 21.5644 11.1778 21.7386 11.3521C21.9129 11.5263 22 11.7422 22 11.9998C22 12.2574 21.9129 12.4733 21.7386 12.6475C21.5644 12.8217 21.3485 12.9089 21.0909 12.9089H17.4545C17.2576 12.9089 17.0871 12.8558 16.9432 12.7498C16.7992 12.6437 16.6894 12.4998 16.6136 12.318L14.7273 7.36341L10.5455 18.3861C10.4394 18.6437 10.2727 18.8558 10.0455 19.0225C9.81818 19.1892 9.56061 19.2725 9.27273 19.2725Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
