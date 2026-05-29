import * as React from "react";
import { Box, NoSsr } from "@mui/material";
import { FiltersBar, ThemeProvider } from "@open-ui-kit/core";
import { getSingleSelectFiltersData } from "./filterDemoData";

export default function FiltersSingleSelect() {
  const [filters, setFilters] = React.useState(getSingleSelectFiltersData);

  return (
    <ThemeProvider>
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <NoSsr>
          <FiltersBar
            isLoading={false}
            filtersData={filters}
            assetsData={{ count: 36, selectedCount: 12, name: "issues" }}
            onSelectedChange={setFilters}
            onSearch={() => undefined}
            searchPlaceHolder="Search issues"
          />
        </NoSsr>
      </Box>
    </ThemeProvider>
  );
}
