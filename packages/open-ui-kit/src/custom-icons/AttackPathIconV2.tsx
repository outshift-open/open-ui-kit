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
import { grey50 } from "../theme/dark/dark-color-palette";

export function AttackPathIconV2(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Attack Path V2">
          <path
            id="Vector"
            d="M12.605 19.005C12.605 17.925 11.875 16.985 10.855 16.705L10.855 15.875C10.855 14.185 12.225 12.815 13.895 12.815L19.105 12.815L17.315 14.375C17.065 14.595 17.035 15.005 17.255 15.255C17.365 15.385 17.515 15.455 17.675 15.465C17.845 15.475 18.005 15.425 18.125 15.315L21.185 12.645L21.295 12.515L21.385 12.175L21.325 11.925L21.145 12.015L21.285 11.865L21.115 11.975L21.255 11.825L18.135 9.075C18.015 8.965 17.845 8.915 17.685 8.925C17.515 8.93501 17.365 9.015 17.255 9.135C17.045 9.385 17.065 9.79501 17.315 10.015L19.105 11.575L13.895 11.575C12.215 11.575 10.855 10.205 10.855 8.515L10.855 7.685C11.875 7.405 12.605 6.465 12.605 5.385C12.605 4.075 11.545 3.005 10.235 3.005C8.925 3.005 7.865 4.075 7.865 5.385C7.865 6.465 8.595 7.405 9.615 7.685L9.615 8.515C9.615 9.685 10.075 10.765 10.885 11.575L7.655 11.575C7.375 10.545 6.435 9.815 5.365 9.815C4.055 9.815 2.995 10.885 2.995 12.195C2.995 13.505 4.065 14.575 5.365 14.575C6.445 14.575 7.375 13.845 7.655 12.815L10.885 12.815C10.075 13.625 9.615 14.705 9.615 15.875L9.615 16.705C8.585 16.985 7.865 17.925 7.865 19.005C7.865 20.315 8.935 21.385 10.235 21.385C11.535 21.385 12.605 20.315 12.605 19.005ZM10.235 20.145C9.615 20.145 9.105 19.635 9.105 19.005C9.105 18.375 9.615 17.865 10.235 17.865C10.855 17.865 11.365 18.375 11.365 19.005C11.365 19.635 10.855 20.145 10.235 20.145ZM5.365 11.045C5.985 11.045 6.495 11.555 6.495 12.185C6.495 12.815 5.985 13.325 5.365 13.325C4.745 13.325 4.235 12.815 4.235 12.185C4.235 11.555 4.745 11.045 5.365 11.045ZM10.235 6.505C9.615 6.505 9.105 5.995 9.105 5.365C9.105 4.735 9.615 4.225 10.235 4.225C10.855 4.225 11.365 4.735 11.365 5.365C11.365 5.995 10.855 6.505 10.235 6.505Z"
            fill={props.fill ?? grey50}
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
