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

export function GCPServicesSecretManager(props: SvgIconProps) {
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
          d="M21.125 7.266v10.698h-3.566a.17.17 0 0 1-.17-.17v-1.019a.17.17 0 0 1 .17-.17h2.207V8.624H17.56a.17.17 0 0 1-.17-.17V7.435a.17.17 0 0 1 .17-.17h3.566Zm-14.122 0a.17.17 0 0 1 .17.17v1.018a.17.17 0 0 1-.17.17h-2.52v7.981h2.505a.17.17 0 0 1 .17.17v1.019a.17.17 0 0 1-.17.17H3.125V7.266h3.878Zm10.006 3.48v1.311l.055.022 1.215-.43.252.739-1.226.418-.033.088.843 1.135-.635.462-.82-1.134h-.078l-.82 1.134-.636-.462.832-1.135-.021-.088-1.227-.418.252-.738 1.204.43.066-.023v-1.31h.777Zm-9.208 0v1.298l.055.022 1.215-.425.252.73-1.226.415-.033.087.843 1.123-.635.458-.82-1.123h-.078l-.82 1.123-.636-.458.832-1.123-.021-.087-1.227-.415.252-.73 1.204.425.066-.022v-1.297h.777Zm4.585 0v1.298l.055.022 1.215-.425.252.73-1.226.415-.033.087.843 1.123-.635.458-.821-1.123h-.077l-.82 1.123-.636-.458.832-1.123-.022-.087-1.226-.415.252-.73 1.204.425.066-.022v-1.297h.777Z"
        />
      </svg>
    </SvgIcon>
  );
}
