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

export function AWSServicesS3Bucket(props: SvgIconProps) {
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
          d="m18.221 13.322.037-.214c.233.134.412.247.54.337a8.273 8.273 0 0 1-.576-.123Zm-1.63 4.412c-.044.265-.94.793-4.011.793-3.013 0-3.891-.527-3.935-.796L7.123 8.87c1.261.616 3.416.906 5.476.906 2.062 0 4.221-.292 5.482-.908l-.709 4.211c-1.364-.444-2.958-1.205-3.77-1.592l-.148-.072a.867.867 0 0 0-.855-.764.877.877 0 0 0-.877.875c0 .482.393.875.877.875a.856.856 0 0 0 .508-.181l.118.056c.852.408 2.55 1.216 4 1.674l-.635 3.782ZM12.598 6.276c3.739 0 5.678.907 5.703 1.304v.025c-.047.401-1.987 1.296-5.703 1.296-3.711 0-5.651-.892-5.703-1.294V7.58c.026-.397 1.967-1.303 5.703-1.303Zm6.58 1.313c0-1.504-3.41-2.188-6.58-2.188s-6.58.684-6.58 2.188l.04.276 1.72 10.01c.167 1.023 1.693 1.526 4.8 1.526 4.15 0 4.77-.883 4.877-1.525l.62-3.687c.507.122.868.171 1.124.171.405 0 .56-.118.667-.244a.637.637 0 0 0 .14-.54c-.082-.415-.538-.81-1.595-1.385l.727-4.328.04-.274Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
