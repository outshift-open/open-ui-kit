/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box } from "@mui/material";
import * as React from "react";
import { ScrollAreaRoot, ScrollAreaViewport } from "./elements";

const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Box>
>(({ className, children, ...props }, ref) => {
  return (
    <ScrollAreaRoot
      ref={ref}
      data-slot="scroll-area"
      className={className}
      {...props}
    >
      <ScrollAreaViewport data-slot="scroll-area-viewport">
        {children}
      </ScrollAreaViewport>
    </ScrollAreaRoot>
  );
});
ScrollArea.displayName = "ScrollArea";

export { ScrollArea };
