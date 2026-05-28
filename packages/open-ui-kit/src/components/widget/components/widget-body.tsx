/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CardContent, Skeleton, Stack, useTheme } from "@mui/material";
import { WidgetBodyStateful } from "./widget-body-stateful";
import { styles } from "../styles/styles";

export interface IWidgetBodyProps {
  isLoading?: boolean;
  bodyElement: JSX.Element;
  isHorizontal?: boolean;
  isEmpty: boolean;
  legendCustomComponent?: React.ReactNode;
}

export const WidgetBody = ({
  isLoading,
  bodyElement,
  isEmpty,
  isHorizontal = false,
  legendCustomComponent,
}: IWidgetBodyProps) => {
  const theme = useTheme();

  return (
    <CardContent sx={styles(theme).cardContent}>
      {isLoading ? (
        <Stack
          sx={styles(theme).stack}
          gap={1}
          spacing={1}
          flexDirection={isHorizontal ? "row" : "column"}
        >
          <Skeleton
            variant="rounded"
            height={isHorizontal ? "156px" : 150}
            width={isHorizontal ? "156px" : "auto"}
            sx={styles(theme).chartSkeleton}
          />
          <Stack width={isHorizontal ? "156px" : "auto"}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Stack>
        </Stack>
      ) : (
        <WidgetBodyStateful
          bodyElement={bodyElement}
          legendCustomComponent={legendCustomComponent}
          isHorizontal={isHorizontal}
          isEmpty={isEmpty}
        />
      )}
    </CardContent>
  );
};
