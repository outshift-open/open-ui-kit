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

export function AWSCategoryDatabase(props: SvgIconProps) {
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
          d="M12.834 12.254c-3.242 0-5.011-.956-5.011-1.446V8.323c1.135.683 3.078 1.037 5.011 1.037 1.934 0 3.876-.354 5.012-1.037v2.485c0 .49-1.77 1.446-5.012 1.446Zm0 3.827c-3.242 0-5.011-.955-5.011-1.447v-2.416c1.135.684 3.078 1.038 5.011 1.038 1.934 0 3.876-.354 5.012-1.038v2.416c0 .492-1.77 1.447-5.012 1.447Zm0 3.417c-3.242 0-5.011-.957-5.011-1.447v-2.005c1.135.683 3.078 1.037 5.011 1.037 1.934 0 3.876-.354 5.012-1.037v2.005c0 .49-1.77 1.447-5.012 1.447Zm0-14.033c3.243 0 5.012.956 5.012 1.447 0 .49-1.77 1.446-5.012 1.446-3.242 0-5.011-.955-5.011-1.446 0-.49 1.769-1.447 5.011-1.447ZM6.82 6.912v11.14c0 1.607 3.026 2.448 6.014 2.448 2.988 0 6.014-.84 6.014-2.449V6.911c0-3.215-12.028-3.215-12.028 0Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
