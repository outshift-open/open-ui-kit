/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack, Typography, useTheme } from "@mui/material";
import { styles } from "../styles/styles";

export interface IGeneralWidgetBodyStatefulProps {
  bodyElement: JSX.Element;
  isHorizontal?: boolean;
  isEmpty: boolean;
  legendCustomComponent?: React.ReactNode;
}

export const WidgetBodyStateful = ({
  bodyElement,
  isEmpty,
  isHorizontal = false,
  legendCustomComponent,
}: IGeneralWidgetBodyStatefulProps) => {
  const theme = useTheme();

  return (
    <>
      {isEmpty ? (
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            ...styles(theme).stack,
            height: "100%",
          }}
          direction={isHorizontal ? "row" : "column"}
        >
          <Typography variant={"subtitle2"}>No data</Typography>
        </Stack>
      ) : (
        <Stack
          sx={styles(theme).stack}
          direction={isHorizontal ? "row" : "column"}
        >
          <Stack sx={styles(theme).stack} spacing={1}>
            {bodyElement}
          </Stack>
          {legendCustomComponent && legendCustomComponent}
        </Stack>
      )}
    </>
  );
};
