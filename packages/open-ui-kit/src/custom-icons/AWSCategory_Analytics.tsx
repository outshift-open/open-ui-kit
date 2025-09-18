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

export function AWSCategoryAnalytics(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="M17.334 8.602v2.775h-1.125v-1.313l-2.987 2.845a.562.562 0 0 1-.786-.01l-1.29-1.289-2.414 2.414-.796-.795 2.812-2.812c.22-.22.576-.22.797 0l1.3 1.299 2.679-2.589h-1.565V8.002h2.812c.31 0 .563.29.563.6Zm2.407 10.65H5.927l-.75-2.25h15.314l-.75 2.25ZM6.084 6.261c0-.276.185-.509.402-.509h12.696c.217 0 .402.233.402.509v9.616h-13.5V6.261Zm15.643 9.849a.56.56 0 0 0-.456-.233h-.562V6.261c0-.901-.685-1.634-1.527-1.634H6.486c-.842 0-1.527.733-1.527 1.634v9.616h-.562a.564.564 0 0 0-.534.74l1.124 3.372c.078.23.293.384.535.384h14.624a.564.564 0 0 0 .535-.384l1.125-3.372a.564.564 0 0 0-.08-.507Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
