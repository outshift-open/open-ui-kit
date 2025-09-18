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

export function Network(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "#fff"}
          fillRule="evenodd"
          d="M21.75 12.5c0 5.385-4.365 9.75-9.75 9.75s-9.75-4.365-9.75-9.75S6.615 2.75 12 2.75s9.75 4.365 9.75 9.75ZM10.96 4.75c.382-.363.732-.5 1.04-.5.308 0 .658.137 1.04.5.385.367.767.934 1.103 1.69.146.33.28.687.402 1.071A7.443 7.443 0 0 1 12 7.957a7.443 7.443 0 0 1-2.545-.446c.121-.384.256-.742.402-1.07.336-.757.718-1.324 1.103-1.69ZM8.092 6.853c.12-.36.252-.7.394-1.02a8.7 8.7 0 0 1 .537-1.029 8.238 8.238 0 0 0-2.08 1.178c.353.326.738.618 1.149.871Zm-2.276.187c.556.526 1.18.982 1.856 1.354a19.076 19.076 0 0 0-.409 3.357h-3.48a8.216 8.216 0 0 1 2.033-4.711Zm3.259 1.975A8.988 8.988 0 0 0 12 9.5a8.988 8.988 0 0 0 2.925-.486c.166.843.274 1.763.31 2.736h-6.47c.036-.973.144-1.893.31-2.736Zm7.253-.621c.226 1.036.367 2.169.409 3.357h3.48a8.217 8.217 0 0 0-2.033-4.711 9.028 9.028 0 0 1-1.856 1.354Zm.729-2.412a8.238 8.238 0 0 0-2.08-1.178c.195.318.374.662.537 1.028.142.32.274.662.394 1.021a7.49 7.49 0 0 0 1.149-.871ZM3.784 13.25h3.48c.041 1.188.182 2.321.408 3.357a9.03 9.03 0 0 0-1.856 1.354 8.216 8.216 0 0 1-2.032-4.711Zm3.16 5.77a7.48 7.48 0 0 1 1.148-.872c.12.36.252.7.394 1.02.163.367.342.712.537 1.029a8.238 8.238 0 0 1-2.08-1.178ZM12 17.042c-.894 0-1.751.157-2.545.446.121.384.256.742.402 1.07.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.146-.33.28-.687.402-1.071A7.44 7.44 0 0 0 12 17.043Zm0-1.543a8.99 8.99 0 0 1 2.925.486c.166-.843.274-1.763.31-2.736h-6.47c.036.973.144 1.893.31 2.736A8.987 8.987 0 0 1 12 15.5Zm3.514 3.669c.142-.32.274-.662.394-1.021.411.253.796.545 1.149.871a8.235 8.235 0 0 1-2.08 1.178c.195-.317.374-.662.537-1.028Zm.814-2.562c.677.372 1.3.828 1.856 1.354a8.217 8.217 0 0 0 2.032-4.711h-3.48a19.073 19.073 0 0 1-.408 3.357Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
