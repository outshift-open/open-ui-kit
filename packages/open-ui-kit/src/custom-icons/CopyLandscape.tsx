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

export function CopyLandscape(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M20.182 14.667v-8.89H7.455v8.89h12.727Zm0-10.667c.482 0 .945.187 1.282.524.345.33.536.783.536 1.254v8.889c0 .47-.19.924-.536 1.253-.337.338-.8.524-1.282.524H7.455c-1.01 0-1.819-.8-1.819-1.777v-8.89c0-.986.81-1.777 1.819-1.777h12.727ZM3.818 18.222h13.636V20H3.819c-.482 0-.945-.187-1.282-.524A1.729 1.729 0 0 1 2 18.222V8.444h1.818v9.778Z"
        />
      </svg>
    </SvgIcon>
  );
}
