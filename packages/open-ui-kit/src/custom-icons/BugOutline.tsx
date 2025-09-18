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

export function BugOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M12 21.5a6.145 6.145 0 0 1-3.025-.775A4.796 4.796 0 0 1 6.9 18.5H4V17h2.3a5.027 5.027 0 0 1-.175-1.313V14.35h-2.15v-1.5h2.15c0-.483.004-.963.012-1.438A5.47 5.47 0 0 1 6.35 10H4V8.5h3a4.17 4.17 0 0 1 .925-1.225c.383-.35.808-.642 1.275-.875L7.275 4.5l1-1 2.35 2.35c.466-.167.937-.25 1.412-.25.475 0 .946.083 1.413.25L15.8 3.5l1 1-1.9 1.9c.466.233.879.53 1.237.887.358.359.67.763.938 1.213h2.95V10H17.65c.15.467.22.938.212 1.412-.008.475-.012.955-.012 1.438h2.175v1.5H17.85c0 .45.004.896.012 1.338.008.441-.046.879-.162 1.312h2.325v1.5h-2.9a4.567 4.567 0 0 1-2.063 2.238A6.346 6.346 0 0 1 12 21.5Zm0-1.5c1.2 0 2.225-.42 3.075-1.262.85-.842 1.275-1.863 1.275-3.063V11.5c0-1.2-.425-2.22-1.275-3.063-.85-.841-1.875-1.262-3.075-1.262-1.2 0-2.225.42-3.075 1.263-.85.841-1.275 1.862-1.275 3.062v4.175c0 1.2.425 2.22 1.275 3.063C9.775 19.579 10.8 20 12 20Zm-2-3.5h4V15h-4v1.5Zm0-4.325h4v-1.5h-4v1.5Z"
        />
      </svg>
    </SvgIcon>
  );
}
