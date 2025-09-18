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

export function AWSServicesNetworkACL(props: SvgIconProps) {
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
          d="M16.363 16.654h.818V7.346h-.818v9.308Zm-7.875 0h.818V7.346h-.818v9.308Zm10.738-4.046L18.497 12l.73-.608v1.216Zm.583-2.46a.41.41 0 0 0-.436.056l-1.777 1.482a.41.41 0 0 0 0 .629l1.778 1.48a.41.41 0 0 0 .67-.314V10.52a.409.409 0 0 0-.235-.37Zm-13.367 2.46v-1.216l.73.608-.73.608Zm-.147-2.404a.41.41 0 0 0-.671.315v2.962a.409.409 0 0 0 .67.315l1.778-1.481a.41.41 0 0 0 0-.63l-1.777-1.48Zm8.276 3.893-3.475-.002v-2.76l3.477.002-.002 2.76Zm-2.4-4.122a.89.89 0 0 1 .214-.59.608.608 0 0 1 .452-.216h.002c.364 0 .659.367.658.816v.534l-1.328-.001.002-.543Zm2.811.544h-.668v-.532c.004-.9-.658-1.634-1.472-1.637h-.005c-.405 0-.782.175-1.064.492-.27.304-.419.706-.42 1.13l-.002.546h-.664a.408.408 0 0 0-.409.408v3.578c0 .226.182.409.409.409l4.293.002a.408.408 0 0 0 .41-.41l.001-3.577a.408.408 0 0 0-.409-.41Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12.834 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
