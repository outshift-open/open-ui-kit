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

export function Bulb(props: SvgIconProps) {
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
          d="M12 22.5a1.955 1.955 0 0 1-1.438-.587 1.955 1.955 0 0 1-.587-1.438h4.05c0 .567-.196 1.046-.588 1.438-.391.391-.87.587-1.437.587Zm-4.05-3.575v-1.5h8.1v1.5h-8.1Zm.125-3.025c-1.1-.717-1.97-1.613-2.612-2.688-.642-1.075-.963-2.287-.963-3.637 0-2.033.742-3.792 2.225-5.275C8.208 2.817 9.967 2.075 12 2.075c2.033 0 3.792.742 5.275 2.225C18.758 5.783 19.5 7.542 19.5 9.575c0 1.35-.317 2.563-.95 3.638-.633 1.075-1.508 1.97-2.625 2.687h-7.85Zm.55-1.5H15.4a5.827 5.827 0 0 0 1.9-2.075c.467-.85.7-1.767.7-2.75 0-1.65-.587-3.063-1.762-4.238C15.063 4.162 13.65 3.575 12 3.575c-1.65 0-3.063.587-4.237 1.762C6.588 6.512 6 7.925 6 9.575c0 .983.233 1.9.7 2.75A5.747 5.747 0 0 0 8.625 14.4Z"
        />
      </svg>
    </SvgIcon>
  );
}
