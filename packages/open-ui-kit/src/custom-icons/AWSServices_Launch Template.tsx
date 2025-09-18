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

export function AWSServicesLaunchTemplate(props: SvgIconProps) {
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
          d="M4.334 6.688h3.187V5.625H4.334v1.063Zm7.438 11.687h3.187v-1.063h-3.188v1.063Zm-4.25-8.5h1.062v1.063h1.062V9.874h1.063V8.812H9.646V7.75H8.584v1.063H7.521v1.062Zm6.89 1.502-.751-.75-1.035 1.035.75.751 1.036-1.036Zm-1.787 1.787-.752-.75-5.725 5.725.75.751 5.727-5.726Zm2.914-2.162a.532.532 0 0 1 0 .752l-8.264 8.264a.53.53 0 0 1-.751 0L5.02 18.515a.532.532 0 0 1 0-.75l8.266-8.266a.532.532 0 0 1 .75 0l1.503 1.503Zm2.607.998h2.125V9.875h-2.125V12Zm3.188-2.656v3.187a.531.531 0 0 1-.531.531h-3.188a.531.531 0 0 1-.531-.53V9.343c0-.293.238-.531.531-.531h3.188c.293 0 .531.237.531.53Zm-8.5-2.656h2.125V4.563h-2.125v2.125Zm3.188.53a.531.531 0 0 1-.532.532h-3.187a.531.531 0 0 1-.532-.531V4.03c0-.293.238-.531.532-.531h3.187c.293 0 .531.238.531.531V7.22Zm2.125-.53h2.125V4.563h-2.125v2.125Zm3.187-2.657V7.22a.531.531 0 0 1-.531.531h-3.188a.531.531 0 0 1-.531-.531V4.03c0-.293.238-.531.531-.531h3.188c.293 0 .531.238.531.531ZM8.584 6.688h2.125V5.625H8.584v1.063Zm10.625 10.625h2.125v1.062h-2.125V20.5h-1.063v-2.125h-2.125v-1.063h2.125v-2.125h1.063v2.126Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
