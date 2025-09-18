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

export function AWSServicesSpotInstance(props: SvgIconProps) {
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
          d="M12.482 5.234c-3.53 0-5.627 3.027-5.627 6.643 0 4.171 2.33 6.909 5.627 6.909V21h1.046v-2.244c2.704 0 4.968-1.76 5.188-4.639H15.92c-.171 1.421-1.122 2.405-2.412 2.405V7.468c1.487.247 2.33 1.293 2.51 2.928h2.794c-.56-3.125-2.26-5.162-5.284-5.162V3h-1.046v2.234Zm0 11.292c-2.142-.198-2.85-2.603-2.85-4.662 0-1.975.806-4.07 2.85-4.396v9.058Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
