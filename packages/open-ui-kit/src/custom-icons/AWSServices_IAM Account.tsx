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

export function AWSServicesIAMAccount(props: SvgIconProps) {
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
          stroke="#E8E9EA"
          strokeWidth=".2"
          d="M16.243 13.454c1.203 0 2.182.98 2.182 2.182a2.184 2.184 0 0 1-2.182 2.182 2.184 2.184 0 0 1-2.182-2.182c0-1.203.979-2.181 2.182-2.181Zm0 5.091a2.913 2.913 0 0 0 2.91-2.909 2.913 2.913 0 0 0-2.91-2.909 2.913 2.913 0 0 0-2.909 2.91 2.913 2.913 0 0 0 2.91 2.909Zm.727-11.914 1.776 3.55h-3.55l1.774-3.55Zm-2.363 4.278h4.727a.364.364 0 0 0 .325-.526l-2.363-4.727c-.124-.247-.527-.247-.651 0l-2.364 4.727a.364.364 0 0 0 .326.526Zm-6.728 2.91h4v-4h-4v4Zm-.363.726h4.727a.364.364 0 0 0 .364-.363V9.455c0-.201-.163-.364-.364-.364H7.516a.364.364 0 0 0-.364.364v4.727c0 .2.163.364.364.364ZM6.06 19.273h14.546V4.727H6.06v14.546ZM20.971 4H5.697a.364.364 0 0 0-.364.364v15.272c0 .201.163.364.364.364H20.97a.364.364 0 0 0 .364-.364V4.364c0-.201-.163-.364-.364-.364Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
