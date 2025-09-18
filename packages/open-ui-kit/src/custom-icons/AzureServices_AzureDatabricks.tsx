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

export function AzureServicesAzureDatabricks(props: SvgIconProps) {
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
          d="M4.467 7.877v.542l8.306 4.686 7.418-4.19v1.694l-7.418 4.215-7.888-4.482-.418.232v3.243l8.306 4.674 7.418-4.174v1.68l-7.418 4.216-7.888-4.483-.418.233v.55l8.306 4.673 8.307-4.674v-3.245l-.424-.23-7.883 4.481-7.42-4.216v-1.67l7.42 4.169 8.307-4.674v-3.2l-.424-.231-7.883 4.483-7.039-4 7.04-3.976 5.797 3.276.508-.285v-.447l-6.306-3.561-8.306 4.69Z"
        />
      </svg>
    </SvgIcon>
  );
}
