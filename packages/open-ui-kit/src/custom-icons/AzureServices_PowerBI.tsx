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

export function AzureServicesPowerBI(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M18.816 3.186h-4.772a.743.743 0 0 0-.742.743v3.743h-2.943a.743.743 0 0 0-.743.742v3.772H6.73a.743.743 0 0 0-.743.743v7.514c0 .41.333.743.743.743h12.086c.41 0 .743-.333.743-.743V3.929a.743.743 0 0 0-.743-.743Z"
        />
      </svg>
    </SvgIcon>
  );
}
