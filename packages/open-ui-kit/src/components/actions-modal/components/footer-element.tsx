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
