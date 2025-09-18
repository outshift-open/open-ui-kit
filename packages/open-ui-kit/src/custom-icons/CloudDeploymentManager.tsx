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

export function CloudDeploymentManager(props: SvgIconProps) {
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
          d="M14.0469 18.248H10.0469V21.248H9.04688C8.35687 21.248 8.04688 21.558 8.04688 22.248H16.0469C16.0469 21.558 15.7369 21.248 15.0469 21.248H14.0469V18.248Z"
          fill={props.fill ?? "currentColor"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.04688 5.04989C2.04688 4.05368 2.8273 3.24609 3.78999 3.24609H20.3038C21.2665 3.24609 22.0469 4.05368 22.0469 5.04989V16.4423C22.0469 17.4385 21.2665 18.2461 20.3038 18.2461H3.78999C2.8273 18.2461 2.04688 17.4385 2.04688 16.4423V5.04989ZM3.78999 4.95495C3.73933 4.95495 3.69825 4.99746 3.69825 5.04989V16.4423C3.69825 16.4947 3.73933 16.5372 3.78999 16.5372H20.3038C20.3544 16.5372 20.3955 16.4947 20.3955 16.4423V5.04989C20.3955 4.99746 20.3544 4.95495 20.3038 4.95495H3.78999Z"
          fill={props.fill ?? "currentColor"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.4297 7.24609L18.8454 11.9787C19.1208 12.2739 19.1129 12.7442 18.8276 13.0292C18.5424 13.3142 18.0878 13.306 17.8124 13.0108L14.4297 9.3853L11.397 12.6357L9.66403 10.7783L6.28132 14.4038C6.0059 14.699 5.55139 14.7072 5.26614 14.4222C4.98089 14.1372 4.97292 13.6669 5.24833 13.3717L9.66403 8.63911L11.397 10.4965L14.4297 7.24609Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
