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

export function Secret(props: SvgIconProps) {
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
          d="M17.4 8.9H16.5V8C16.5 5.516 14.484 3.5 12 3.5C9.51605 3.5 7.50005 5.516 7.50005 8V8.9H6.60005C5.61005 8.9 4.80005 9.71 4.80005 10.7V19.7C4.80005 20.69 5.61005 21.5 6.60005 21.5H17.4C18.39 21.5 19.2 20.69 19.2 19.7V10.7C19.2 9.71 18.39 8.9 17.4 8.9ZM9.30005 8C9.30005 6.506 10.506 5.3 12 5.3C13.494 5.3 14.7 6.506 14.7 8V8.9H9.30005V8ZM17.4 19.7H6.60005V10.7H17.4V19.7Z"
          fill="#E8E9EA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 11.69C12.4473 11.69 12.81 12.0527 12.81 12.5V13.8152L14.0029 13.1444C14.3929 12.9251 14.8867 13.0635 15.106 13.4534C15.3253 13.8433 15.1869 14.3372 14.797 14.5564L13.6521 15.2002L14.7972 15.8445C15.187 16.0639 15.3253 16.5577 15.1059 16.9476C14.8865 17.3375 14.3926 17.4757 14.0028 17.2563L12.81 16.5852V17.9C12.81 18.3474 12.4473 18.71 12 18.71C11.5526 18.71 11.19 18.3474 11.19 17.9V16.5852L9.99717 17.2563C9.60729 17.4757 9.11341 17.3375 8.89404 16.9476C8.67467 16.5577 8.81289 16.0639 9.20276 15.8445L10.3478 15.2002L9.20294 14.5564C8.81301 14.3372 8.67467 13.8433 8.89394 13.4534C9.11321 13.0635 9.60706 12.9251 9.99699 13.1444L11.19 13.8152V12.5C11.19 12.0527 11.5526 11.69 12 11.69Z"
          fill="#E8E9EA"
        />
      </svg>
    </SvgIcon>
  );
}
