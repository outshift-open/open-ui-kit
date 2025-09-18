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

export function AWSServicesGuardDuty(props: SvgIconProps) {
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
          d="m16.022 16.891-1.25-1 .625-.781.824.659 1.697-2.546.833.555-2 3a.51.51 0 0 1-.417.222.504.504 0 0 1-.312-.109ZM6.834 12h2v-1h-2v1Zm.001-2h3V9h-3v1Zm12-3v-.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V7H5.834V5.6c0-.319.198-.6.422-.6h13.156c.225 0 .423.281.423.6V7h-1Zm-2.376 5c1.862 0 3.376 1.571 3.376 3.5 0 1.93-1.514 3.5-3.376 3.5-1.861 0-3.375-1.57-3.375-3.5 0-1.929 1.514-3.5 3.375-3.5Zm4.375 0V5.6c0-.882-.638-1.6-1.422-1.6H6.256c-.784 0-1.422.718-1.422 1.6v8.8c0 .883.638 1.6 1.422 1.6h5.877c.246 2.244 2.08 4 4.326 4 2.413 0 4.375-2.018 4.375-4.5 0-2.481-1.962-4.5-4.375-4.5-2.246 0-4.08 1.757-4.326 4H6.256c-.224 0-.422-.28-.422-.6V8h5.001v4h1V7h5.999v3h1.001V8h1v4h.999Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
