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
import React from "react";
import { ArrowForwardIcon, InfoCircleOutline } from "@/custom-icons";
import { Tooltip, TooltipProps, TooltipSize } from "@/components";
import { styles } from "../styles/styles";

export interface IWidgetHeadlineTitleProps {
  label?: string | JSX.Element;
  headerChildren?: JSX.Element;
  headerLeftChildren?: JSX.Element;
  labelTooltip?: React.ReactNode;
  titleTooltip?: React.ReactNode;
  tooltipProps?: Partial<TooltipProps>;
  onLabelClick?: () => void;
}

export const WidgetHeadlineTitle = ({
  label,
  headerChildren,
  headerLeftChildren,
  labelTooltip,
  tooltipProps,
  onLabelClick,
  titleTooltip,
}: IWidgetHeadlineTitleProps) => {
  const theme = useTheme();

  return (
    <Stack sx={styles(theme).titleStack} flexDirection="row">
      {headerLeftChildren && (
        <Stack
          height={20}
          flexDirection="row"
          alignItems="center"
          marginRight={1}
        >
          {headerLeftChildren}
        </Stack>
      )}
      <Stack
        flexDirection="row"
        gap="4px"
        alignItems="center"
        height={19}
        className="title-stack"
      >
        <Tooltip
          title={titleTooltip}
          size={TooltipSize.Large}
          slotProps={{
            tooltip: {
              style: styles(theme).tooltip,
            },
          }}
        >
          <Stack
            flexDirection="row"
            gap="4px"
            alignItems="center"
            onClick={onLabelClick}
            sx={{
              color: (theme) => theme.palette.vars.baseTextDefault,
              ...(onLabelClick && {
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: theme.palette.vars.interactiveTextInHover,
                },
              }),
            }}
          >
            <Typography variant="button" whiteSpace="nowrap">
              {label}
            </Typography>
            {onLabelClick && (
              <ArrowForwardIcon fill={theme.palette.vars.controlIconDefault} />
            )}
          </Stack>
        </Tooltip>
        {labelTooltip && (
          <Tooltip
            {...tooltipProps}
            title={labelTooltip}
            size={TooltipSize.Large}
            slotProps={{
              tooltip: {
                style: styles(theme).tooltip,
              },
            }}
          >
            <Box display="flex">
              <InfoCircleOutline
                sx={{
                  color: theme.palette.vars.baseTextDefault,
                  "&:hover": { color: "white" },
                  width: "16px",
                  height: "16px",
                }}
              />
            </Box>
          </Tooltip>
        )}
      </Stack>
      {headerChildren && (
        <Stack height={19} flexDirection="row" alignItems="center" width="100%">
          {headerChildren}
        </Stack>
      )}
    </Stack>
  );
};
