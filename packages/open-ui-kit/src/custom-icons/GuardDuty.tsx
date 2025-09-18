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

export function GuardDuty(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "#fff"}
          fillRule="evenodd"
          d="m12 5.698 5.75 2.174v4.299c0 1.832-.508 3.5-1.526 4.985-1.016 1.484-2.349 2.513-3.988 3.056L12 20.29l-.236-.078c-1.64-.543-2.972-1.572-3.988-3.056-1.018-1.484-1.526-3.153-1.526-4.985V7.872L12 5.698Zm-4.25 3.21v3.263c0 1.537.421 2.909 1.263 4.137.62.906 1.365 1.587 2.237 2.057V7.585L7.75 8.91Zm5-1.323v10.78c.872-.47 1.617-1.151 2.237-2.057.842-1.228 1.263-2.6 1.263-4.137V8.909l-3.5-1.324Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "#fff"}
          fillRule="evenodd"
          d="m12 2.707 8.75 3.021v6.06c0 2.625-.797 5.005-2.38 7.117-1.583 2.11-3.64 3.552-6.153 4.313l-.217.066-.217-.066c-2.513-.76-4.57-2.204-6.152-4.313-1.584-2.112-2.381-4.492-2.381-7.117v-6.06L12 2.707Zm-7.25 4.09v4.99c0 2.3.69 4.364 2.08 6.218 1.347 1.794 3.064 3.026 5.17 3.71 2.106-.684 3.823-1.916 5.17-3.71 1.39-1.854 2.08-3.919 2.08-6.217v-4.99L12 4.292 4.75 6.797Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
