/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GeneralSize } from "@/common";
import { Stack } from "@mui/material";
import { styles } from "../styles";
import { Tag, TagBackgroundColorVariants } from "@/components";

type CommentSuggestionsProps = {
  commentSuggestions: string[];
  setSelectedSuggestion: React.Dispatch<React.SetStateAction<string>>;
  selectedSuggestion: string;
};

export const CommentSuggestions = ({
  commentSuggestions,
  setSelectedSuggestion,
  selectedSuggestion,
}: CommentSuggestionsProps) => {
  return (
    <Stack sx={styles.styledCommentSuggestionsStack}>
      {commentSuggestions.map((suggestion) => {
        return (
          <Tag
            key={suggestion}
            size={GeneralSize.Small}
            color={
              selectedSuggestion === suggestion
                ? TagBackgroundColorVariants.Secondary
                : TagBackgroundColorVariants.Primary
            }
            sx={{
              width: "max-content",
            }}
            onClick={() => {
              setSelectedSuggestion(suggestion);
            }}
          >
            {suggestion}
          </Tag>
        );
      })}
    </Stack>
  );
};
