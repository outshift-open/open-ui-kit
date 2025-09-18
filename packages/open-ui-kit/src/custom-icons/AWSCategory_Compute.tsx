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

export function AWSCategoryCompute(props: SvgIconProps) {
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
          d="M10.834 14.5h4v-4h-4v4Zm4.5-5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5Zm2.5 2v6h-10v-10h10v4Zm1-4.5a.5.5 0 0 0-.5-.5h-.5v-2h-1v2h-2v-2h-1v2h-2v-2h-1v2h-2v-2h-1v2h-.5a.5.5 0 0 0-.5.5v.5h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v.5a.5.5 0 0 0 .5.5h.5v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h.5a.5.5 0 0 0 .5-.5v-.5h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2V7Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
