/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material";

export interface ActionsDialogProps {
  /** Controls whether the dialog is visible. */
  open: boolean;
  /** Called when the primary action is confirmed with the dismiss state and comment text. */
  confirmClicked: (dismiss: boolean, comment: string) => void;
  /** Closes the dialog without confirming the action. */
  hideModal: () => void;
  /** Shows a loading indicator and disables the primary action while work is pending. */
  mutationLoading: boolean;
  /** Main dialog title. */
  title: string;
  /** Optional subtitle displayed below the title. */
  subTitle?: string;
  /** Shows a dismiss checkbox above the action row. */
  includeDismissCheckbox?: boolean;
  /** Label for the optional dismiss checkbox. */
  dismissCheckboxText?: string;
  /** Main descriptive dialog copy. */
  bodyText: string;
  /** Optional callback fired when the cancel action is clicked. */
  closeClicked?: () => void;
  /** Optional predefined comment choices rendered as selectable tags. */
  commentSuggestions?: string[];
  /** Additional styles merged into the dialog paper. */
  styleModal?: SxProps<Theme>;
}
