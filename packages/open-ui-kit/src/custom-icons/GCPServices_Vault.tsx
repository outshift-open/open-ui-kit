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

export function GCPServicesVault(props: SvgIconProps) {
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
          d="m4.125 4.615 7.97 16 8.03-16h-16Zm8.92 3.21h.927v.929h-.928v-.928Zm-1.848 3.71h-.928v-.927h.928v.928Zm0-1.388h-.928v-.93h.928v.93Zm0-1.39h-.928v-.931h.928v.932Zm1.39 4.174h-.926V12h.927l-.002.931Zm0-1.388h-.926v-.935h.927l-.002.934Zm0-1.39h-.926v-.937h.927l-.002.938Zm0-1.388h-.926v-.94h.927l-.002.94Zm.456.462h.928v.928h-.927v-.928Zm0 2.32v-.94h.928v.929l-.928.01Z"
        />
      </svg>
    </SvgIcon>
  );
}
