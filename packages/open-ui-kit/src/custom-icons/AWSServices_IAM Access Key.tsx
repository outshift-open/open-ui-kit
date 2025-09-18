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

export function AWSServicesIAMAccessKey(props: SvgIconProps) {
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
          d="M14.575 7.622a1.774 1.774 0 1 0-3.548 0 1.774 1.774 0 0 0 3.548 0Zm-.94 0a.799.799 0 1 1-1.598 0 .799.799 0 0 1 1.598 0Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M15.702 4.02a4.692 4.692 0 0 0-4.028-.888 4.587 4.587 0 0 0-3.37 3.55 4.649 4.649 0 0 0 2.794 5.322v.737l-.95.931a.47.47 0 0 0 0 .665l.95.95v.328l-.95.95a.479.479 0 0 0 0 .673l.95.95v.887a.497.497 0 0 0 .115.31l1.269 1.446a.47.47 0 0 0 .355.169.497.497 0 0 0 .31-.115l1.269-1.091a.488.488 0 0 0 .16-.355v-7.453a4.693 4.693 0 0 0 2.9-4.32 4.622 4.622 0 0 0-1.774-3.646Zm-3.797 13.635-.754-.754.754-.754a.462.462 0 0 0 .142-.363v-.728a.488.488 0 0 0-.142-.337l-.754-.71.754-.745c.09-.09.14-.21.142-.337v-1.269a.47.47 0 0 0-.337-.452 3.726 3.726 0 0 1-2.484-4.294 3.629 3.629 0 0 1 2.661-2.786 3.726 3.726 0 0 1 3.22.674 3.656 3.656 0 0 1 1.411 2.901 3.726 3.726 0 0 1-2.564 3.549.479.479 0 0 0-.328.453v7.567l-.745.639-.887-.958v-.887a.461.461 0 0 0-.089-.409Z"
        />
      </svg>
    </SvgIcon>
  );
}
