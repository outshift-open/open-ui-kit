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

export function AWSServicesELBv2Listener(props: SvgIconProps) {
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
          d="M9.33 16.595a4.586 4.586 0 0 1-4.58-4.58 4.586 4.586 0 0 1 4.58-4.582 4.586 4.586 0 0 1 4.581 4.581 4.586 4.586 0 0 1-4.58 4.581Zm9.017.548c.708 0 1.286.577 1.286 1.286a1.287 1.287 0 0 1-2.571 0c0-.709.575-1.286 1.285-1.286Zm0-12.857c.708 0 1.286.577 1.286 1.285a1.287 1.287 0 0 1-2.571 0c0-.708.575-1.285 1.285-1.285Zm1.286 6.428c.708 0 1.285.578 1.285 1.286 0 .708-.577 1.286-1.285 1.286a1.287 1.287 0 0 1 0-2.571Zm-4.507 2.006h2.051a2.565 2.565 0 0 0 2.456 1.851A2.575 2.575 0 0 0 22.204 12a2.575 2.575 0 0 0-2.571-2.571c-1.223 0-2.245.86-2.505 2.005H15.14a5.787 5.787 0 0 0-.73-2.302l1.95-1.95c.472.582 1.183.96 1.988.96a2.575 2.575 0 0 0 2.571-2.57A2.575 2.575 0 0 0 18.347 3a2.574 2.574 0 0 0-2.571 2.571c0 .117.019.23.034.342l-2.162 2.162c-1.074-1.177-2.604-1.928-4.318-1.928a5.872 5.872 0 0 0-5.865 5.867 5.872 5.872 0 0 0 5.865 5.867c1.722 0 3.257-.759 4.33-1.943l2.15 2.149c-.015.113-.034.223-.034.342A2.574 2.574 0 0 0 18.347 21a2.575 2.575 0 0 0 2.571-2.571 2.575 2.575 0 0 0-2.571-2.572c-.805 0-1.516.38-1.988.96l-1.94-1.94c.37-.653.613-1.38.707-2.157Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
