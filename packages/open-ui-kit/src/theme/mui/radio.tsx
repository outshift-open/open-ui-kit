/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";
import { RadioChecked } from "@/custom-icons";

export const radioComponent = (theme: Theme): Components => {
  return {
    MuiRadio: {
      defaultProps: {
        checkedIcon: <RadioChecked />,
      },
      styleOverrides: {
        root: {
          color: theme.palette.vars.controlIconDefault, // unchecked color
          "&.Mui-disabled": {
            color: theme.palette.vars.controlIconDisabled,
          },
          "&.MuiRadio-sizeSmall": {
            padding: "3px",
            "& svg": {
              height: "18px",
              width: "18px",
            },
          },
        },
      },
    },
  };
};
