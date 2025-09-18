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

export function GCPCategoryAnalytics(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="M7.784 11.213v2.104c.332.572.802 1.05 1.368 1.392v-3.496H7.784ZM10.312 9.277v6.024a6.1 6.1 0 0 0 .888.048c.266.017.533.017.8 0V9.277h-1.688ZM13.312 12.037v2.632a4 4 0 0 0 1.36-1.456v-1.176h-1.36ZM16.591 15.605l-1.136 1.136a.335.335 0 0 0 0 .48l2.832 2.832a.336.336 0 0 0 .472 0l1.144-1.144a.336.336 0 0 0 0-.472l-2.832-2.832a.337.337 0 0 0-.48 0Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M11.2 4.15a7.2 7.2 0 1 0 0 14.399 7.2 7.2 0 0 0 0-14.4Zm0 12.55a5.344 5.344 0 1 1 .016-10.687 5.344 5.344 0 0 1-.016 10.688Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
