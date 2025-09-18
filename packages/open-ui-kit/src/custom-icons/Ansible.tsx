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

export function Ansible(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.04688 12.7461C2.04688 7.24609 6.54688 2.74609 12.0469 2.74609C17.5469 2.74609 22.0469 7.24609 22.0469 12.7461C22.0469 18.2461 17.5469 22.7461 12.0469 22.7461C6.54688 22.7461 2.04688 18.2461 2.04688 12.7461ZM12.7778 7.02196C12.6494 6.73306 12.3629 6.54688 12.0468 6.54688C11.7306 6.54688 11.4441 6.73306 11.3157 7.02196L8.67529 12.963C8.6704 12.9734 8.66575 12.9838 8.66134 12.9943L6.81573 17.147C6.63629 17.5507 6.81812 18.0235 7.22187 18.2029C7.62562 18.3824 8.09839 18.2005 8.27783 17.7968L9.76809 14.4437L16.1437 18.1629C16.4435 18.3378 16.822 18.2994 17.0806 18.0678C17.3391 17.8361 17.4188 17.4642 17.2778 17.147L12.7778 7.02196ZM14.8092 15.5321L10.4218 12.9727L12.0468 9.31665L14.8092 15.5321Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
