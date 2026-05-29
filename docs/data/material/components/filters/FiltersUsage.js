import * as React from "react";
import { Box, NoSsr } from "@mui/material";
import { FiltersBar, ThemeProvider } from "@open-ui-kit/core";
import { getFiltersData } from "./filterDemoData";

export default function FiltersUsage() {
  const [filters, setFilters] = React.useState(getFiltersData);
  const [, setSearch] = React.useState("");

  return (
    <ThemeProvider>
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <NoSsr>
          <FiltersBar
            isLoading={false}
            filtersData={filters}
            assetsData={{ count: 2200, selectedCount: 1840, name: "assets" }}
            onSelectedChange={setFilters}
            onSearch={setSearch}
            searchPlaceHolder="Search assets"
            initialFavoriteValue={false}
          />
        </NoSsr>
      </Box>
    </ThemeProvider>
  );
}
