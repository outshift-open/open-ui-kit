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

import React, { useRef, useState, useCallback } from "react";
import { BoxProps, SxProps } from "@mui/material";
import { FooterElement } from "./footer-element";
import { BodyElement } from "./body-element";
import { styles } from "../styles";
import { Modal, ModalSubtitle, ModalTitle } from "@/components";

export interface ActionsModalProps {
  open: boolean;
  confirmClicked: (dismiss: boolean, comment: string) => void;
  hideModal: () => void;
  mutationLoading: boolean;
  title: string;
  subTitle?: string;
  useCommentSuggestions?: boolean;
  includeDismissCheckbox?: boolean;
  dismissCheckboxText?: string;
  bodyText: string;
  closeClicked?: () => void;
  commentSuggestions?: string[];
  styleModal?: SxProps;
  footerProps?: BoxProps;
}

export const ActionsModal = ({
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
  footerProps,
}: ActionsModalProps) => {
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
    <Modal
      onClick={handleDialogClick}
      open={open}
      onClose={handleClose}
      sx={{ ...styles.styledDialog, ...styleModal }}
    >
      <ModalTitle>{title}</ModalTitle>
      {subTitle && <ModalSubtitle>{subTitle}</ModalSubtitle>}
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
        footerProps={footerProps}
      />
    </Modal>
  );
};
