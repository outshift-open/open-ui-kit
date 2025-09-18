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

export function AWSServicesAutoScalingGroup(props: SvgIconProps) {
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
          strokeWidth=".07"
          d="M7.778 11.636V11.6H5.61a.013.013 0 0 1-.012-.013V4.776c0-.007.005-.012.012-.012h6.812c.007 0 .013.005.013.012v2.487h.798V4.776a.812.812 0 0 0-.811-.811H5.61a.812.812 0 0 0-.811.811v6.812c0 .447.364.811.811.811h2.168v-.763Zm4.114 3.818v-.035H9.11a.012.012 0 0 1-.013-.013V8.594c0-.007.006-.013.013-.013h6.812c.007 0 .012.006.012.013v2.487h.799V8.594a.812.812 0 0 0-.811-.811H9.11a.812.812 0 0 0-.811.81v6.813c0 .447.364.811.81.811H11.893v-.763Zm8.178-3.042-.025 6.824-6.812-.025v-6.799c0-.007.006-.013.013-.013h6.812c.006 0 .012.006.012.013Zm-.012-.811h-6.812a.812.812 0 0 0-.811.811v6.834c0 .435.354.789.789.789h6.856a.79.79 0 0 0 .789-.79v-6.833a.812.812 0 0 0-.811-.811Z"
        />
      </svg>
    </SvgIcon>
  );
}
