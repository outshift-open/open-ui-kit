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

import { ILegendProps, Legend } from "@/components";
import { Stack, Typography, useTheme } from "@mui/material";
import { styles } from "../styles/styles";

export interface IGeneralWidgetBodyStatefulProps<T extends string> {
  legend?: ILegendProps<T>;
  bodyElement: JSX.Element;
  isHorizontal?: boolean;
  isEmpty: boolean;
  legendCustomComponent?: React.ReactNode;
}

export const WidgetBodyStateful = <T extends string>({
  legend,
  bodyElement,
  isEmpty,
  isHorizontal = false,
  legendCustomComponent,
}: IGeneralWidgetBodyStatefulProps<T>) => {
  const theme = useTheme();

  return (
    <>
      {isEmpty ? (
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            ...styles(theme).stack,
            height: "100%",
          }}
          direction={isHorizontal ? "row" : "column"}
        >
          <Typography variant={"subtitle2"}>No data</Typography>
        </Stack>
      ) : (
        <Stack
          sx={styles(theme).stack}
          direction={isHorizontal ? "row" : "column"}
        >
          <Stack sx={styles(theme).stack} spacing={1}>
            {bodyElement}
          </Stack>
          {legend && <Legend {...legend} isHorizontal={isHorizontal} />}
          {legendCustomComponent && legendCustomComponent}
        </Stack>
      )}
    </>
  );
};
