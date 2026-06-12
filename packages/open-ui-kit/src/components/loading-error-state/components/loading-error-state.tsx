/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box } from "@mui/material";
import { EmptyState } from "@/components/empty-state";
import { Spinner } from "@/components/spinner";
import { LoadingStates } from "@/components/loading-states";
import { centeredStateStyles } from "../styles";
import type { LoadingErrorStateProps } from "../types";

const isEmpty = (data: unknown): boolean => {
  if (data === null || data === undefined) return true;
  if (Array.isArray(data)) return data.length === 0;
  return false;
};

export const LoadingErrorState = ({
  loading = false,
  error = false,
  data,
  skipEmptyCheck = false,
  children,
  loadingVariant = "spinner",
  customLoadingContent,
  errorStateProps,
  emptyStateProps,
  spinnerProps,
}: LoadingErrorStateProps) => {
  if (loading) {
    if (loadingVariant === "skeleton") {
      return <LoadingStates showSpinner={false} />;
    }
    if (loadingVariant === "custom") {
      return <>{customLoadingContent}</>;
    }
    return (
      <Box sx={centeredStateStyles}>
        <Spinner color="primary" {...spinnerProps} />
      </Box>
    );
  }

  if (error) {
    return (
      <EmptyState
        variant="negative"
        title="Something went wrong"
        description="We couldn't load the data. Please try again."
        {...errorStateProps}
      />
    );
  }

  if (!skipEmptyCheck && isEmpty(data)) {
    return (
      <EmptyState
        variant="info"
        title="No data"
        description="There is nothing to display here yet."
        {...emptyStateProps}
      />
    );
  }

  if (typeof children === "function") {
    return <>{children(data)}</>;
  }

  return <>{children}</>;
};
