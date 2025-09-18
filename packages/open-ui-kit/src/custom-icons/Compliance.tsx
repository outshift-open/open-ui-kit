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

export function Compliance(props: SvgIconProps) {
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
          d="M16.933 21.2 14 18l1.237-1.237 1.696 1.696 3.83-3.83L22 16.133M12.453 21.2h-8.32A2.126 2.126 0 0 1 2 19.067V4.133C2 2.95 2.95 2 4.133 2h14.934c1.184 0 2.133.95 2.133 2.133v8.32a6.384 6.384 0 0 0-2.133-.768V4.133H4.133v14.934h7.552c.128.768.395 1.482.768 2.133Zm-.853-4.267H6.267V14.8H11.6m2.859-2.133H6.267v-2.134h10.666v1.152c-.906.15-1.738.491-2.474.982ZM16.933 8.4H6.267V6.267h10.666"
        />
      </svg>
    </SvgIcon>
  );
}
