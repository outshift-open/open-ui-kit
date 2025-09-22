/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CardHeader, useTheme } from "@mui/material";
import {
  IWidgetHeadlineTitleProps,
  WidgetHeadlineTitle,
} from "./widget-headline-title";
import { styles } from "../styles/styles";

export const WidgetHeadline = ({
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
    <CardHeader
      sx={styles(theme).cardHeaderWrapper}
      title={
        <WidgetHeadlineTitle
          label={label}
          headerChildren={headerChildren}
          headerLeftChildren={headerLeftChildren}
          labelTooltip={labelTooltip}
          tooltipProps={tooltipProps}
          onLabelClick={onLabelClick}
          titleTooltip={titleTooltip}
        />
      }
    />
  );
};
