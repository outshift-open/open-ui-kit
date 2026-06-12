/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode, SyntheticEvent } from "react";
import type { SxProps, Theme } from "@mui/material";
import type { DialogProps } from "@/components/dialog";

export type StepperStepState = "completed" | "current" | "disabled" | "idle";

export interface StepperStep {
  /** Step label shown in the sidebar. */
  label: string;
  /** Optional helper text shown below the sidebar label. */
  subtitle?: string;
  /** Explicit visual state. When omitted, state is inferred from activeStep. */
  state?: StepperStepState;
}

export interface StepperPanelProps {
  /** Array of step definitions. */
  steps: StepperStep[];
  /** Zero-based index of the currently active step. */
  activeStep: number;
  /** Called when the user clicks a step in the panel. */
  onStepClick?: (index: number, event: SyntheticEvent) => void;
  /** Controls whether the sidebar renders in its compact icon-only state. */
  collapsed?: boolean;
  /** Initial collapsed state for uncontrolled usage. */
  defaultCollapsed?: boolean;
  /** Called when the sidebar collapse control is clicked. */
  onCollapseClick?: (event: SyntheticEvent) => void;
  /** Called after the sidebar collapsed state changes. */
  onCollapsedChange?: (collapsed: boolean, event: SyntheticEvent) => void;
  /** Accessible label for the sidebar collapse control. Defaults to collapse/expand text. */
  collapseButtonAriaLabel?: string;
  /** Content rendered in the main area. */
  children?: ReactNode;
  /** Footer content (e.g. Back/Next buttons, status text). */
  footer?: ReactNode;
  /** MUI sx overrides for the root container. */
  sx?: SxProps<Theme>;
}

export interface StepperModalStep {
  /** Step label shown below the modal step indicator. */
  label: string;
  /** Explicit visual state. When omitted, state is inferred from activeStep. */
  state?: StepperStepState;
}

export interface StepperModalProps
  extends Omit<DialogProps, "children" | "PaperProps" | "sx" | "title"> {
  /** Modal title. */
  title: string;
  /** Optional descriptor rendered below the title. */
  subtitle?: ReactNode;
  /** Array of step definitions rendered in the horizontal modal series. */
  steps: StepperModalStep[];
  /** Zero-based index of the current modal step. */
  activeStep: number;
  /** Body copy rendered between the step series and custom content. */
  description?: ReactNode;
  /** Content slot rendered in the modal body. */
  children?: ReactNode;
  /** Footer actions rendered in the bottom bar. */
  footer?: ReactNode;
  /** Props forwarded to the underlying dialog paper. */
  paperProps?: DialogProps["PaperProps"];
  /** MUI sx overrides for the modal dialog paper. */
  sx?: SxProps<Theme>;
}
