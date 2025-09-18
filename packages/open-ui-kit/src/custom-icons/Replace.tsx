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

export function Replace(props: SvgIconProps) {
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
          d="M16.301 9.265H12.75c-.654 0-.912-.263-.917-.917V4.197c0-.645.277-.927.917-.927h7.169c.64 0 .916.282.916.927v4.147c0 .654-.262.916-.916.916l-3.617.005Zm3.013-1.516V4.776h-5.946V7.75h5.946ZM7.299 21.27H3.752c-.64 0-.917-.282-.917-.926v-4.147c0-.654.263-.917.917-.917h7.169c.654 0 .912.263.916.917v4.147c0 .644-.277.926-.916.926H7.299Zm3.017-1.486V16.81H4.371v2.973h5.945ZM10.317 5.534v1.487c-.699 0-1.378-.04-2.052 0-.379.016-.748.13-1.07.332a1.397 1.397 0 0 0-.55.886c-.07.952 0 1.908 0 2.889l1.095-1.14 1.056 1.13c-.035.045-.07.088-.11.129l-2.22 2.195a.778.778 0 0 1-1.277 0l-2.304-2.314 1.07-1.06 1.026 1.12.114-.065v-.644c-.02-.826.003-1.653.069-2.477A2.849 2.849 0 0 1 7.79 5.524c.822-.044 1.65.01 2.527.01ZM18.585 13.407v2.408c.003.315-.032.63-.104.937a2.928 2.928 0 0 1-2.665 2.234c-.808.045-1.615 0-2.453 0V17.5h2.165a1.486 1.486 0 0 0 1.556-1.487c.035-.862 0-1.729 0-2.665l-1.08 1.204-1.184-1.145c.381-.357.768-.713 1.14-1.08.371-.367.857-.867 1.293-1.288a.743.743 0 0 1 1.15 0c.802.788 1.595 1.59 2.353 2.348l-1.08 1.085-.991-1.09-.1.025Z"
        />
      </svg>
    </SvgIcon>
  );
}
