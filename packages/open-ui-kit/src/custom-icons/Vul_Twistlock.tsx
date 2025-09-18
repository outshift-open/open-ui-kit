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

import { SvgIconProps, useTheme, SvgIcon } from "@mui/material";

export function VulTwistLock(props: SvgIconProps) {
  const theme = useTheme();
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <g clipPath="url(#clip0_2949_99142)">
          <path
            d="M18.4247 13.5061V15.924L16.3293 14.7263V12.3009L18.4247 13.5061ZM16.3293 11.8258V9.57546L18.2872 10.7031L16.3293 11.8258ZM16.0793 14.5612L13.979 13.3536V7.8877L11.6061 6.52499V4.10461L18.4247 8.04273V10.4756L16.0693 9.11039L16.0793 14.5612ZM9.22574 16.3815L11.191 17.5192L9.22574 18.6544V16.3815ZM9.09572 13.5811L13.829 16.3165L16.1918 14.9513L18.2922 16.1615L11.4661 20.0996L9.35576 18.8819L11.7186 17.5167L7.00039 14.7988L9.09572 13.5811ZM6.87537 6.84254L8.83568 7.97521L6.87537 9.09789V6.84254ZM11.3261 9.26042L6.60283 11.9758V14.7013L6.46531 14.7813L4.5 15.924V8.04022L6.61033 6.82253V9.57296L11.3286 6.84754L11.3261 9.26042ZM11.3261 6.52499L9.22574 7.74268V5.3173L11.3361 4.09961L11.3261 6.52499ZM6.87537 12.1434L8.9707 10.9332V13.3536L6.87537 14.5637V12.1434ZM4.63752 16.1615L6.73285 14.9513L8.84318 16.169L6.74285 17.3792L4.63752 16.1615ZM13.5689 10.7056L11.4736 11.9083L9.37576 10.6981L11.4711 9.48795L13.5689 10.7056ZM11.3186 12.1359V14.5637L9.22324 13.3536V10.9282L11.3186 12.1359ZM15.9193 14.7913L13.819 16.009L11.7236 14.7988L13.824 13.5811L15.9193 14.7913ZM11.5961 12.1484L13.6964 10.9307V13.3511L11.5961 14.5687V12.1484ZM11.5961 9.25791V6.83254L13.6964 8.04273V10.4756L11.5961 9.25791Z"
            fill={props?.fill || theme.palette.grey[50]}
          />
        </g>
        <defs>
          <clipPath id="clip0_2949_99142">
            <rect
              width="13.9247"
              height="16"
              fill={props?.fill || theme.palette.grey[50]}
              transform="translate(4.5 4.09961)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}
