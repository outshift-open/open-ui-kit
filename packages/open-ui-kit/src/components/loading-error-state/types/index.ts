/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type { EmptyStateProps } from "@/components/empty-state";
import type { SpinnerProps } from "@/components/spinner";

/** Controls which loading indicator is rendered. */
export type LoadingVariant = "spinner" | "skeleton" | "custom";

export interface LoadingErrorStateProps {
  /**
   * Whether data is currently loading.
   * Renders the loading indicator instead of children.
   */
  loading?: boolean;
  /**
   * Whether an error occurred while fetching data.
   * Renders the error empty-state when true and not loading.
   */
  error?: boolean;
  /**
   * The fetched data value. When `data` is an empty array or null/undefined
   * (and not loading/error), the empty-data state is shown instead of children.
   * Pass `skipEmptyCheck` to disable this behaviour.
   */
  data?: unknown;
  /**
   * When true, skips the empty-data check and always renders children
   * if not loading or errored.
   */
  skipEmptyCheck?: boolean;
  /**
   * Content to render when data is ready and non-empty.
   * Pass a render function to receive the resolved data value directly.
   */
  children?: ReactNode | ((data: unknown) => ReactNode);
  /**
   * Which loading indicator to show. Defaults to "spinner".
   * - "spinner" — centered Spinner
   * - "skeleton" — LoadingStates skeleton
   * - "custom" — use `customLoadingContent` to supply your own
   */
  loadingVariant?: LoadingVariant;
  /** Custom loading content, used when loadingVariant is "custom". */
  customLoadingContent?: ReactNode;
  /** Props forwarded to the error EmptyState. */
  errorStateProps?: Partial<EmptyStateProps>;
  /** Props forwarded to the empty-data EmptyState. */
  emptyStateProps?: Partial<EmptyStateProps>;
  /** Props forwarded to the Spinner (loadingVariant="spinner"). */
  spinnerProps?: Partial<SpinnerProps>;
}
