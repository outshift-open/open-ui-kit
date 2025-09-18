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

export function AWSServicesRDS(props: SvgIconProps) {
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
          d="m6.541 5 2.146 2.146-.707.708-2.146-2.147V7.5h-1v-3a.5.5 0 0 1 .5-.5h3v1H6.541Zm2.146 11.854L6.541 19h1.793v1h-3a.5.5 0 0 1-.5-.5v-3h1v1.793l2.146-2.147.707.708ZM5.834 12c0 .75.966 1.542 2.519 2.069l-.32.947C6 14.328 4.834 13.228 4.834 12S6 9.672 8.033 8.984l.32.947C6.8 10.458 5.834 11.25 5.834 12Zm14 4.5h1v3a.5.5 0 0 1-.5.5h-3v-1h1.793l-2.147-2.146.707-.708 2.147 2.147V16.5Zm1-12v3h-1V5.707l-2.147 2.147-.707-.708L19.127 5h-1.793V4h3a.5.5 0 0 1 .5.5Zm0 7.5c0 1.228-1.166 2.328-3.199 3.016l-.321-.947c1.554-.527 2.52-1.319 2.52-2.069s-.966-1.542-2.52-2.069l.321-.947c2.033.688 3.199 1.788 3.199 3.016Zm-8 3.402c-1.19 0-1.913-.298-2-.37v-4.381c.564.235 1.294.349 2 .349.708 0 1.439-.114 2.004-.35l.016 4.302c-.107.152-.83.45-2.02.45Zm0-6.402c1.174 0 1.858.336 1.987.5-.129.164-.813.5-1.987.5-1.229 0-1.92-.368-2-.469v-.01c.08-.153.771-.521 2-.521Zm0-1c-1.445 0-3 .469-3 1.5v5.532c0 .947 1.507 1.37 3 1.37s3-.423 3-1.37V9.5c0-1.031-1.555-1.5-3-1.5Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
