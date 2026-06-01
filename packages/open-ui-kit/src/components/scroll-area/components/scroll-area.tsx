/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { ScrollAreaRoot, ScrollAreaViewport } from "./elements";
import type { ScrollAreaProps } from "../types";

export type { ScrollAreaProps };

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, ...props }, ref) => (
    <ScrollAreaRoot ref={ref} data-slot="scroll-area" {...props}>
      <ScrollAreaViewport data-slot="scroll-area-viewport">
        {children}
      </ScrollAreaViewport>
    </ScrollAreaRoot>
  ),
);
ScrollArea.displayName = "ScrollArea";

export { ScrollArea };
