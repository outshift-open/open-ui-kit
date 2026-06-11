/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { ScrollAreaRoot, ScrollAreaViewport } from "./elements";
import type { ScrollAreaProps } from "../types";

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, ...props }, ref) => (
    <ScrollAreaRoot ref={ref} {...props} data-slot="scroll-area">
      <ScrollAreaViewport data-slot="scroll-area-viewport" tabIndex={0}>
        {children}
      </ScrollAreaViewport>
    </ScrollAreaRoot>
  ),
);
ScrollArea.displayName = "ScrollArea";

export { ScrollArea };
