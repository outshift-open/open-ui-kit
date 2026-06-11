/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material/styles";
import { Card } from "@/components/card";
import type { IWidgetProps } from "../types";
import { styles } from "../styles/styles";
import { WidgetHeadline } from "./widget-headline";
import { WidgetBody } from "./widget-body";

export const Widget = ({
  sx,
  label,
  headerChildren,
  headerLeftChildren,
  labelTooltip,
  titleTooltip,
  bodyElement,
  isLoading,
  isHorizontal = false,
  isEmpty = false,
  legendCustomComponent,
  tooltipProps,
  onLabelClick,
  dataRoseyUrn,
}: IWidgetProps) => {
  const theme = useTheme();
  return (
    <Card
      data-rosey-urn={dataRoseyUrn}
      sx={[
        isHorizontal ? styles(theme).horizontalCard : styles(theme).card,
        { overflow: "visible" },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {label && (
        <WidgetHeadline
          label={label}
          headerChildren={headerChildren}
          headerLeftChildren={headerLeftChildren}
          labelTooltip={labelTooltip}
          titleTooltip={titleTooltip}
          tooltipProps={tooltipProps}
          onLabelClick={onLabelClick}
        />
      )}
      <WidgetBody
        bodyElement={bodyElement}
        isLoading={isLoading}
        isHorizontal={isHorizontal}
        isEmpty={isEmpty}
        legendCustomComponent={legendCustomComponent}
      />
    </Card>
  );
};
