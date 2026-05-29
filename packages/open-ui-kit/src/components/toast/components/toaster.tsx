/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Toaster as Sonner } from "sonner";

export type ToasterProps = React.ComponentProps<typeof Sonner>;

export const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="top-right"
      offset={16}
      expand
      visibleToasts={3}
      toastOptions={{
        duration: 2500,
        ...props.toastOptions,
      }}
      {...props}
    />
  );
};
