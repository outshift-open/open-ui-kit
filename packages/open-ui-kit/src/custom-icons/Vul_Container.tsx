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

import { SvgIconProps, useTheme, SvgIcon } from "@mui/material";

export function VulContainer(props: SvgIconProps) {
  const theme = useTheme();
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          d="M15.4951 2.5C14.9428 2.5 14.4951 2.94772 14.4951 3.5V8.50464C14.4951 9.05692 14.9428 9.50464 15.4951 9.50464H20.4998C21.052 9.50464 21.4998 9.05692 21.4998 8.50464V3.5C21.4998 2.94772 21.052 2.5 20.4998 2.5H15.4951ZM2.5 4.58791C2.5 3.98708 2.98707 3.5 3.58791 3.5H11.3022C11.3373 3.5 11.3719 3.50166 11.4061 3.5049C11.437 3.50166 11.4684 3.5 11.5 3.5C11.9916 3.5 12.3902 3.89851 12.3902 4.39011V11.6096H19.4121L19.426 11.6097H19.6099C20.1015 11.6097 20.5 12.0082 20.5 12.4998C20.5 12.5315 20.4983 12.5628 20.4951 12.5937C20.4983 12.6279 20.5 12.6625 20.5 12.6975V20.4121C20.5 21.0129 20.0129 21.5 19.4121 21.5H3.58791C2.98708 21.5 2.5 21.0129 2.5 20.4121V4.58791ZM4.28022 5.28022V11.6097H10.6099V5.28022H4.28022ZM4.28022 13.3899V19.7198H10.6099L10.6099 13.3899L4.28022 13.3899ZM12.3902 13.3899L12.3902 19.7198H18.7198V13.3899H12.3902Z"
          fill={props?.fill || theme.palette.grey[50]}
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
