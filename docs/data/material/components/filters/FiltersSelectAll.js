import * as React from "react";
import { Box, NoSsr } from "@mui/material";
import { FiltersBar, ThemeProvider } from "@open-ui-kit/core";
import { getSelectAllFiltersData } from "./filterDemoData";

export default function FiltersSelectAll() {
  const [filters, setFilters] = React.useState(getSelectAllFiltersData);

  return (
    <ThemeProvider>
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <NoSsr>
          <FiltersBar
            isLoading={false}
            filtersData={filters}
            assetsData={{ count: 128, selectedCount: 74, name: "findings" }}
            onSelectedChange={setFilters}
            onSearch={() => undefined}
            searchPlaceHolder="Search findings"
          />
        </NoSsr>
      </Box>
    </ThemeProvider>
  );
}
