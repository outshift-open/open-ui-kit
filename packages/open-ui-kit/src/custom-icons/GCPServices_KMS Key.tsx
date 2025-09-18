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

export function GCPServicesKMSKey(props: SvgIconProps) {
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
          d="M11.515 17.135H10.33v1.257h1.23v.565h1.284v-6.203a3.115 3.115 0 0 0 2.397-2.999 3.07 3.07 0 1 0-3.681 3.017v1.903H9.666v1.257h1.849v1.203Zm.61-13.52 7.371 3.07v5.054c0 4.543-3.142 8.798-7.37 9.876-4.229-1.033-7.371-5.288-7.371-9.83v-5.1l7.37-3.07Zm0 4.489a1.688 1.688 0 1 1 .015 3.375 1.688 1.688 0 0 1-.014-3.375Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12.125 18.957h.673v-6.203a3.116 3.116 0 0 0 2.397-2.999 3.07 3.07 0 0 0-3.07-3.07v-3.07l7.37 3.07v5.054c0 4.543-3.142 8.798-7.37 9.876v-2.658Zm0-10.853a1.688 1.688 0 0 1 .646 3.25.979.979 0 0 1-.646.134V8.104Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
