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

export function AWSServicesMFADevice(props: SvgIconProps) {
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
          d="m17.577 9.493-.012-.033h-.933l-.012.032-1.66 4.536-.025.067h.907l.011-.034.356-1.104h1.74l.369 1.104.011.034h.906l-.024-.067-1.634-4.535Zm-2.736 1.967v-.05h-1.604v-1.209h1.957V9.46H12.34v4.635H13.237v-1.943h1.604V11.46Zm-4.377-2h-.03l-.014.027-1.343 2.615L7.76 9.487l-.014-.027H6.776v4.635H7.609V10.871l1.044 2.059.014.027h.78l.015-.027 1.084-2.078v3.243H11.379V9.46h-.915Zm7.268 2.814h-1.3l.647-1.89.653 1.89Zm-4.898 7.858c-4.484 0-8.132-3.648-8.132-8.132s3.648-8.132 8.132-8.132S20.966 7.516 20.966 12s-3.648 8.132-8.132 8.132Zm0-17.182c-4.99 0-9.05 4.06-9.05 9.05 0 4.99 4.06 9.05 9.05 9.05 4.99 0 9.05-4.06 9.05-9.05 0-4.99-4.06-9.05-9.05-9.05Z"
        />
      </svg>
    </SvgIcon>
  );
}
