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

export function CheckboxFull(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 3H7.5C5.29086 3 3.5 4.79086 3.5 7V17C3.5 19.2091 5.29086 21 7.5 21H17.5C19.7091 21 21.5 19.2091 21.5 17V7C21.5 4.79086 19.7091 3 17.5 3ZM16.2295 10.6839C16.6073 10.281 16.5869 9.6482 16.184 9.27047C15.781 8.89274 15.1482 8.91315 14.7705 9.31606L11.6865 12.6056L10.1644 11.2526C9.75159 10.8857 9.11952 10.9229 8.7526 11.3356C8.38568 11.7484 8.42286 12.3805 8.83565 12.7474L11.0856 14.7474C11.4907 15.1075 12.1089 15.0793 12.4795 14.6839L16.2295 10.6839Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
