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

export function Share(props: SvgIconProps) {
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
          d="M18.175 22.5a2.744 2.744 0 0 1-2.019-.834 2.76 2.76 0 0 1-.681-2.866L7.9 14.4c-.25.283-.558.512-.925.688a2.586 2.586 0 0 1-1.125.262 2.749 2.749 0 0 1-2.019-.831A2.749 2.749 0 0 1 3 12.5c0-.792.277-1.465.831-2.019A2.748 2.748 0 0 1 5.85 9.65c.383 0 .75.075 1.1.225.35.15.667.367.95.65l7.575-4.35a1.779 1.779 0 0 1-.112-.398 2.553 2.553 0 0 1-.038-.427c0-.792.277-1.465.831-2.019a2.748 2.748 0 0 1 2.019-.831c.792 0 1.465.277 2.019.831.554.554.831 1.227.831 2.019s-.277 1.465-.831 2.019a2.749 2.749 0 0 1-2.019.831c-.39 0-.762-.063-1.117-.188a2.138 2.138 0 0 1-.908-.612l-7.575 4.2a4.619 4.619 0 0 1 .125.906c0 .12-.012.246-.037.375-.026.13-.055.26-.088.394l7.575 4.3c.25-.233.542-.42.875-.563a2.918 2.918 0 0 1 1.15-.212c.792 0 1.465.277 2.019.831.554.554.831 1.227.831 2.019s-.277 1.465-.831 2.019a2.749 2.749 0 0 1-2.019.831Zm0-15.8c.384 0 .704-.13.962-.388.259-.26.388-.58.388-.963s-.13-.703-.388-.962A1.309 1.309 0 0 0 18.174 4c-.383 0-.703.13-.962.388-.258.26-.387.58-.387.963s.13.703.388.962c.26.258.58.387.963.387ZM5.852 13.85c.383 0 .703-.13.962-.388.258-.26.387-.58.387-.963s-.13-.703-.388-.962a1.309 1.309 0 0 0-.963-.387c-.383 0-.703.13-.962.388-.258.26-.387.58-.387.963s.13.703.388.962c.26.258.58.387.963.387ZM18.176 21c.383 0 .703-.13.962-.388.258-.26.387-.58.387-.963s-.13-.703-.388-.962a1.309 1.309 0 0 0-.963-.387c-.383 0-.703.13-.962.388-.258.26-.387.58-.387.963s.13.703.388.962c.26.258.58.387.963.387Z"
        />
      </svg>
    </SvgIcon>
  );
}
