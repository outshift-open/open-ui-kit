/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CardContent, Skeleton, Stack, useTheme } from "@mui/material";
import { ILegendProps } from "@/components";
import { WidgetBodyStateful } from "./widget-body-stateful";
import { styles } from "../styles/styles";

export interface IWidgetBodyProps<T extends string> {
  isLoading?: boolean;
  legend?: ILegendProps<T>;
  bodyElement: JSX.Element;
  isHorizontal?: boolean;
  isEmpty: boolean;
  legendCustomComponent?: React.ReactNode;
}

export const WidgetBody = <T extends string>({
  isLoading,
  legend,
  bodyElement,
  isEmpty,
  isHorizontal = false,
  legendCustomComponent,
}: IWidgetBodyProps<T>) => {
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
          legend={legend}
          bodyElement={bodyElement}
          legendCustomComponent={legendCustomComponent}
          isHorizontal={isHorizontal}
          isEmpty={isEmpty}
        />
      )}
    </CardContent>
  );
};
