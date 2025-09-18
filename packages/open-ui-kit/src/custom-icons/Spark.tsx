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

export function Spark(props: SvgIconProps) {
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
          d="M12 4.25a.75.75 0 0 1 .75.75 6.75 6.75 0 0 0 6.75 6.75.75.75 0 0 1 0 1.5A6.75 6.75 0 0 0 12.75 20a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 0-6.75-6.75.75.75 0 0 1 0-1.5A6.75 6.75 0 0 0 11.25 5a.75.75 0 0 1 .75-.75Zm0 4.192A8.282 8.282 0 0 1 7.942 12.5 8.282 8.282 0 0 1 12 16.558a8.282 8.282 0 0 1 4.058-4.058A8.282 8.282 0 0 1 12 8.442ZM5 1.75a.75.75 0 0 1 .75.75A2.25 2.25 0 0 0 8 4.75a.75.75 0 0 1 0 1.5A2.25 2.25 0 0 0 5.75 8.5a.75.75 0 0 1-1.5 0A2.25 2.25 0 0 0 2 6.25a.75.75 0 0 1 0-1.5A2.25 2.25 0 0 0 4.25 2.5.75.75 0 0 1 5 1.75Zm0 3a3.772 3.772 0 0 1-.75.75c.284.213.537.466.75.75.213-.284.466-.537.75-.75A3.772 3.772 0 0 1 5 4.75ZM19 15.75a.75.75 0 0 1 .75.75A2.25 2.25 0 0 0 22 18.75a.75.75 0 0 1 0 1.5 2.25 2.25 0 0 0-2.25 2.25.75.75 0 0 1-1.5 0A2.25 2.25 0 0 0 16 20.25a.75.75 0 0 1 0-1.5 2.25 2.25 0 0 0 2.25-2.25.75.75 0 0 1 .75-.75Zm0 3a3.77 3.77 0 0 1-.75.75c.284.213.537.466.75.75a3.77 3.77 0 0 1 .75-.75 3.77 3.77 0 0 1-.75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
