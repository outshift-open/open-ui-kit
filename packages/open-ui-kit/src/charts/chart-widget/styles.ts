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

import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  card: {
    overflow: "visible",
    backgroundColor: theme.palette.vars.interactiveSecondaryWeakDefault,
    padding: "0px",
  },

  chartSkeleton: {
    marginBottom: "10px",
  },

  stack: {
    height: "136px",
    width: "100%",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  cardHeaderWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.vars.inactiveBorderHover}`,
    padding: "12px 16px",
    width: "100%",
  },

  legendContainer: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },

  titleStack: {
    flexDirection: "row",
    gap: "8px",
  },
});
