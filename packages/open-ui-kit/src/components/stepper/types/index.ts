/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, SyntheticEvent } from "react";
import { SxProps, Theme } from "@mui/material";

export interface StepperStep {
  /** Step label shown in the sidebar. */
  label: string;
}

export interface StepperPanelProps {
  /** Array of step definitions. */
  steps: StepperStep[];
  /** Zero-based index of the currently active step. */
  activeStep: number;
  /** Called when the user clicks a step in the panel. */
  onStepClick?: (index: number, event: SyntheticEvent) => void;
  /** Content rendered in the main area. */
  children?: ReactNode;
  /** Footer content (e.g. Back/Next buttons, status text). */
  footer?: ReactNode;
  /** MUI sx overrides for the root container. */
  sx?: SxProps<Theme>;
}
