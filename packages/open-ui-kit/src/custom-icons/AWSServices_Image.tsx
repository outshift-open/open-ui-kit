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

export function AWSServicesImage(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".1"
          d="m5.611 15.808 2.86-2.86 5.525 5.526.035.036.036-.036.514-.514.035-.035-.035-.036-2.798-2.798 3.96-3.96 4.314 4.313v3.779H5.61v-3.415Zm5.768-7.03c.574 0 1.041.466 1.041 1.04 0 .574-.467 1.041-1.04 1.041-.574 0-1.042-.467-1.042-1.04 0-.575.468-1.042 1.041-1.042Zm0 2.908a1.87 1.87 0 0 0 1.869-1.868 1.87 1.87 0 0 0-1.869-1.868 1.87 1.87 0 0 0-1.868 1.868 1.87 1.87 0 0 0 1.868 1.868Zm8.678-6.909v9.497l-4.021-4.021a.413.413 0 0 0-.585 0l-4.253 4.253-2.435-2.435a.413.413 0 0 0-.585 0L5.61 14.638v-9.86h14.446Zm.413-.827H5.198a.413.413 0 0 0-.414.414v15.272c0 .23.185.414.414.414H20.47a.413.413 0 0 0 .414-.414V4.364a.413.413 0 0 0-.414-.414Z"
        />
      </svg>
    </SvgIcon>
  );
}
