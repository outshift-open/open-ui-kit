/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skeleton } from "@mui/material";
import { Spinner } from "@/components/spinner";
import {
  DEFAULT_SKELETON_STATES,
  DEFAULT_SPINNER_SIZES,
  getSkeletonShapeStyles,
} from "../styles";
import type { LoadingStatesProps, LoadingStatesSkeletonState } from "../types";
import {
  StyledLoadingStatesRoot,
  StyledSkeletonCard,
  StyledSkeletonPreview,
  StyledSkeletonSection,
  StyledSpinnerGroup,
  StyledSpinnerRow,
  StyledSpinnerSection,
} from "./elements";

const toSxArray = (sx: LoadingStatesProps["sx"]) =>
  Array.isArray(sx) ? sx : sx ? [sx] : [];

const renderSkeletonAnimation = (state: LoadingStatesSkeletonState) =>
  state === "loading" ? "wave" : false;

const LoadingSkeletonPreview = ({
  state,
}: {
  state: LoadingStatesSkeletonState;
}) => (
  <StyledSkeletonPreview state={state}>
    <Skeleton
      animation={renderSkeletonAnimation(state)}
      variant="circular"
      width={40}
      height={40}
      sx={(theme) => getSkeletonShapeStyles(theme, state, "104px")}
    />
    <Skeleton
      animation={renderSkeletonAnimation(state)}
      variant="rounded"
      width={210}
      height={210}
      sx={(theme) => getSkeletonShapeStyles(theme, state, "8px")}
    />
    <Skeleton
      animation={renderSkeletonAnimation(state)}
      variant="rounded"
      width={210}
      height={20}
      sx={(theme) => getSkeletonShapeStyles(theme, state, "4px")}
    />
  </StyledSkeletonPreview>
);

export const LoadingStates = ({
  spinnerSizes = DEFAULT_SPINNER_SIZES,
  showSpinner = true,
  showSkeleton = true,
  skeletonStates = DEFAULT_SKELETON_STATES,
  sx,
  ...props
}: LoadingStatesProps) => (
  <StyledLoadingStatesRoot sx={toSxArray(sx)} {...props}>
    {showSpinner ? (
      <StyledSpinnerSection>
        <StyledSpinnerGroup aria-label="Primary loading indicators">
          {spinnerSizes.map((size) => (
            <StyledSpinnerRow key={`primary-${size}`}>
              <Spinner color="primary" size={size} />
            </StyledSpinnerRow>
          ))}
        </StyledSpinnerGroup>
        <StyledSpinnerGroup aria-label="Secondary loading indicators">
          {spinnerSizes.map((size) => (
            <StyledSpinnerRow key={`secondary-${size}`}>
              <Spinner color="secondary" size={size} />
            </StyledSpinnerRow>
          ))}
        </StyledSpinnerGroup>
      </StyledSpinnerSection>
    ) : null}
    {showSkeleton ? (
      <StyledSkeletonSection>
        {skeletonStates.map((state) => (
          <StyledSkeletonCard key={state}>
            <LoadingSkeletonPreview state={state} />
          </StyledSkeletonCard>
        ))}
      </StyledSkeletonSection>
    ) : null}
  </StyledLoadingStatesRoot>
);
