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
