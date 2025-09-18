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

import { useState, useMemo, useCallback } from "react";
import {
  Bar,
  Cell,
  XAxis,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Tooltip,
  TooltipProps,
} from "recharts";
import { ChartDataItem, ChartProps } from "@/charts";
import { Stack, Typography, useTheme } from "@mui/material";
import { styles } from "./styles";

const BAR_SIZE_PX = 8;
const SPACE_BETWEEN_BARS_PX = 29;
const EMPTY_BAR: ChartDataItem = {
  name: "EmptyBar",
  value: 0,
  color: "transparent",
};

const DefaultTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  const theme = useTheme();

  if (!active || !payload || payload[0].value === EMPTY_BAR.value) {
    return null;
  }

  return (
    <Stack sx={styles(theme).tooltip}>
      <Typography variant="caption" sx={styles(theme).tooltipTypography}>
        {payload[0].value} {payload[0].payload.name}
      </Typography>
    </Stack>
  );
};

export interface BarChartProps extends ChartProps {
  handleClick?: (item: ChartDataItem) => void;
}

export const BarChart = ({
  data,
  handleClick,
  showTooltip,
  customTooltip,
}: BarChartProps) => {
  const [maxBars, setMaxBars] = useState(0);

  const theme = useTheme();

  const handleResize = useCallback((width: number) => {
    const maxBars =
      1 + Math.round(width / (BAR_SIZE_PX + SPACE_BETWEEN_BARS_PX));
    setMaxBars(maxBars);
  }, []);

  // adjustedData is used to "push" bars and align them to the beginning of the x-axis.
  const adjustedData = useMemo((): ChartDataItem[] => {
    if (maxBars <= data.length) {
      return data as ChartDataItem[];
    }
    const emptyBars = new Array(maxBars - data.length).fill(EMPTY_BAR);
    return [...data, ...emptyBars];
  }, [maxBars, data]);

  return (
    <ResponsiveContainer width="100%" height="100%" onResize={handleResize}>
      <RechartsBarChart data={adjustedData} barSize={BAR_SIZE_PX}>
        <XAxis hide scale="point" />
        <Bar
          dataKey="value"
          radius={4}
          minPointSize={10}
          background={{
            fill: theme.palette.vars.baseBackgroundMedium,
            radius: 4,
          }}
        >
          {adjustedData.map((dataItem, i) => (
            <Cell
              key={`${dataItem.name}-${i}`}
              fill={dataItem.color}
              {...(dataItem.name === EMPTY_BAR.name && {
                display: "none",
              })}
              {...(handleClick && {
                cursor: "pointer",
                onClick: () => handleClick(dataItem),
              })}
            />
          ))}
        </Bar>
        {showTooltip && (
          <Tooltip
            allowEscapeViewBox={{ x: true, y: true }}
            content={customTooltip ?? DefaultTooltip}
          />
        )}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};
