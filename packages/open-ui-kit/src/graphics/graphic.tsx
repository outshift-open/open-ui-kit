/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { forwardRef } from "react";
import { SvgIcon, type SvgIconProps, styled } from "@mui/material";

export type GraphicFontSize = "base" | "small" | "medium" | "large" | "xlarge";

export interface GraphicProps extends Omit<SvgIconProps, "fontSize"> {
  fontSize?: GraphicFontSize | undefined;
}

export const graphicFontSizes: Record<GraphicFontSize, string> = {
  base: "20px",
  small: "24px",
  medium: "32px",
  large: "48px",
  xlarge: "64px",
};

const GraphicRoot = styled(SvgIcon, {
  name: "OpenUiKitGraphic",
  slot: "Root",
  shouldForwardProp: (prop) => prop !== "graphicFontSize",
})<{ graphicFontSize: GraphicFontSize }>(({ graphicFontSize }) => ({
  fontSize: graphicFontSizes[graphicFontSize],
}));

export const Graphic = forwardRef<SVGSVGElement, GraphicProps>(function Graphic(
  { fontSize = "medium", ...props },
  ref,
) {
  return <GraphicRoot ref={ref} graphicFontSize={fontSize} {...props} />;
});
