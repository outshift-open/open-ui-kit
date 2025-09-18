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
