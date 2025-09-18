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

import { type MouseEvent, useState, useCallback } from "react";
import {
  type IconButtonProps,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { type MRT_RowData, type MRT_TableInstance } from "material-react-table";

import ExportTableMenu from "./export-table-menu";
import { DownloadOutline } from "@/custom-icons";
import { Tooltip } from "@/components";
import {
  DOWNLOAD_ERROR_DEFAULT_MESSAGE,
  DOWNLOAD_SUCCESS_DEFAULT_MESSAGE,
} from "@/components/table/utils/consts";

interface Props<TData extends MRT_RowData> extends IconButtonProps {
  table: MRT_TableInstance<TData>;
  onClickExportJson?: (props: {
    setSuccess: (message?: string) => void;
    setError(message?: string): void;
  }) => void;
  onClickExportCsv?: (props: {
    setSuccess: (message?: string) => void;
    setError(message?: string): void;
  }) => void;
}

interface ExportAlertState {
  open: boolean;
  severity: "success" | "error";
  message: string;
}

const ExportTableButton = <TData extends MRT_RowData>({
  table,
  onClickExportCsv,
  onClickExportJson,
  ...rest
}: Props<TData>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [exportAlertState, setExportAlertState] = useState<ExportAlertState>({
    open: false,
    severity: "success",
    message: "",
  });
  const onCloseDownloadSnackbar = () => {
    setExportAlertState((prev) => ({ ...prev, open: false }));
  };
  const onSetSuccess = useCallback(
    (message?: string) =>
      setExportAlertState({
        open: true,
        severity: "success",
        message: message ?? DOWNLOAD_SUCCESS_DEFAULT_MESSAGE,
      }),
    [],
  );
  const onSetError = useCallback(
    (message?: string) =>
      setExportAlertState({
        open: true,
        severity: "error",
        message: message ?? DOWNLOAD_ERROR_DEFAULT_MESSAGE,
      }),
    [],
  );
  const handleExportCsv = useCallback(() => {
    if (onClickExportCsv) {
      onClickExportCsv({ setSuccess: onSetSuccess, setError: onSetError });
    }
    setAnchorEl(null);
  }, [onClickExportCsv, onSetError, onSetSuccess]);
  const handleExportJson = useCallback(() => {
    if (onClickExportJson) {
      onClickExportJson({ setSuccess: onSetSuccess, setError: onSetError });
    }
    setAnchorEl(null);
  }, [onClickExportJson, onSetError, onSetSuccess]);

  return (
    <>
      <Snackbar
        open={exportAlertState.open}
        autoHideDuration={5000}
        onClose={onCloseDownloadSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          sx={{ whiteSpace: "pre-wrap" }}
          onClose={onCloseDownloadSnackbar}
          severity={exportAlertState.severity}
        >
          {exportAlertState.message}
        </Alert>
      </Snackbar>
      <Tooltip title="Download">
        <IconButton
          aria-label="export-table"
          onClick={handleClick}
          title={undefined}
          {...rest}
        >
          <DownloadOutline />
        </IconButton>
      </Tooltip>
      {anchorEl && (
        <ExportTableMenu
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          table={table}
          onClickExportCsv={handleExportCsv}
          onClickExportJson={handleExportJson}
        />
      )}
    </>
  );
};

export default ExportTableButton;
