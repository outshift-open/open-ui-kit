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
