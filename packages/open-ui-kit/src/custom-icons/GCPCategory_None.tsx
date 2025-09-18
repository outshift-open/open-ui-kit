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

export function GCPCategoryNone(props: SvgIconProps) {
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
          d="M21 14.4a5.115 5.115 0 0 1-5.114 5.113H8.114A5.115 5.115 0 0 1 3 14.399a5.11 5.11 0 0 1 2.217-4.213c.712-3.093 3.478-5.4 6.783-5.4 3.306 0 6.07 2.307 6.783 5.4A5.089 5.089 0 0 1 21 14.399Zm-5.212 1.84c1.072 0 1.94-.867 1.94-1.939a1.941 1.941 0 0 0-1.866-1.947l.024-.41A3.89 3.89 0 0 0 9.08 9.377a5.129 5.129 0 0 1 3.035 1.84l-2.16 2.16a2.016 2.016 0 0 0-1.734-1.022c-1.08 0-1.947.867-1.947 1.947 0 1.04.818 1.882 1.84 1.94h7.675Z"
        />
      </svg>
    </SvgIcon>
  );
}
