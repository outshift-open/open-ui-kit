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

import { Box, Stack, Typography, useTheme } from "@mui/material";
import { ChartDataItem, ChartProps } from "@/charts";
import { getBarStyle, styles } from "./styles";

interface HorizontalBarChartProps extends ChartProps {
  handleClick?: (item: ChartDataItem) => void;
}

export const HorizontalBarChart = ({
  data,
  categories,
  handleClick,
}: HorizontalBarChartProps) => {
  const theme = useTheme();

  const chartData = data as ChartDataItem[];
  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <Box sx={styles.container}>
      {categories?.length ? (
        <Box sx={styles.header}>
          {categories?.map((category, i) => (
            <Typography
              key={i}
              variant="caption"
              color={theme.palette.vars.baseTextWeak}
            >
              {category.name}
            </Typography>
          ))}
        </Box>
      ) : undefined}
      <Stack spacing={2} sx={styles.barsContainer}>
        {chartData.map((d, i) => (
          <Stack
            direction="row"
            key={i}
            spacing={1}
            {...(handleClick && {
              onClick: () => handleClick(d),
              sx: styles.barContainer,
            })}
          >
            {d.icon && <d.icon sx={styles.icon} />}
            <Stack flex={1} spacing={0.5}>
              <Box sx={styles.labelsContainer}>
                <Typography variant="caption">{d.name}</Typography>
                <Typography variant="caption">{d.value}</Typography>
              </Box>
              <Box sx={getBarStyle(d.value, maxValue, d.color)} />
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
