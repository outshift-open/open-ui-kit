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

export function Database(props: SvgIconProps) {
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
          d="M11.495 10.563c2.531 0 4.582-.387 6.151-1.16C19.216 8.63 20 7.756 20 6.781c0-.993-.785-1.872-2.354-2.635C16.076 3.381 14.026 3 11.494 3c-2.528 0-4.575.382-6.14 1.146-1.566.763-2.348 1.642-2.348 2.635 0 .975.782 1.849 2.348 2.622 1.565.773 3.612 1.16 6.14 1.16Zm.005 2.272c.859 0 1.78-.072 2.766-.214.985-.143 1.906-.36 2.76-.652.856-.291 1.565-.66 2.129-1.107.563-.447.845-.972.845-1.577v2.444c0 .608-.282 1.136-.845 1.583-.564.446-1.273.814-2.128 1.104-.855.29-1.776.506-2.76.649a19.36 19.36 0 0 1-2.767.214c-.847 0-1.766-.072-2.757-.214a14.858 14.858 0 0 1-2.77-.66c-.855-.298-1.564-.67-2.128-1.117C3.282 12.842 3 12.322 3 11.73V9.285c0 .593.282 1.112.845 1.557.564.444 1.273.816 2.128 1.113.856.297 1.779.518 2.77.663.99.144 1.91.217 2.757.217Zm0 4.715c.859 0 1.78-.07 2.766-.213.985-.143 1.906-.36 2.76-.652.856-.291 1.565-.66 2.129-1.107.563-.447.845-.974.845-1.582v2.455c0 .604-.282 1.13-.845 1.576-.564.447-1.273.816-2.128 1.108-.855.291-1.776.508-2.76.651A19.36 19.36 0 0 1 11.5 20c-.847 0-1.766-.072-2.757-.217a15.01 15.01 0 0 1-2.77-.663c-.855-.297-1.564-.668-2.128-1.113C3.282 17.562 3 17.043 3 16.45v-2.455c0 .592.282 1.112.845 1.559.564.446 1.273.818 2.128 1.116a15.01 15.01 0 0 0 2.77.663c.99.144 1.91.216 2.757.216Z"
        />
      </svg>
    </SvgIcon>
  );
}
