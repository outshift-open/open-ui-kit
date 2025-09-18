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

export function Bug(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M11.45 2.5c-5.526 0-10 4.474-10 10s4.474 10 10 10c5.527 0 10-4.474 10-10s-4.473-10-10-10Zm6.369 8.158h-1.895c.105.368.158.737.158 1.105v1.158h1.737v1.21h-1.737v1.053c0 .369-.053.684-.106 1.053h1.843v1.21h-2.316c-.369.79-.895 1.369-1.632 1.79a4.889 4.889 0 0 1-2.42.631 4.89 4.89 0 0 1-2.422-.631c-.737-.421-1.316-1-1.631-1.79H5.082v-1.21h1.842a3.647 3.647 0 0 1-.158-1.053v-1.052H5.029v-1.21h1.737v-1.159c0-.368.053-.737.158-1.105H5.029v-1.21H7.45c.21-.369.421-.685.737-1 .316-.264.632-.527 1-.685L7.661 6.237l.79-.79 1.894 1.895c.368-.158.737-.21 1.105-.21.369 0 .737.052 1.106.21l1.894-1.895.79.79-1.527 1.526c.369.21.685.421 1 .684.264.264.527.632.737.948h2.369v1.263Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M11.45 8.447c-.947 0-1.79.316-2.473 1-.685.685-1 1.474-1 2.421v3.316c0 .947.315 1.79 1 2.421.684.684 1.473 1 2.473 1 1 0 1.79-.316 2.474-1 .684-.684 1-1.474 1-2.42v-3.317c0-.947-.316-1.79-1-2.42-.737-.685-1.526-1-2.474-1Zm1.58 7.421H9.818v-1.21h3.21v1.21Zm0-3.473H9.818v-1.21h3.21v1.21Z"
        />
      </svg>
    </SvgIcon>
  );
}
