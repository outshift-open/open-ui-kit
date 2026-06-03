/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack, SxProps } from "@mui/material";
import { Widget, IWidgetProps } from "@/components/widget";
import { ChartTypeComponents } from "../common/chart-type-components";
import {
  ChartType,
  ConditionalPropsByType,
  ExtendedChartProps,
} from "../common/types";

export type IChartWidgetProps = ExtendedChartProps &
  Omit<IWidgetProps, "bodyElement"> &
  ConditionalPropsByType & {
    sx?: SxProps;
    generalWidgetStyle?: SxProps;
    label: string;
  };

export const ChartWidget = ({
  data,
  type,
  label,
  labelTooltip,
  showTooltip = false,
  categories,
  isLoading,
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
}: IChartWidgetProps) => {
  const combinedSx = [
    type === ChartType.BAR_GRAPH ? { position: "relative" } : {},
    generalWidgetStyle ?? {},
    ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
  ] as SxProps;

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
      isHorizontal={isHorizontal}
      headerChildren={headerChildren}
      headerLeftChildren={headerLeftChildren}
      isEmpty={isEmpty}
      legendCustomComponent={legendCustomComponent}
      tooltipProps={tooltipProps}
    />
  );
};
