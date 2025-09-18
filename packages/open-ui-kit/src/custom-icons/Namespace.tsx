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

export function Namespace(props: SvgIconProps) {
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
          d="M12 7.357a2.338 2.338 0 1 0 0-4.675 2.338 2.338 0 0 0 0 4.675ZM8.957 19.845l.418-1.008a6.85 6.85 0 0 1-1.55-.896l-.664.865c.547.42 1.15.771 1.796 1.039Zm-3.263-2.506.865-.665a6.848 6.848 0 0 1-.897-1.55l-1.007.418a7.94 7.94 0 0 0 1.039 1.797Zm-1.04-7.881 1.008.418c.231-.557.534-1.078.897-1.55l-.865-.665a7.94 7.94 0 0 0-1.04 1.797Zm2.507-3.264.665.865a6.849 6.849 0 0 1 1.55-.896l-.419-1.008a7.94 7.94 0 0 0-1.796 1.04Zm7.881-1.039-.418 1.008c.557.23 1.077.533 1.55.896l.664-.865a7.938 7.938 0 0 0-1.796-1.039Zm3.264 2.506-.865.665c.363.472.665.993.896 1.55l1.008-.418a7.937 7.937 0 0 0-1.04-1.797Zm1.039 7.881-1.008-.417a6.849 6.849 0 0 1-.896 1.549l.865.665c.42-.547.77-1.15 1.039-1.797Zm-2.507 3.264-.664-.865a6.85 6.85 0 0 1-1.55.896l.418 1.008a7.94 7.94 0 0 0 1.796-1.039Zm-2.5 1.175a2.338 2.338 0 1 1-4.676 0 2.338 2.338 0 0 1 4.675 0Zm-9.819-5.61a2.338 2.338 0 1 0 0-4.676 2.338 2.338 0 0 0 0 4.675Zm17.299-2.338a2.338 2.338 0 1 1-4.675 0 2.338 2.338 0 0 1 4.675 0Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
