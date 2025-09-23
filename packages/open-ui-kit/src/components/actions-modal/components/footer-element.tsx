/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { RefObject, useCallback } from "react";
import { Box, BoxProps, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { ActionsModalProps } from "./actions-modal";
import { styles } from "../styles";
import { LoadingButton } from "@mui/lab";

interface FooterElementProps {
  dismissRef: RefObject<HTMLInputElement>;
  commentRef: RefObject<HTMLInputElement>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  footerProps?: BoxProps;
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
  footerProps,
}: Pick<
  ActionsModalProps,
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
    <Box sx={{ ...styles.styledFooter, ...footerProps?.sx }} {...footerProps}>
      <Button variant="tertariary" onClick={handleCancelClick}>
        Cancel
      </Button>
      <LoadingButton
        loading={mutationLoading}
        loadingPosition="start"
        startIcon={
          mutationLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : null
        }
        variant="primary"
        onClick={handleConfirmClick}
        size="medium"
        sx={styles.styledConfirmButton}
      >
        <span>Confirm</span>
      </LoadingButton>
    </Box>
  );
};
