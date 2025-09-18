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

export function DatabaseAccess(props: SvgIconProps) {
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
          d="M6.017 9.928c1.525.761 3.516 1.142 5.975 1.142 2.466 0 4.458-.38 5.983-1.142 1.525-.761 2.292-1.624 2.292-2.588 0-.98-.767-1.852-2.292-2.604-1.525-.753-3.525-1.133-5.983-1.133-2.459 0-4.45.38-5.975 1.133-1.517.76-2.284 1.623-2.284 2.604 0 .964.767 1.827 2.284 2.588ZM15.108 14.055c.017-.372.1-.719.25-1.057-.216.042-.441.076-.666.11-.959.143-1.859.211-2.692.211a18.27 18.27 0 0 1-2.683-.211 14.799 14.799 0 0 1-2.692-.651c-.833-.296-1.525-.66-2.067-1.1-.55-.44-.825-.947-.825-1.539v2.41c0 .584.275 1.1.825 1.54.55.44 1.242.811 2.067 1.099.833.296 1.733.507 2.692.65.966.145 1.858.212 2.683.212.833 0 1.733-.067 2.692-.211l.625-.102a3.61 3.61 0 0 1-.209-1.361ZM14.033 17.852c-.716.085-1.391.127-2.033.127-.825 0-1.717-.068-2.683-.212a14.79 14.79 0 0 1-2.692-.65c-.833-.297-1.525-.66-2.067-1.1-.558-.457-.825-.964-.825-1.556v2.427c0 .583.275 1.1.825 1.54.55.439 1.242.802 2.067 1.098.833.297 1.733.516 2.692.652.966.143 1.858.211 2.683.211.167 0 .342 0 .517-.008l-.05-.77 1.566-1.759Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M20.125 15.738a1.55 1.55 0 0 1-1.142.541 1.634 1.634 0 0 1-1.208-.457 1.707 1.707 0 0 1-.575-1.175 1.576 1.576 0 0 1 .417-1.21 1.55 1.55 0 0 1 1.141-.54c.459-.018.859.135 1.209.456.35.321.541.71.575 1.175.025.466-.109.871-.417 1.21Zm1.133 1.048c.584-.65.842-1.42.784-2.3a3.212 3.212 0 0 0-1.084-2.24c-.666-.61-1.433-.897-2.3-.872-.875.034-1.6.372-2.175 1.023-.491.55-.75 1.15-.775 1.81-.033.66.125 1.277.475 1.869l-2.933 3.273.083 1.404 2.55.067.034-1.742 1.566-.05-.091-1.286.266-.296c.609.33 1.242.44 1.9.313.675-.127 1.234-.457 1.7-.973Z"
        />
      </svg>
    </SvgIcon>
  );
}
