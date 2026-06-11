/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { Widget, IWidgetProps } from "@/components/widget";
import { ChartTypeComponents } from "../common/chart-type-components";
import { ConditionalPropsByType, ExtendedChartProps } from "../common/types";
import {
  getChartWidgetBodyStyles,
  getChartWidgetContainerStyles,
  toSxArray,
} from "./styles";

export type IChartWidgetProps = ExtendedChartProps &
  Omit<IWidgetProps, "bodyElement"> &
  ConditionalPropsByType & {
    /** Style overrides for the outer widget card. Consumer values are applied after chart-widget defaults. */
    sx?: SxProps<Theme>;
    /** Shared style overrides for the outer widget card when composing several chart widgets. */
    generalWidgetStyle?: SxProps<Theme>;
    /** Headline text rendered in the widget header. */
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
    getChartWidgetContainerStyles(type),
    generalWidgetStyle ?? {},
    ...toSxArray(sx),
  ] as SxProps<Theme>;

  const ChartComponent = ChartTypeComponents[type];
  const { sx: stackSx, ...stackProps } = stackStyle ?? {};

  return (
    <Widget
      dataRoseyUrn={dataRoseyUrn}
      bodyElement={
        <Stack
          {...stackProps}
          sx={[
            getChartWidgetBodyStyles(type, isHorizontal),
            ...toSxArray(stackSx),
          ]}
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
