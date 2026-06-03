/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { TooltipProps } from "@/components/tooltip";
import { Card, SxProps, useTheme } from "@mui/material";
import { styles } from "../styles/styles";
import { WidgetHeadline } from "./widget-headline";
import { WidgetBody } from "./widget-body";

export interface IWidgetProps {
  bodyElement: JSX.Element;
  sx?: SxProps;
  label?: string | JSX.Element;
  headerChildren?: JSX.Element;
  headerLeftChildren?: JSX.Element;
  labelTooltip?: React.ReactNode;
  titleTooltip?: React.ReactNode;
  isLoading?: boolean;
  isHorizontal?: boolean;
  chartCustomComponent?: React.ReactNode;
  stackStyle?: Record<string, string | number>;
  legendCustomComponent?: React.ReactNode;
  tooltipProps?: Partial<TooltipProps>;
  isEmpty?: boolean;
  onLabelClick?: () => void;
  dataRoseyUrn?: string;
}

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
