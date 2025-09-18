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

export function OpenInNewTab(props: SvgIconProps) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.89951 3C4.29788 3 2.99951 4.29838 2.99951 5.9V14.3118C2.99951 14.8089 3.40246 15.2118 3.89951 15.2118C4.39657 15.2118 4.79951 14.8089 4.79951 14.3118V5.9C4.79951 5.29249 5.292 4.8 5.89951 4.8H11.1001V6.76C11.1001 8.36163 12.3985 9.66 14.0001 9.66H19.1995V18.1C19.1995 18.7075 18.707 19.2 18.0995 19.2H9.8627C9.36565 19.2 8.9627 19.6029 8.9627 20.1C8.9627 20.5971 9.36565 21 9.8627 21H18.0995C19.7011 21 20.9995 19.7016 20.9995 18.1L21.0001 5.9C21.0001 4.29837 19.7017 3 18.1001 3H5.89951ZM18.0995 4.8C18.707 4.8 19.1995 5.29249 19.1995 5.9V7.86H14.0001C13.3926 7.86 12.9001 7.36751 12.9001 6.76V4.8H18.0995Z"
          fill={props.fill ?? "currentColor"}
        />
        <path
          d="M7.04932 11.9996C7.04932 11.5026 7.45226 11.0996 7.94932 11.0996H11.9993C12.4964 11.0996 12.8993 11.5026 12.8993 11.9996V16.0496C12.8993 16.5467 12.4964 16.9496 11.9993 16.9496C11.5023 16.9496 11.0993 16.5467 11.0993 16.0496V14.1704L5.43604 19.8337C5.08457 20.1851 4.51472 20.1851 4.16325 19.8337C3.81178 19.4822 3.81178 18.9123 4.16325 18.5609L9.82451 12.8996H7.94932C7.45226 12.8996 7.04932 12.4967 7.04932 11.9996Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
