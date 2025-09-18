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

export function VulPublic(props: SvgIconProps) {
  const theme = useTheme();
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          d="M18.2334 17.39C17.9734 16.59 17.2234 16 16.3334 16H15.3334V13C15.3334 12.7348 15.228 12.4804 15.0405 12.2929C14.8529 12.1054 14.5986 12 14.3334 12H8.33337V10H10.3334C10.5986 10 10.8529 9.89464 11.0405 9.70711C11.228 9.51957 11.3334 9.26522 11.3334 9V7H13.3334C13.8638 7 14.3725 6.78929 14.7476 6.41421C15.1227 6.03914 15.3334 5.53043 15.3334 5V4.59C18.2634 5.77 20.3334 8.64 20.3334 12C20.3334 14.08 19.5334 15.97 18.2334 17.39ZM11.3334 19.93C7.38337 19.44 4.33337 16.08 4.33337 12C4.33337 11.38 4.41337 10.78 4.54337 10.21L9.33337 15V16C9.33337 16.5304 9.54409 17.0391 9.91916 17.4142C10.2942 17.7893 10.8029 18 11.3334 18M12.3334 2C11.0202 2 9.7198 2.25866 8.50654 2.7612C7.29328 3.26375 6.19089 4.00035 5.26231 4.92893C3.38694 6.8043 2.33337 9.34784 2.33337 12C2.33337 14.6522 3.38694 17.1957 5.26231 19.0711C6.19089 19.9997 7.29328 20.7362 8.50654 21.2388C9.7198 21.7413 11.0202 22 12.3334 22C14.9855 22 17.5291 20.9464 19.4044 19.0711C21.2798 17.1957 22.3334 14.6522 22.3334 12C22.3334 10.6868 22.0747 9.38642 21.5722 8.17317C21.0696 6.95991 20.333 5.85752 19.4044 4.92893C18.4759 4.00035 17.3735 3.26375 16.1602 2.7612C14.947 2.25866 13.6466 2 12.3334 2Z"
          fill={props?.fill || theme.palette.grey[50]}
        />
      </svg>
    </SvgIcon>
  );
}
