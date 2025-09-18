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

import { ILegendProps, TooltipProps } from "@/components";
import { Card, SxProps, useTheme } from "@mui/material";
import { styles } from "../styles/styles";
import { WidgetHeadline } from "./widget-headline";
import { WidgetBody } from "./widget-body";

export interface IWidgetProps<T extends string> {
  bodyElement: JSX.Element;
  sx?: SxProps;
  label?: string | JSX.Element;
  headerChildren?: JSX.Element;
  headerLeftChildren?: JSX.Element;
  labelTooltip?: React.ReactNode;
  titleTooltip?: React.ReactNode;
  isLoading?: boolean;
  legend?: ILegendProps<T>;
  isHorizontal?: boolean;
  chartCustomComponent?: React.ReactNode;
  stackStyle?: Record<string, string | number>;
  legendCustomComponent?: React.ReactNode;
  tooltipProps?: Partial<TooltipProps>;
  isEmpty?: boolean;
  onLabelClick?: () => void;
  dataRoseyUrn?: string;
}

export const Widget = <T extends string>({
  sx,
  label,
  headerChildren,
  headerLeftChildren,
  labelTooltip,
  titleTooltip,
  bodyElement,
  isLoading,
  legend,
  isHorizontal = false,
  isEmpty = false,
  legendCustomComponent,
  tooltipProps,
  onLabelClick,
  dataRoseyUrn,
}: IWidgetProps<T>) => {
  const theme = useTheme();
  return (
    <Card
      data-rosey-urn={dataRoseyUrn}
      sx={{
        ...(isHorizontal ? styles(theme).horizontalCard : styles(theme).card),
        ...sx,
        overflow: "visible",
      }}
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
        legend={legend}
        isHorizontal={isHorizontal}
        isEmpty={isEmpty}
        legendCustomComponent={legendCustomComponent}
      />
    </Card>
  );
};
