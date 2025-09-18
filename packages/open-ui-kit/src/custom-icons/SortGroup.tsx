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

export function SortGroup(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M9.99996 3.22316L18.3333 6.92687L9.99996 10.6306L1.66663 6.92687L9.99996 3.22316ZM4.50415 6.92687L9.99996 9.36945L15.4958 6.92687L9.99996 4.48429L4.50415 6.92687ZM3.0854 9.38539L1.66663 9.99997L9.99996 13.7037L18.3333 9.99997L16.9145 9.38539L15.4958 9.99997L9.99996 12.4426L4.50415 9.99997L3.0854 9.38539ZM1.66663 13.0731L3.0854 12.4585L4.50415 13.0731L9.99996 15.5157L15.4958 13.0731L16.9145 12.4585L18.3333 13.0731L9.99996 16.7768L1.66663 13.0731Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
