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

import {
  Box,
  BoxProps,
  CircularProgress,
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material";

export interface SpinnerProps extends CircularProgressProps {
  boxProps?: BoxProps;
}

export const Spinner = ({ boxProps, ...props }: SpinnerProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: props?.size,
        height: props?.size,
        ...boxProps?.sx,
      }}
      {...boxProps}
    >
      <CircularProgress
        sx={{
          ...props.sx,
          opacity: 0.2,
        }}
        size={40}
        {...props}
        value={100}
        variant="determinate"
      />
      <CircularProgress
        sx={{
          ...props.sx,
          animationDuration: "1s",
          position: "absolute",
          left: 0,
          top: typeof props?.size === "number" && props.size < 17 ? 2 : 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
            strokeDasharray: "31.4, 94.2",
          },
        }}
        size={40}
        {...props}
        disableShrink
        variant="indeterminate"
      />
    </Box>
  );
};
