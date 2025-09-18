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

export function AWSServicesEBS(props: SvgIconProps) {
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
          d="M19.834 16.5h1V20h-3.5v-1h1.793l-1.647-1.646.708-.708 1.646 1.647V16.5ZM7.541 19h1.793v1h-3.5v-3.5h1v1.793l1.646-1.647.708.708L7.541 19ZM20.834 4v3.5h-1V5.707l-1.646 1.647-.708-.708L19.127 5h-1.793V4h3.5Zm-15 0h3.5v1H7.541l1.647 1.646-.708.708-1.646-1.647V7.5h-1V4Zm7.561 11.5c-1.557 0-2.391-.344-2.469-.504l-.01-4.943c.793.289 1.87.338 2.479.338.6 0 1.655-.054 2.441-.34l.009 4.895c-.115.194-1.056.554-2.45.554Zm2.382-6.506c-.235.157-.987.397-2.382.397-1.53 0-2.29-.283-2.442-.382.203-.2 1.097-.509 2.442-.509 1.219 0 2.123.296 2.382.494ZM13.395 7.5c-1.289 0-3.469.314-3.469 1.492v6.004c0 1.396 2.655 1.504 3.469 1.504 1.277 0 3.439-.317 3.439-1.504V8.992c0-1.18-2.25-1.492-3.439-1.492Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
