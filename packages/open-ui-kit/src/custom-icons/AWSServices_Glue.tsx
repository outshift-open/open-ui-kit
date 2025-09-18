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

export function AWSServicesGlue(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M13.343 18.003V16.5H12.34v1.497l-.602-.798-.799.602 1.507 2a.504.504 0 0 0 .401.199h.001a.498.498 0 0 0 .4-.201l1.496-2-.801-.598-.601.802Zm2.618-7.878a15.86 15.86 0 0 1-3.127.363c-.67 0-2-.103-3.121-.361l2.543 3.773c.056.083.085.18.085.28v.908c.314.053.705.054 1.002.006v-.914c0-.099.029-.196.085-.279l2.533-3.776Zm1.785-.872.003.002-3.405 5.077v1.139a.5.5 0 0 1-.296.456c-.314.14-.742.201-1.17.201-.459 0-.915-.071-1.223-.192a.5.5 0 0 1-.315-.465v-1.139L7.92 9.256l.002-.002a.548.548 0 0 1-.088-.277c0-.322 0-.992 3.469-1.139l.043.999c-.864.037-1.477.111-1.892.187.763.227 2.028.464 3.38.464 1.279 0 2.479-.212 3.25-.426a8.162 8.162 0 0 0-.775-.096l.074-.997c1.627.121 2.451.46 2.451 1.008a.535.535 0 0 1-.088.276ZM9.837 7h1.002a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H9.837a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5Zm2.504 1.5v-1a.5.5 0 0 1 .501-.5h1.002a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.002a.5.5 0 0 1-.5-.5Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
