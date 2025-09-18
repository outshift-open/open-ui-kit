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

import { useTheme } from "@mui/material";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";
import { Stack, Typography } from "@mui/material";
import { donutLabel, styles } from "./styles";
import { ChartDataItem, ChartProps } from "@/charts";

const formatBigNum = (value: number) =>
  Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value);

export interface DonutProps extends ChartProps {
  handleClick?: (sliceData: ChartDataItem) => void;
}

const getTotalValues = (data: ChartDataItem[]) => {
  const total = data.map((v) => v.value).reduce((a, b) => a + b, 0);
  return total > 999999 ? formatBigNum(total) : total;
};

const DefaultTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  const theme = useTheme();

  if (!active || !payload) {
    return null;
  }

  return (
    <Stack sx={styles(theme).tooltip}>
      <Typography variant="caption" sx={styles(theme).tooltipTypography}>
        {payload[0].value} {payload[0].name}
      </Typography>
    </Stack>
  );
};

/**
 * A donut chart typically shows the proportions of categorical data where the size of each piece of the donut communicates the proportion of each category.
 */
export const DonutChart = ({
  data,
  showTooltip = true,
  customTooltip,
  handleClick,
}: DonutProps): JSX.Element => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={132} height={132}>
        <Pie
          onClick={handleClick}
          strokeWidth={0}
          data={data}
          innerRadius={57}
          outerRadius={66}
          paddingAngle={3}
          dataKey="value"
          startAngle={450}
          endAngle={90}
          minAngle={10}
        >
          {(data as ChartDataItem[]).map(({ color }, index) => (
            <Cell
              key={`cell-${index}`}
              fill={color}
              cursor={handleClick ? "pointer" : "default"}
            />
          ))}
        </Pie>
        <text
          style={donutLabel(theme)}
          textAnchor="middle"
          dominantBaseline="middle"
          x={"50%"}
          y={"50%"}
          fill={theme.palette.vars.baseTextDefault}
        >
          {getTotalValues(data as ChartDataItem[])}
        </text>
        {showTooltip && (
          <Tooltip
            allowEscapeViewBox={{ x: true, y: true }}
            content={customTooltip ?? DefaultTooltip}
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};
