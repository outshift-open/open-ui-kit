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

import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

export const ReportsUnselected = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7.94591 5.24322C8.49322 5.24322 8.9369 4.79954 8.9369 4.25223V3.98198H15.6435L18.6666 7.00508V16.4144L18.3965 16.4144C17.8491 16.4144 17.4055 16.8581 17.4055 17.4054C17.4055 17.9527 17.8491 18.3964 18.3965 18.3964H18.7567C19.8016 18.3964 20.6486 17.5494 20.6486 16.5045V6.96776C20.6486 6.466 20.4493 5.98479 20.0945 5.62999L17.0186 2.55412C16.6638 2.19932 16.1826 2 15.6809 2H8.84681C7.80195 2 6.95492 2.84703 6.95492 3.89189V4.25223C6.95492 4.79954 7.3986 5.24322 7.94591 5.24322Z"
          fill={theme.palette.grey[50]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.3333 7.58559V20.018H15.063V10.6087L12.0399 7.58559H5.3333ZM3.35132 7.4955C3.35132 6.45063 4.19835 5.6036 5.24321 5.6036H12.0773C12.579 5.6036 13.0602 5.80293 13.415 6.15773L16.4909 9.23359C16.8457 9.58839 17.045 10.0696 17.045 10.5714V20.1081C17.045 21.153 16.198 22 15.1531 22H5.24321C4.19835 22 3.35132 21.153 3.35132 20.1081V7.4955Z"
          fill={theme.palette.grey[50]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.95492 13.8018C6.95492 13.2545 7.3986 12.8108 7.94591 12.8108H12.4504C12.9977 12.8108 13.4414 13.2545 13.4414 13.8018C13.4414 14.3491 12.9977 14.7928 12.4504 14.7928H7.94591C7.3986 14.7928 6.95492 14.3491 6.95492 13.8018Z"
          fill={theme.palette.grey[50]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.95492 17.4054C6.95492 16.8581 7.3986 16.4144 7.94591 16.4144H12.4504C12.9977 16.4144 13.4414 16.8581 13.4414 17.4054C13.4414 17.9527 12.9977 18.3964 12.4504 18.3964H7.94591C7.3986 18.3964 6.95492 17.9527 6.95492 17.4054Z"
          fill={theme.palette.grey[50]}
        />
      </svg>
    </SvgIcon>
  );
};

export const ReportsSelected = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8.81818 2C7.81403 2 7 2.81403 7 3.81818V5.63636H8.81818V3.81818H15.7144L18.8182 6.92201V16.5455H17V18.3636H18.8182C19.8223 18.3636 20.6364 17.5496 20.6364 16.5455V6.92201C20.6364 6.4398 20.4448 5.97734 20.1038 5.63636L17 2.53253C16.659 2.19156 16.1966 2 15.7144 2H8.81818Z"
          fill={theme.palette.primary[100]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.36365 7.45466C3.36365 6.4505 4.17768 5.63647 5.18183 5.63647H12.078C12.5602 5.63647 13.0227 5.82803 13.3636 6.16901L16.4675 9.27284C16.8085 9.61381 17 10.0763 17 10.5585V20.1819C17 21.1861 16.186 22.0001 15.1818 22.0001H5.18183C4.17768 22.0001 3.36365 21.1861 3.36365 20.1819V7.45466ZM12.078 7.45466H5.18183V20.1819H15.1818V10.5585L12.078 7.45466Z"
          fill={theme.palette.primary.main}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.00001 13.8183C7.00001 13.3162 7.40702 12.9092 7.9091 12.9092H12.4546C12.9566 12.9092 13.3636 13.3162 13.3636 13.8183C13.3636 14.3204 12.9566 14.7274 12.4546 14.7274H7.9091C7.40702 14.7274 7.00001 14.3204 7.00001 13.8183Z"
          fill={theme.palette.primary[100]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.00001 17.4547C7.00001 16.9526 7.40702 16.5456 7.9091 16.5456H12.4546C12.9566 16.5456 13.3636 16.9526 13.3636 17.4547C13.3636 17.9567 12.9566 18.3637 12.4546 18.3637H7.9091C7.40702 18.3637 7.00001 17.9567 7.00001 17.4547Z"
          fill={theme.palette.primary[100]}
        />
      </svg>
    </SvgIcon>
  );
};

export const ReportsDisabled = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8.81818 2C7.81403 2 7 2.81403 7 3.81818V5.63636H8.81818V3.81818H15.7144L18.8182 6.92201V16.5455H17V18.3636H18.8182C19.8223 18.3636 20.6364 17.5496 20.6364 16.5455V6.92201C20.6364 6.4398 20.4448 5.97734 20.1038 5.63636L17 2.53253C16.659 2.19156 16.1966 2 15.7144 2H8.81818Z"
          fill={theme.palette.grey[50]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.36365 7.45466C3.36365 6.4505 4.17768 5.63647 5.18183 5.63647H12.078C12.5602 5.63647 13.0227 5.82803 13.3636 6.16901L16.4675 9.27284C16.8085 9.61381 17 10.0763 17 10.5585V20.1819C17 21.1861 16.186 22.0001 15.1818 22.0001H5.18183C4.17768 22.0001 3.36365 21.1861 3.36365 20.1819V7.45466ZM12.078 7.45466H5.18183V20.1819H15.1818V10.5585L12.078 7.45466Z"
          fill={theme.palette.grey[300]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.00001 13.8183C7.00001 13.3162 7.40702 12.9092 7.9091 12.9092H12.4546C12.9566 12.9092 13.3636 13.3162 13.3636 13.8183C13.3636 14.3204 12.9566 14.7274 12.4546 14.7274H7.9091C7.40702 14.7274 7.00001 14.3204 7.00001 13.8183Z"
          fill={theme.palette.grey[50]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.00001 17.4547C7.00001 16.9526 7.40702 16.5456 7.9091 16.5456H12.4546C12.9566 16.5456 13.3636 16.9526 13.3636 17.4547C13.3636 17.9567 12.9566 18.3637 12.4546 18.3637H7.9091C7.40702 18.3637 7.00001 17.9567 7.00001 17.4547Z"
          fill={theme.palette.grey[50]}
        />
      </svg>
    </SvgIcon>
  );
};
