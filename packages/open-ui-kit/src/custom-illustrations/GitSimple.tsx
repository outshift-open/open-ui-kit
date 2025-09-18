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

export const GitSimple = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      component={() => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="180"
          fill="none"
        >
          <circle
            cx="90"
            cy="90"
            r="58.75"
            fill="#1E2939"
            stroke="#384D6B"
            strokeWidth=".5"
          />
          <circle
            cx="89.999"
            cy="90"
            r="53.131"
            fill="url(#a)"
            stroke="#384D6B"
            strokeWidth=".5"
          />
          <path
            fill="#1FD2FF"
            fillRule="evenodd"
            d="M90.001 57.458c-18.425 0-33.365 14.937-33.365 33.367 0 14.741 9.56 27.249 22.818 31.66 1.666.309 2.279-.725 2.279-1.606 0-.794-.03-3.423-.045-6.211-9.283 2.018-11.24-3.937-11.24-3.937-1.52-3.857-3.707-4.882-3.707-4.882-3.028-2.072.23-2.029.23-2.029 3.349.235 5.114 3.438 5.114 3.438 2.975 5.103 7.805 3.626 9.709 2.774.3-2.156 1.165-3.628 2.119-4.462-7.412-.843-15.203-3.703-15.203-16.489 0-3.643 1.303-6.62 3.438-8.955-.345-.842-1.487-4.234.324-8.832 0 0 2.801-.895 9.177 3.421 2.663-.738 5.516-1.109 8.352-1.122 2.837.013 5.692.384 8.36 1.122 6.367-4.316 9.166-3.42 9.166-3.42 1.815 4.597.673 7.99.328 8.831 2.139 2.335 3.432 5.312 3.432 8.955 0 12.816-7.805 15.637-15.236 16.464 1.198 1.036 2.264 3.064 2.264 6.179 0 4.463-.039 8.057-.039 9.155 0 .89.6 1.93 2.293 1.602 13.249-4.418 22.798-16.919 22.798-31.656 0-18.43-14.938-33.367-33.366-33.367Z"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="a"
              x1="32.755"
              x2="147.243"
              y1="36.619"
              y2="143.381"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#384C6B" />
              <stop offset="1" stopColor="#2A3A50" />
            </linearGradient>
          </defs>
        </svg>
      )}
    />
  );
};
