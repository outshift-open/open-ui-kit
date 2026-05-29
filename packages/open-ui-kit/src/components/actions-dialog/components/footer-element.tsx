/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { RefObject, useCallback } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import type { ActionsDialogProps } from "../types";
import { styles } from "../styles";
import { DialogActions } from "@/components/dialog";
import { Button } from "@/components/button";

interface FooterElementProps {
  dismissRef: RefObject<HTMLInputElement>;
  commentRef: RefObject<HTMLInputElement>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
}

export const FooterElement = ({
  confirmClicked,
  hideModal,
  mutationLoading,
  closeClicked,
  dismissRef,
  commentRef,
  setError,
  error,
}: Pick<
  ActionsDialogProps,
  "confirmClicked" | "hideModal" | "mutationLoading" | "closeClicked"
> &
  FooterElementProps) => {
  const handleCancelClick = useCallback(() => {
    hideModal && hideModal();
    closeClicked && closeClicked();
    setError(false);
  }, [hideModal, closeClicked, setError]);

  const handleConfirmClick = useCallback(() => {
    if (commentRef.current?.value.trim() === "") {
      setError(true);
      return;
    }
    if (!error) {
      confirmClicked &&
        confirmClicked(
          dismissRef.current?.checked || false,
          commentRef.current?.value || "",
        );
    }
  }, [error, commentRef, setError, confirmClicked, dismissRef]);

  return (
    <DialogActions>
      <Button variant="tertariary" onClick={handleCancelClick}>
        Cancel
      </Button>
      <Button
        variant="primary"
        onClick={handleConfirmClick}
        size="medium"
        disabled={mutationLoading}
        startIcon={
          mutationLoading ? (
            <CircularProgress color="inherit" size={16} />
          ) : undefined
        }
        sx={styles.styledConfirmButton}
      >
        Confirm
      </Button>
    </DialogActions>
  );
};
