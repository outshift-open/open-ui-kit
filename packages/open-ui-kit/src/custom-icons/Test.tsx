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

export function Test(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="M20.377 3.341h-6.065a2.359 2.359 0 0 0-4.256 0H4V22h16.377V3.341Zm-9.295 1.344.114-.53a1.017 1.017 0 0 1 1.987 0l.114.53h1.301v1.243H9.781V4.685h1.3Zm7.95 15.973H5.345V4.685h3.093v2.587h7.503V4.685h3.093v15.973Zm-1.334-10.016h-5.297v1.344h5.297v-1.344Zm-9.998-.15.92.746 1.833-2.13 1.019.876-2.683 3.12-1.936-1.566.847-1.046Zm9.886 5.43h-5.297v1.343h5.297v-1.344Zm-8.735-.278 1.131-1.13.95.95-1.129 1.132 1.129 1.128-.95.95-1.13-1.129-1.13 1.13-.95-.95 1.13-1.13-1.13-1.13.95-.95 1.13 1.129Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
