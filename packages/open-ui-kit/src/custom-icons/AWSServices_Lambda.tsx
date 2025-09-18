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

export function AWSServicesLambda(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="M9.189 19H6.168l3.543-7.194 1.512 3.026L9.19 19Zm.982-8.565a.518.518 0 0 0-.464-.282h-.002a.517.517 0 0 0-.464.284l-4.357 8.848a.488.488 0 0 0 .03.482.52.52 0 0 0 .436.233h4.165c.2 0 .381-.111.467-.286l2.28-4.671a.492.492 0 0 0-.002-.432l-2.09-4.176ZM19.802 19h-3.17L11.01 7.289A.518.518 0 0 0 10.54 7H8.45l.002-2h4.17l5.599 11.71c.084.177.268.29.468.29h1.113v2Zm.516-3h-1.3L13.421 4.29a.519.519 0 0 0-.47-.29H7.937a.508.508 0 0 0-.516.5l-.003 3c0 .132.055.259.152.354A.524.524 0 0 0 7.934 8h2.278l5.624 11.711a.518.518 0 0 0 .468.289h4.014a.508.508 0 0 0 .516-.5v-3c0-.276-.231-.5-.516-.5Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
