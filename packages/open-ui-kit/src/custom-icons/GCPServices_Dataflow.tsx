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

export function GCPServicesDataflow(props: SvgIconProps) {
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
          d="M12.224 5.442h-.009L9.146 3.615 7.58 4.47l3.096 1.836-4.734 2.637-.027 1.845 1.602.027.018-.963 3.88-2.205-.019 1.557.63.007v.002l.918.009.018-1.557 3.816 2.304-.009.963 1.593.027V9.114L13.736 6.35l-.016-.055.016.01 3.141-1.764-1.494-.891h-.045l-3.114 1.746.082.049-.082-.004ZM11.306 16.008l1.548.018-.018 1.548 3.87-2.205.018-.99 1.61.018-.026 1.88-4.743 2.638-.006.017.015-.008 3.096 1.836-1.521.855h-.045l-3.078-1.827-.004-.012-1.506-.896 1.51.908-3.114 1.746h-.045l-1.494-.891 3.14-1.764-4.625-2.763v-1.8h1.584l-.01.936 3.826 2.304.018-1.548Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M17.632 13.677a1.026 1.026 0 1 0 0-2.052 1.026 1.026 0 0 0 0 2.052ZM6.617 13.533a1.026 1.026 0 1 0 0-2.052 1.026 1.026 0 0 0 0 2.052ZM12.178 11.832a1.026 1.026 0 1 0 0-2.052 1.026 1.026 0 0 0 0 2.052ZM12.098 15.44a1.026 1.026 0 1 0 0-2.051 1.026 1.026 0 0 0 0 2.052Z"
        />
      </svg>
    </SvgIcon>
  );
}
