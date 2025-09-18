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

export function AWSServicesDatabaseMigration(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M13.96 21h1.106v-2.323H13.96V21Zm-3.196 0h1.107v-2.323h-1.107V21Zm5.41-1.161h1.108v-2.323h-1.107v2.323Zm-7.722 0H9.56v-2.323H8.452v2.323Zm4.434-10.437c-2.385 0-3.445-.663-3.445-.915V6.605c.69.325 1.773.544 3.444.544 1.443 0 2.576-.208 3.342-.582v1.92c0 .26-.994.915-3.341.915Zm0 3.453c-2.108 0-3.445-.915-3.445-1.302V9.935c.89.44 2.184.628 3.444.628 1.432 0 2.571-.22 3.342-.61v1.6c0 .377-1.171 1.302-3.341 1.302Zm0 2.938c-2.108 0-3.445-.943-3.445-1.341v-1.307c.836.528 2.062.871 3.444.871 1.338 0 2.526-.336 3.342-.855v1.29c0 .41-1.262 1.342-3.341 1.342Zm0-11.632c2.347 0 3.34.682 3.34.953 0 .257-.96.874-3.34.874-2.51 0-3.445-.537-3.445-.874 0-.222 1.074-.953 3.444-.953Zm0-1.161c-2.267 0-4.552.654-4.552 2.114v9.337c0 1.357 2.085 2.503 4.552 2.503 2.452 0 4.448-1.123 4.448-2.503V5.114C17.334 3.829 15.588 3 12.886 3Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
