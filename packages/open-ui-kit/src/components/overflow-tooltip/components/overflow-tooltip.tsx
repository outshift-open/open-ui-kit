/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { rtlWrapperStyle, baseWrapperStyle, spanStyle } from "../styles";
import { Tooltip, TooltipProps } from "@/components";

// Define props
export interface OverflowTooltipProps
  extends Omit<TooltipProps, "title" | "children"> {
  value: React.ReactNode;
  someLongText: React.ReactNode;
  ellipsisDirection?: "start" | "end";
  styleText?: React.CSSProperties;
}

export const OverflowTooltip = ({
  value,
  someLongText,
  ellipsisDirection = "end",
  styleText,
  ...rest
}: OverflowTooltipProps) => {
  const textElementRef = useRef<HTMLDivElement | null>(null);
  const [hoverStatus, setHover] = useState(false);

  const compareSize = useCallback(() => {
    const el = textElementRef.current;
    if (!el) return;
    setHover(el.scrollWidth > el.clientWidth);
  }, []);

  useEffect(() => {
    const el = textElementRef.current;
    if (!el) return;

    compareSize();

    const ro = new ResizeObserver(() => {
      compareSize();
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [value, someLongText, ellipsisDirection, compareSize]);

  return (
    <Tooltip {...rest} disableHoverListener={!hoverStatus} title={value}>
      <div
        ref={textElementRef}
        style={
          ellipsisDirection === "start" ? rtlWrapperStyle : baseWrapperStyle
        }
      >
        <span style={{ ...spanStyle, ...styleText }}>{someLongText}</span>
      </div>
    </Tooltip>
  );
};
