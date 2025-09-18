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

export function PolicySecret(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M14 1H5.2A2.2 2.2 0 0 0 3 3.2v17.6A2.2 2.2 0 0 0 5.2 23h13.2a2.2 2.2 0 0 0 2.2-2.2V7.6L14 1Zm4.4 19.8H5.2V3.2h7.7v5.5h5.5m-5.687 6.6a3.3 3.3 0 1 0 0 2.2H14v2.2h2.2v-2.2h1.1v-2.2m-7.7 2.2a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z"
        />
      </svg>
    </SvgIcon>
  );
}
