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

export function AWSServicesSageMakerNotebook(props: SvgIconProps) {
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
          strokeWidth=".05"
          d="M6.895 3.975H6.87V5.87H5.788v.777H6.87v1.137H5.788v.777H6.87v1.156H5.788v.778H6.87v1.14H5.788v.778H6.87v1.112H5.788v.778H6.87v1.126H5.788v.778H6.87v1.156H5.788v.778H6.87v1.884h13.009V3.975H6.894Zm1.848 1.894H7.648V4.753H19.1v14.494H7.648V18.14H8.768v-.777H7.648v-1.156H8.768v-.778H7.648v-1.126H8.768v-.778H7.648v-1.112H8.768v-.777H7.648v-1.141H8.768v-.778H7.648V8.56H8.768v-.777H7.648V6.647H8.768v-.778h-.025Zm1.362.753v.025H17.322v-.778H10.105v.753Zm0 2.324v.025H17.322v-.777H10.105v.752Zm0 2.305v.025H17.322v-.778H10.105v.753Zm0 2.324v.025h3.653v-.778h-3.653v.753Z"
        />
      </svg>
    </SvgIcon>
  );
}
