/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
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
  // Create Ref
  const textElementRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  /**
   * Compares the size of the text element to its container and sets the hover state accordingly
   */
  const compareSize = () => {
    const compare =
      textElementRef.current.scrollWidth > textElementRef.current.clientWidth;
    setHover(compare);
  };

  // Add resize listener to compare size on component mount
  useEffect(() => {
    window.addEventListener("resize", compareSize);
  }, []);

  useEffect(() => {
    compareSize();
  }, [value]);

  // Remove resize listener on component unmount
  useEffect(
    () => () => {
      window.removeEventListener("resize", compareSize);
    },
    [],
  );

  // Define state and function to update the value
  const [hoverStatus, setHover] = useState(false);

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
