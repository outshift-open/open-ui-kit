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

export function AWSServicesDB(props: SvgIconProps) {
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
          d="M10.334 5.032c2.747 0 4.5.917 4.5 1.549 0 .631-1.753 1.548-4.5 1.548s-4.5-.917-4.5-1.548c0-.632 1.753-1.549 4.5-1.549Zm0 7.742c1.019 0 2.007-.122 2.859-.352l-.254-.999c-.77.21-1.67.319-2.605.319-2.747 0-4.5-.917-4.5-1.549V8.107c1.061.69 2.813 1.054 4.5 1.054 1.687 0 3.439-.363 4.5-1.054v1.054h1V6.577C15.828 4.903 12.998 4 10.334 4c-2.605 0-5.364.866-5.488 2.47h-.012v11.174C4.834 19.191 7.386 20 9.907 20c1.167 0 2.298-.172 3.182-.485l-.324-.978c-.784.278-1.798.43-2.858.43-2.636 0-4.073-.874-4.073-1.323V15.85c1.061.69 2.813 1.054 4.5 1.054 1.019 0 2.007-.122 2.859-.352l-.254-.999c-.77.21-1.67.319-2.605.319-2.747 0-4.5-.917-4.5-1.548V11.72c1.061.69 2.813 1.054 4.5 1.054Zm9.5-.516h-1v-1.032h.1l.9.884v.148Zm0 6.194h-5v-7.226h3v1.548c0 .285.224.516.5.516h1.5v5.162Zm.845-6.936-1.2-1.18a.49.49 0 0 0-.345-.143h-4.8c-.276 0-.5.232-.5.517v8.258c0 .285.224.516.5.516h6c.276 0 .5-.231.5-.516V11.89a.523.523 0 0 0-.155-.374Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
