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

export const CloudSimple = (props: SvgIconProps) => {
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
          <path
            fill="#1E2939"
            stroke="#384D6B"
            strokeWidth=".5"
            d="M98.917 45.662c18.012.135 31.064 14.899 32.024 31.053l.01.168.159.054c10.974 3.739 18.902 14.124 18.902 26.411 0 15.418-12.465 27.975-27.759 27.975H51.494c-16.162 0-27.758-11.163-27.758-25.004 0-10.91 7.079-21.464 17.782-24.41l.169-.047.014-.174c.699-8.528 4.849-15.076 10.613-18.561 5.57-3.368 12.41-3.955 18.581-1.743l.193.07.105-.175c5.273-8.71 14.918-15.617 27.474-15.617h.25Z"
          />
          <path
            fill="url(#a)"
            stroke="#384D6B"
            strokeWidth=".5"
            d="m126.002 80.513.011.17.162.053c9.955 3.225 19.174 11.6 19.174 22.1 0 13.202-12.433 23.667-26.275 23.667h-63.95c-7.313 0-14.003-2.053-18.858-5.585-4.852-3.53-7.867-8.532-7.867-14.454 0-4.652 2.243-9.397 5.718-13.306 3.473-3.906 8.157-6.953 12.995-8.22l.17-.044.016-.176c.633-7.356 3.399-13.785 8.574-16.76 5.006-2.88 12.077-2.5 17.681-.59l.186.064.106-.166c2.387-3.75 5.912-7.95 10.257-11.212 4.346-3.261 9.498-5.573 15.147-5.573 8.173 0 14.637 4.007 19.174 9.77 4.541 5.767 7.143 13.284 7.579 20.262Z"
          />
          <path
            fill="#1FD2FF"
            d="M89.857 72.361c-6.231 0-11.279 5.087-11.279 11.367v7.232h-3.076c-1.136 0-2.05.922-2.05 2.067v18.599c0 1.145.914 2.066 2.05 2.066h28.709a2.055 2.055 0 0 0 2.051-2.066v-18.6a2.054 2.054 0 0 0-2.051-2.066h-3.076v-7.232c0-6.28-5.048-11.367-11.279-11.367Zm0 2.067c5.13 0 9.228 4.13 9.228 9.3v7.232H80.629v-7.233c0-5.17 4.097-9.3 9.228-9.3Zm0 22.732c1.699 0 3.076 1.388 3.076 3.1 0 .918-.397 1.741-1.025 2.309v2.858a2.054 2.054 0 0 1-2.05 2.066 2.054 2.054 0 0 1-2.051-2.066v-2.858a3.102 3.102 0 0 1-1.026-2.309c0-1.712 1.378-3.1 3.077-3.1h-.001Z"
          />
          <defs>
            <linearGradient
              id="a"
              x1="23.899"
              x2="101.139"
              y1="50.231"
              y2="160.785"
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
