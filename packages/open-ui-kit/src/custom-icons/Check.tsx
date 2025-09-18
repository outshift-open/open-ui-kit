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

export function Check(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
        <path
          d="M6.36713 10.1078L12.0171 4.45781C12.1505 4.32448 12.3088 4.25781 12.4921 4.25781C12.6755 4.25781 12.8338 4.32448 12.9671 4.45781C13.1005 4.59115 13.1671 4.74948 13.1671 4.93281C13.1671 5.11615 13.1005 5.27448 12.9671 5.40781L6.8338 11.5411C6.70046 11.6745 6.54491 11.7411 6.36713 11.7411C6.18935 11.7411 6.0338 11.6745 5.90046 11.5411L3.0338 8.67448C2.90046 8.54115 2.83657 8.38281 2.84213 8.19948C2.84769 8.01615 2.91713 7.85781 3.05046 7.72448C3.1838 7.59115 3.34213 7.52448 3.52546 7.52448C3.7088 7.52448 3.86713 7.59115 4.00046 7.72448L6.36713 10.1078Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
