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

export const GlobalPoliciesSelected = (props: SvgIconProps) => {
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
          d="M18 12.7744V8.27441L13.5 3.77441H5V19.7744H11.5"
          stroke={theme.palette.primary.main}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 9.77441C8 9.22213 8.44772 8.77441 9 8.77441H14C14.5523 8.77441 15 9.22213 15 9.77441C15 10.3267 14.5523 10.7744 14 10.7744H9C8.44772 10.7744 8 10.3267 8 9.77441Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M8 13.7744C8 13.2221 8.44772 12.7744 9 12.7744H14C14.5523 12.7744 15 13.2221 15 13.7744C15 14.3267 14.5523 14.7744 14 14.7744H9C8.44772 14.7744 8 14.3267 8 13.7744Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M20.84 16.7744H15.1056C15.1056 16.7744 14.7051 18.6601 15.464 20.7173C16.0016 22.1744 17.9728 22.7744 17.9728 22.7744C17.9728 22.7744 19.5855 22.4316 20.4816 20.7173C21.3777 19.003 20.84 16.7744 20.84 16.7744Z"
          stroke={theme.palette.primary.main}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export const GlobalPoliciesUnSelected = (props: SvgIconProps) => {
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
          d="M18 12.7744V8.27441L13.5 3.77441H5V19.7744H11.5"
          stroke={theme.palette.grey[50]}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 9.77441C8 9.22213 8.44772 8.77441 9 8.77441H14C14.5523 8.77441 15 9.22213 15 9.77441C15 10.3267 14.5523 10.7744 14 10.7744H9C8.44772 10.7744 8 10.3267 8 9.77441Z"
          fill={theme.palette.grey[50]}
        />
        <path
          d="M8 13.7744C8 13.2221 8.44772 12.7744 9 12.7744H14C14.5523 12.7744 15 13.2221 15 13.7744C15 14.3267 14.5523 14.7744 14 14.7744H9C8.44772 14.7744 8 14.3267 8 13.7744Z"
          fill={theme.palette.grey[50]}
        />
        <path
          d="M20.84 16.7744H15.1056C15.1056 16.7744 14.7051 18.6601 15.464 20.7173C16.0016 22.1744 17.9728 22.7744 17.9728 22.7744C17.9728 22.7744 19.5855 22.4316 20.4816 20.7173C21.3777 19.003 20.84 16.7744 20.84 16.7744Z"
          stroke={theme.palette.grey[50]}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export const GlobalPoliciesDisabled = (props: SvgIconProps) => {
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
          d="M18 12.7744V8.27441L13.5 3.77441H5V19.7744H11.5"
          stroke={theme.palette.grey[300]}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 9.77441C8 9.22213 8.44772 8.77441 9 8.77441H14C14.5523 8.77441 15 9.22213 15 9.77441C15 10.3267 14.5523 10.7744 14 10.7744H9C8.44772 10.7744 8 10.3267 8 9.77441Z"
          fill={theme.palette.grey[300]}
        />
        <path
          d="M8 13.7744C8 13.2221 8.44772 12.7744 9 12.7744H14C14.5523 12.7744 15 13.2221 15 13.7744C15 14.3267 14.5523 14.7744 14 14.7744H9C8.44772 14.7744 8 14.3267 8 13.7744Z"
          fill={theme.palette.grey[300]}
        />
        <path
          d="M20.84 16.7744H15.1056C15.1056 16.7744 14.7051 18.6601 15.464 20.7173C16.0016 22.1744 17.9728 22.7744 17.9728 22.7744C17.9728 22.7744 19.5855 22.4316 20.4816 20.7173C21.3777 19.003 20.84 16.7744 20.84 16.7744Z"
          stroke={theme.palette.grey[300]}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
