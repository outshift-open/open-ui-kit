/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { Tooltip } from "@/components/tooltip";
import { rtlWrapperStyle, baseWrapperStyle, spanStyle } from "../styles";
import type { OverflowTooltipProps } from "../types";

export type { OverflowTooltipProps };

export const OverflowTooltip = ({
  value,
  children,
  ellipsisDirection = "end",
  styleText,
  ...rest
}: OverflowTooltipProps) => {
  const textElementRef = useRef<HTMLDivElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const compareSize = useCallback(() => {
    const el = textElementRef.current;
    if (!el) return;
    setIsOverflowing(el.scrollWidth > el.clientWidth);
  }, []);

  useEffect(() => {
    const el = textElementRef.current;
    if (!el) return;

    compareSize();

    const ro = new ResizeObserver(compareSize);
    ro.observe(el);
    return () => ro.disconnect();
  }, [value, children, ellipsisDirection, compareSize]);

  return (
    <Tooltip {...rest} disableHoverListener={!isOverflowing} title={value}>
      <div
        ref={textElementRef}
        style={
          ellipsisDirection === "start" ? rtlWrapperStyle : baseWrapperStyle
        }
      >
        <span style={{ ...spanStyle, ...styleText }}>{children}</span>
      </div>
    </Tooltip>
  );
};
