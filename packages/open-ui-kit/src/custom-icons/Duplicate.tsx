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

export function Duplicate(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M11.053 16.546H4.789c-.474 0-.93-.192-1.265-.533A1.833 1.833 0 0 1 3 14.727V3.818c0-.482.189-.944.524-1.285C3.86 2.192 4.314 2 4.79 2h10.737v1.818H4.79v10.91h6.264v-1.819l3.579 2.727-3.58 2.728v-1.819Zm7.157 3.636V7.455H8.368v5.454h-1.79V7.455c0-.483.19-.945.525-1.286.336-.341.79-.533 1.265-.533h9.842c.475 0 .93.192 1.266.533.335.34.524.803.524 1.286v12.727c0 .482-.189.945-.524 1.286-.336.34-.79.532-1.265.532H8.367c-.474 0-.93-.192-1.265-.532a1.833 1.833 0 0 1-.524-1.286v-1.818h1.79v1.818h9.841Z"
        />
      </svg>
    </SvgIcon>
  );
}
