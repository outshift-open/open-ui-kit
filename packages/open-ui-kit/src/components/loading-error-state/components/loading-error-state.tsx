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

import { Link, Stack, Typography } from "@mui/material";
import { stackStyle } from "../styles/styles";
import { NoData } from "@/custom-illustrations";

export const LoadingErrorState = (): JSX.Element => {
  return (
    <Stack sx={stackStyle}>
      <NoData />
      <Typography data-testid="main-text" mt={5} variant="h5">
        Sorry, something went wrong...
      </Typography>
      <Typography data-testid="first-sub-text" mt={3} variant="body2">
        Please refresh the page.
      </Typography>
      <Typography data-testid="second-sub-text" variant="body2">
        If the problem persists,&nbsp;
        <Link target="_blank" href="mailto:support@example.com">
          contact our support.
        </Link>
      </Typography>
    </Stack>
  );
};
