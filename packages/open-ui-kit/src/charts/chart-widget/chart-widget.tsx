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

import { Stack, SxProps } from "@mui/material";
import { Widget, IWidgetProps } from "@/components";
import {
  ChartType,
  ChartTypeComponents,
  ConditionalPropsByType,
  ExtendedChartProps,
} from "@/charts";

export type IChartWidgetProps<T extends string> = ExtendedChartProps &
  Omit<IWidgetProps<T>, "bodyElement"> &
  ConditionalPropsByType & {
    sx?: SxProps;
    generalWidgetStyle?: SxProps;
    label: string;
  };

export const ChartWidget = <T extends string>({
  data,
  type,
  label,
  labelTooltip,
  showTooltip = false,
  categories,
  isLoading,
  legend,
  isEmpty = false,
  isHorizontal = false,
  customTooltip,
  titleTooltip,
  sx,
  chartCustomComponent,
  stackStyle,
  legendCustomComponent,
  tooltipProps,
  generalWidgetStyle,
  headerChildren,
  headerLeftChildren,
  onLabelClick,
  dataRoseyUrn,
  ...rest
}: IChartWidgetProps<T>) => {
  const combinedSx = {
    ...(type === ChartType.BAR_GRAPH
      ? { position: "relative" }
      : (sx as SxProps)),
    ...(generalWidgetStyle as SxProps),
  } as SxProps;

  const ChartComponent = ChartTypeComponents[type];
  return (
    <Widget
      dataRoseyUrn={dataRoseyUrn}
      bodyElement={
        <Stack
          {...stackStyle}
          sx={{
            ...(type == ChartType.BAR_GRAPH || type == ChartType.HORIZONTAL_BAR
              ? { ...sx }
              : { height: isHorizontal ? "134px" : "164px", flexShrink: 0 }),
          }}
        >
          <ChartComponent
            data={data}
            categories={categories ?? []}
            showTooltip={showTooltip}
            customTooltip={customTooltip}
            {...rest}
          />
          {chartCustomComponent && chartCustomComponent}
        </Stack>
      }
      label={label}
      onLabelClick={onLabelClick}
      labelTooltip={labelTooltip}
      titleTooltip={titleTooltip}
      sx={combinedSx}
      isLoading={isLoading}
      legend={legend}
      isHorizontal={isHorizontal}
      headerChildren={headerChildren}
      headerLeftChildren={headerLeftChildren}
      isEmpty={isEmpty}
      legendCustomComponent={legendCustomComponent}
      tooltipProps={tooltipProps}
    />
  );
};
