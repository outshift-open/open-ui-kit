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

export const styles = {
  styledDialog: {
    "& .MuiDialog-paper": {
      width: "570px",
    },
  },
  styledTextArea: {
    width: "100%",
    "& .MuiInputBase-root": {
      marginTop: 0,
      marginBottom: "12px",
      minHeight: "138px",
      alignItems: "flex-start",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      marginBottom: "12px",
    },
  },
  styledDismiss: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    marginBottom: "16px",
  },
  styledFooter: {
    display: "flex",
    alignContent: "space-between",
    justifyContent: "flex-end",
    gap: "16px",
    padding: "0",
  },
  styledConfirmButton: {
    "&&.Mui-disabled": {
      opacity: 1,
    },
    "&&.MuiLoadingButton-root": {
      height: "32px",
    },
  },
  styledCommentSuggestionsStack: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "16px",
  },
};
