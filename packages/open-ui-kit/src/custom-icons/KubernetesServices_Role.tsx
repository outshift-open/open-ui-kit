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

export function KubernetesServicesRole(props: SvgIconProps) {
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
          d="M12.98 9.115a1.018 1.018 0 0 0-1.02 1.013v.424h2.041v-.431a1.02 1.02 0 0 0-1.021-1.006ZM12.873 13.156c.4 0 .724-.322.724-.719a.721.721 0 0 0-.724-.718c-.4 0-.725.322-.725.719 0 .396.325.718.725.718Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.96 6.612 8.515 8.577v2.933c0 2.72 1.894 5.26 4.445 5.878 2.547-.617 4.444-3.159 4.444-5.878V8.577L12.96 6.612Zm2.353 7.892h-4.708v-3.952h.676v-.431c0-.931.76-1.687 1.7-1.687s1.702.756 1.702 1.687v.43h.63v3.953Z"
        />
        <path
          stroke="#E8E9EA"
          strokeDasharray="3.02 1.51"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.512"
          d="M20.959 5.025h-16v13.95h16V5.025Z"
        />
      </svg>
    </SvgIcon>
  );
}
