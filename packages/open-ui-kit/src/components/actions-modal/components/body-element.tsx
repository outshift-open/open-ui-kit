/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { RefObject, useCallback, useEffect, useState } from "react";
import { Box, Checkbox, TextField, Typography } from "@mui/material";
import { styles } from "../styles";
import { ActionsModalProps } from "./actions-modal";
import { CommentSuggestions } from "./comment-suggestions";

interface BodyElementProps {
  dismissRef: RefObject<HTMLInputElement>;
  commentRef: RefObject<HTMLInputElement>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  commentSuggestions?: string[];
}

export const BodyElement = ({
  includeDismissCheckbox,
  bodyText,
  dismissRef,
  commentRef,
  setError,
  error,
  commentSuggestions,
  dismissCheckboxText,
}: Pick<
  ActionsModalProps,
  "includeDismissCheckbox" | "bodyText" | "dismissCheckboxText"
> &
  BodyElementProps) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState<string>("");

  const useCommentSuggestions = Boolean(commentSuggestions?.length);

  const validateInput = useCallback(() => {
    if (commentRef.current) {
      const isEmpty = commentRef.current.value.trim() === "";
      setError(isEmpty);

      if (!commentRef.current.value) {
        setSelectedSuggestion("");
      }
    }
  }, [commentRef, setError]);

  useEffect(() => {
    if (commentRef.current && selectedSuggestion) {
      commentRef.current.value = selectedSuggestion;
      setError(false);
    }
  }, [selectedSuggestion, commentRef, setError]);

  return (
    <Box>
      <Typography variant="body2">{bodyText}</Typography>
      {useCommentSuggestions && (
        <>
          <Typography mt={2} mb={1} fontSize={14}>
            Add comment{" "}
            {commentSuggestions && commentSuggestions?.length > 0
              ? "or choose a matching reason from the list:"
              : ""}
          </Typography>
          <TextField
            inputRef={commentRef}
            sx={(theme) => ({
              backgroundColor: theme.palette.vars.controlBackgroundDefault,
              ...styles.styledTextArea,
            })}
            variant="standard"
            multiline={true}
            placeholder="Inform your teammates of the rationale behind this action"
            error={error}
            helperText={error ? "This field is required" : ""}
            onChange={validateInput}
          />
          {commentSuggestions && commentSuggestions?.length > 0 && (
            <CommentSuggestions
              commentSuggestions={commentSuggestions}
              setSelectedSuggestion={setSelectedSuggestion}
              selectedSuggestion={selectedSuggestion}
            />
          )}
        </>
      )}
      {includeDismissCheckbox && (
        <Box
          sx={{
            ...styles.styledDismiss,
            marginTop: useCommentSuggestions ? 0 : "16px",
          }}
        >
          <Checkbox inputRef={dismissRef} />
          <Typography fontSize={14}>{dismissCheckboxText}</Typography>
        </Box>
      )}
    </Box>
  );
};
