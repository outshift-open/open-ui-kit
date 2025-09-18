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

export function Shadow(props: SvgIconProps) {
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
          d="M12 21.637a8.862 8.862 0 0 1-3.564-.72A9.264 9.264 0 0 1 5.54 18.96a9.263 9.263 0 0 1-1.955-2.898 8.862 8.862 0 0 1-.722-3.563c0-1.266.24-2.454.722-3.563a9.263 9.263 0 0 1 1.955-2.898 9.263 9.263 0 0 1 2.897-1.955A8.862 8.862 0 0 1 12 3.363c1.266 0 2.454.24 3.563.721a9.264 9.264 0 0 1 2.898 1.955 9.263 9.263 0 0 1 1.955 2.898 8.862 8.862 0 0 1 .721 3.563c0 1.266-.24 2.454-.721 3.563a9.263 9.263 0 0 1-1.955 2.898 9.264 9.264 0 0 1-2.898 1.955 8.861 8.861 0 0 1-3.563.721ZM4.566 12.5c0 1.466.397 2.802 1.19 4.008a7.255 7.255 0 0 0 3.205 2.697c-.661-.86-1.164-1.86-1.51-3.002a12.593 12.593 0 0 1-.517-3.661c0-1.33.183-2.577.548-3.739.366-1.162.884-2.176 1.556-3.044a7.222 7.222 0 0 0-3.257 2.697A7.148 7.148 0 0 0 4.566 12.5Zm8.282 7.337c1.725-.166 3.196-.858 4.414-2.075 1.217-1.218 1.909-2.689 2.075-4.414l-6.489 6.49Zm-1.28-.247 7.841-7.834a7.158 7.158 0 0 0-.16-.93 6.479 6.479 0 0 0-.291-.905l-8.542 8.536c.175.221.356.426.542.614.186.187.39.36.61.52Zm-1.733-2.073 8.65-8.649a6.89 6.89 0 0 0-.433-.66 11.11 11.11 0 0 0-.501-.63l-8.4 8.4a7.374 7.374 0 0 0 .683 1.54Zm-.972-2.734 7.934-7.959a9.124 9.124 0 0 0-1.36-.902l-6.8 6.794c.013.368.035.72.066 1.059.032.338.085.674.16 1.008Zm-.098-3.721 5.62-5.59a6.157 6.157 0 0 0-1.047-.281 8.399 8.399 0 0 0-1.071-.12c-.974.527-1.762 1.31-2.366 2.35-.603 1.04-.982 2.254-1.136 3.641Z"
        />
      </svg>
    </SvgIcon>
  );
}
