/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useCallback } from "react";
import { SxProps } from "@mui/material";
import { FooterElement } from "./footer-element";
import { BodyElement } from "./body-element";
import { Dialog, DialogSubtitle, DialogTitle } from "@/components/dialog";

export interface ActionsDialogProps {
  open: boolean;
  confirmClicked: (dismiss: boolean, comment: string) => void;
  hideModal: () => void;
  mutationLoading: boolean;
  title: string;
  subTitle?: string;
  includeDismissCheckbox?: boolean;
  dismissCheckboxText?: string;
  bodyText: string;
  closeClicked?: () => void;
  commentSuggestions?: string[];
  styleModal?: SxProps;
}

export const ActionsDialog = ({
  open,
  confirmClicked,
  hideModal,
  mutationLoading,
  title,
  subTitle,
  includeDismissCheckbox,
  dismissCheckboxText = "Dismiss this message?",
  bodyText,
  closeClicked,
  commentSuggestions,
  styleModal,
}: ActionsDialogProps) => {
  const dismissRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    hideModal();
    setError(false);
  }, [hideModal]);

  const handleDialogClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <Dialog
      onClick={handleDialogClick}
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "570px",
          ...(typeof styleModal === "object" ? styleModal : {}),
        },
      }}
      sx={typeof styleModal === "function" ? styleModal : undefined}
    >
      <DialogTitle>{title}</DialogTitle>
      {subTitle && <DialogSubtitle>{subTitle}</DialogSubtitle>}
      <BodyElement
        includeDismissCheckbox={includeDismissCheckbox}
        dismissCheckboxText={dismissCheckboxText}
        bodyText={bodyText}
        dismissRef={dismissRef}
        commentRef={commentRef}
        error={error}
        setError={setError}
        commentSuggestions={commentSuggestions}
      />
      <FooterElement
        hideModal={hideModal}
        dismissRef={dismissRef}
        commentRef={commentRef}
        confirmClicked={confirmClicked}
        mutationLoading={mutationLoading}
        closeClicked={closeClicked}
        error={error}
        setError={setError}
      />
    </Dialog>
  );
};
