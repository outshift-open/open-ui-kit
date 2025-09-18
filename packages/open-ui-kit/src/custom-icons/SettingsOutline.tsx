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

export function SettingsOutline(props: SvgIconProps) {
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
          d="m9.7 22-.5-3.15a6.702 6.702 0 0 1-1-.475c-.35-.2-.658-.408-.925-.625l-2.95 1.35L2 15l2.7-1.975a2.972 2.972 0 0 1-.063-.513A11.94 11.94 0 0 1 4.626 12c0-.15.004-.32.013-.512.008-.192.029-.363.062-.513L2 9l2.325-4.1 2.95 1.35a6.87 6.87 0 0 1 .925-.625c.35-.2.683-.35 1-.45L9.7 2h4.6l.5 3.15a8.1 8.1 0 0 1 1.012.462c.359.192.663.405.913.638l2.95-1.35L22 9l-2.7 1.925c.033.167.054.346.063.537a12.473 12.473 0 0 1 0 1.063c-.009.183-.03.358-.063.525L22 15l-2.325 4.1-2.95-1.35c-.267.217-.57.43-.913.637a4.36 4.36 0 0 1-1.012.463L14.3 22H9.7Zm2.3-6.75c.9 0 1.667-.317 2.3-.95.633-.633.95-1.4.95-2.3 0-.9-.317-1.667-.95-2.3a3.133 3.133 0 0 0-2.3-.95c-.9 0-1.667.317-2.3.95-.633.633-.95 1.4-.95 2.3 0 .9.317 1.667.95 2.3.633.633 1.4.95 2.3.95Zm0-1.5c-.483 0-.896-.17-1.238-.512A1.686 1.686 0 0 1 10.25 12c0-.483.17-.896.512-1.238A1.686 1.686 0 0 1 12 10.25c.483 0 .896.17 1.238.512.341.342.512.755.512 1.238s-.17.896-.512 1.238A1.686 1.686 0 0 1 12 13.75Zm-1.1 6.75h2.2l.35-2.8a5.896 5.896 0 0 0 1.563-.625 6.406 6.406 0 0 0 1.337-1.025L19 17.2l1-1.8-2.35-1.725c.067-.283.12-.563.163-.838.041-.274.062-.554.062-.837 0-.283-.017-.563-.05-.838a5.172 5.172 0 0 0-.175-.837L20 8.6l-1-1.8-2.65 1.15a5.573 5.573 0 0 0-1.3-1.088 4.216 4.216 0 0 0-1.6-.562l-.35-2.8h-2.2l-.35 2.8a5.297 5.297 0 0 0-1.588.6c-.491.283-.929.633-1.312 1.05L5 6.8 4 8.6l2.35 1.725c-.067.283-.12.563-.162.838a5.583 5.583 0 0 0 0 1.675c.041.275.095.554.162.837L4 15.4l1 1.8 2.65-1.15c.4.4.846.742 1.338 1.025a5.896 5.896 0 0 0 1.562.625l.35 2.8Z"
        />
      </svg>
    </SvgIcon>
  );
}
