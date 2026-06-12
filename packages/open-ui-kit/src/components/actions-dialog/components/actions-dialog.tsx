/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useCallback } from "react";
import { FooterElement } from "./footer-element";
import { BodyElement } from "./body-element";
import { Dialog, DialogSubtitle, DialogTitle } from "@/components/dialog";
import type { ActionsDialogProps } from "../types";
import { styles } from "../styles";

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
        sx: [
          styles.styledPaper,
          ...(Array.isArray(styleModal)
            ? styleModal
            : styleModal
              ? [styleModal]
              : []),
        ],
      }}
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
