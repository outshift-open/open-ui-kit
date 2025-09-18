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

export function AWSServicesClientVPN(props: SvgIconProps) {
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
          d="M9.454 18.26h5.633v-3.38H9.454v3.38Zm1.085-4.506h3.45c.01-.705-.015-1.439-.404-1.838-.254-.259-.686-.392-1.283-.392-.624 0-1.074.139-1.34.41-.393.401-.43 1.121-.423 1.82Zm5.675.563v4.506c0 .311-.253.564-.564.564H8.89a.563.563 0 0 1-.563-.564v-4.506c0-.31.252-.563.564-.563h.52c-.01-.89.054-1.9.746-2.608.487-.496 1.208-.748 2.145-.748.914 0 1.617.246 2.09.732.69.709.74 1.731.725 2.624h.533c.311 0 .563.252.563.563Zm5.62-1.164c0 2.687-2.2 3.41-3.364 3.417h-1.13v-1.126h1.127c.224-.004 2.24-.097 2.24-2.29 0-2.245-2.248-2.657-2.344-2.674a.563.563 0 0 1-.468-.554c0-.039.004-.148.012-.185.177-.87-.476-1.234-.68-1.324-.448-.2-1.088-.196-1.44.28a.566.566 0 0 1-.984-.147c-.2-.568-.566-1.112-1.116-1.664a3.972 3.972 0 0 0-4.382-.817c-1.321.56-2.133 2.216-2.156 3.494l-.003.136c-.005.148-.015.358-.001.472a.563.563 0 0 1-.42.613c-1.237.316-1.763.993-1.763 2.266-.002.164-.003.235 0 .281.08 1.281.96 2.113 2.239 2.113v1.126c-1.893 0-3.245-1.275-3.364-3.173a4.843 4.843 0 0 1-.002-.262c0-1.709.733-2.8 2.18-3.313l.004-.157.003-.12c.029-1.617 1.036-3.747 2.843-4.513 1.95-.825 4.156-.41 5.62 1.059.443.445.791.894 1.05 1.358.622-.35 1.418-.387 2.15-.062.883.393 1.39 1.19 1.378 2.107 1.207.378 2.771 1.446 2.771 3.66Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
