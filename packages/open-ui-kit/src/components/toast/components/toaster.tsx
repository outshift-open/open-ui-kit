/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Toaster as Sonner } from "sonner";
import type { ToasterProps } from "../types";

export const Toaster = ({ toastOptions, ...props }: ToasterProps) => {
  return (
    <Sonner
      position="top-right"
      offset={16}
      expand
      visibleToasts={3}
      {...props}
      toastOptions={{
        duration: 2500,
        ...toastOptions,
      }}
    />
  );
};
