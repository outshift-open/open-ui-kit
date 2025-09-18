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

export function Repair(props: SvgIconProps) {
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
          d="m17.6 20.997-6.527-6.571c-.375.129-.749.232-1.12.31a5.718 5.718 0 0 1-1.17.116c-1.656 0-3.064-.577-4.223-1.73-1.16-1.153-1.739-2.555-1.739-4.208 0-.524.072-1.046.215-1.563.144-.518.342-.995.596-1.432l3.655 3.654 2.3-2.15L5.832 3.67c.43-.25.902-.453 1.417-.609a5.287 5.287 0 0 1 1.535-.233c1.686 0 3.12.593 4.305 1.779 1.184 1.186 1.776 2.622 1.776 4.308 0 .392-.038.777-.116 1.154-.077.378-.18.758-.31 1.141l6.553 6.522c.211.215.317.469.317.761 0 .292-.106.544-.317.755l-1.9 1.75c-.211.208-.46.311-.749.311-.288 0-.535-.103-.742-.31Z"
        />
      </svg>
    </SvgIcon>
  );
}
