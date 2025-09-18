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

export function GCPServicesGKE(props: SvgIconProps) {
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
          d="M19.51 7.467a1.652 1.652 0 0 0-1.605 1.604 1.748 1.748 0 0 0 .85 1.414v6.588l-4.927 2.922.764 1.222 5.3-3.103a.803.803 0 0 0 .381-.66v-6.97a1.567 1.567 0 0 0 .85-1.413 1.538 1.538 0 0 0-1.614-1.604ZM17.858 6.436 12.5 3.42a1.127 1.127 0 0 0-.754 0L5.684 6.933a1.642 1.642 0 0 0-2.559 1.289 1.652 1.652 0 0 0 1.614 1.575 1.652 1.652 0 0 0 1.604-1.575l5.786-3.294 4.917 2.864.812-1.356ZM11.365 18.868a1.5 1.5 0 0 0-.85.277L5.588 16.28v-5.605H4.07v6.026a.802.802 0 0 0 .382.658l5.31 2.941v.086a1.614 1.614 0 0 0 3.217 0 1.575 1.575 0 0 0-1.614-1.518Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m16.865 9.444-4.64-2.721-4.746 2.72 4.746 2.646 4.64-2.645ZM12.225 13.024l-5.023-2.921v2.358l5.023 2.826v-2.263ZM12.225 16.223l-5.023-2.912v1.976l5.023 2.922v-1.986Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.215 13.024v2.263l5.022-2.921v-2.254l-5.022 2.912Zm4.125-.897a.363.363 0 1 1 0-.727.363.363 0 0 1 0 .727ZM12.215 16.223V18.2l5.022-2.913v-1.976l-5.022 2.912Zm4.125-1.022a.363.363 0 1 1 0-.725.363.363 0 0 1 0 .725Z"
        />
      </svg>
    </SvgIcon>
  );
}
