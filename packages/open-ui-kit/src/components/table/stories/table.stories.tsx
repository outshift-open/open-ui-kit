/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { faker } from "@faker-js/faker";
import {
  MRT_ColumnDef,
  MRT_ColumnPinningState,
  MRT_PaginationState,
  MRT_SortingState,
} from "material-react-table";
import { useEffect, useState } from "react";
import {
  Adb as AdbIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { BrowserRouter } from "react-router-dom";
import {
  Box,
  Button,
  LinearProgress,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Table } from "../components/table";
import { TableProps } from "../types";
import { mainTableMockData, subTableMockData } from "../utils/mock-data";
import { MenuItem, PathDisplay } from "@/components";

faker.seed(42);

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  args: {
    onRowLinkClick: fn(),
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Tables show large amounts of data in a structured format, allowing users to view, sort, filter, and interact with the data efficiently."
          guideLink=""
          importLine='import { Table } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

type Story = StoryObj<typeof Table>;

export default meta;

const onRowFeaturesWorkAround = {
  onRowLinkClick: undefined,
};

const generateSubRows = (depth = 1) => {
  if (depth === 3) {
    return <Typography>{faker.animal.cat()}</Typography>;
  }

  return (
    <Table
      isLoading={false}
      columns={[
        {
          accessorKey: "cname",
          header: "Company Name",
        },
        {
          header: "Color",
          accessorKey: "color",
        },
        {
          header: "Progress",
          accessorKey: "progress",
        },
        {
          header: "Icon",
          accessorKey: "icon",
        },
      ]}
      enableTopToolbar={false}
      data={Array.from({ length: 3 }).map(() => ({
        cname:
          depth === 2 ? (
            <Typography>{faker.company.name()}</Typography>
          ) : (
            faker.company.name()
          ),
        color:
          depth === 2 ? (
            <Button>{faker.color.rgb()}</Button>
          ) : (
            faker.color.rgb()
          ),
        progress: (
          <LinearProgress
            sx={{ flex: 1 }}
            variant="determinate"
            value={faker.number.int({ max: 100 })}
          />
        ),
        icon: <AdbIcon />,
        subRows: generateSubRows(depth + 1),
      }))}
    />
  );
};

const data = {
  columns: [
    {
      accessorKey: "id",
      header: "ID",
      size: 350,
    },
    {
      header: "Name",
      accessorKey: "name",
      enableColumnOrdering: false,
      size: 200,
    },
    {
      header: "Phone",
      accessorKey: "phone",
      enableSorting: false,
      enableColumnOrdering: false,
    },
    {
      header: "firstName",
      accessorKey: "firstName",
    },
    {
      header: "lastName",
      accessorKey: "lastName",
    },
    {
      header: "middleName",
      accessorKey: "middleName",
    },
    {
      header: "gender",
      accessorKey: "gender",
    },
    {
      header: "sex",
      accessorKey: "sex",
    },
    {
      header: "bio",
      accessorKey: "bio",
    },
    {
      header: "zodiacSign",
      accessorKey: "zodiacSign",
    },
  ],
  data: Array.from({ length: 20 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    middleName: faker.person.middleName(),
    gender: faker.person.gender(),
    sex: faker.person.sex(),
    bio: faker.person.bio(),
    zodiacSign: faker.person.zodiacSign(),
    subRows: generateSubRows(),
    severity: faker.helpers.arrayElement([10, 30, 50, 70, 100]),
  })),
  densityCompact: false,
  isLoading: false,
};

const SimpleTableComponent = ({
  data,
  columns,
  densityCompact,
  title,
  ...props
}: TableProps<Record<string, unknown>>) => {
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 15,
  });
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  return (
    <Box sx={{ padding: "20px" }}>
      <BrowserRouter>
        <Table
          {...props}
          columns={columns}
          data={data}
          densityCompact={densityCompact}
          enableExpanding={true}
          enableRowSelection={true}
          state={{ pagination, sorting }}
          onSortingChange={setSorting}
          onPaginationChange={setPagination}
          title={title}
          enableRowActions={true}
          enableColumnPinning={true}
        />
      </BrowserRouter>
    </Box>
  );
};

const EmptyTableComponent = ({
  columns,
  ...props
}: TableProps<Record<string, unknown>>) => (
  <Box sx={{ padding: "20px" }}>
    <Table
      {...props}
      columns={columns}
      data={[]}
      title={{ label: "Empty Table", count: 0 }}
    />
  </Box>
);

const SimpleTableWithFreezeColumnComponent = ({
  data,
  columns,
  densityCompact,
  ...props
}: TableProps<Record<string, unknown>>) => {
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 15,
  });
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [columnPinning] = useState<MRT_ColumnPinningState>({
    left: ["id", "name"],
    right: ["bio"],
  });
  return (
    <Box sx={{ padding: "20px" }}>
      <BrowserRouter>
        <Table
          {...props}
          columns={columns}
          data={data}
          densityCompact={densityCompact}
          enableColumnResizing={true}
          enableExpanding={true}
          enableExpandAll={false}
          state={{ pagination, sorting, columnPinning }}
          onSortingChange={setSorting}
          onPaginationChange={setPagination}
          topToolbarProps={{ enableActions: false }}
        />
      </BrowserRouter>
    </Box>
  );
};

const mockFetchData = async (id: string) => {
  console.log(`Fetching data for row Id: ${id}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(subTableMockData.data);
    }, 2000);
  });
};

const SubTableComponent = ({
  id,
  columns,
  cacheResultCallback,
  getCachedResultCallback,
  ...props
}: any) => {
  const [innerData, setInnerData] = useState<any>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 15,
  });
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cachedData = getCachedResultCallback(id);
    if (cachedData) {
      setInnerData(cachedData);
    } else {
      setIsLoading(true);
      mockFetchData(id)
        .then((response) => {
          cacheResultCallback(id, response);
          setInnerData(response);
        })
        .catch(() => {
          console.error("error fetching findings data");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.pageIndex, pagination.pageSize]);

  return (
    <Table
      columns={columns}
      data={innerData}
      isLoading={isLoading}
      enableRowActions={false}
      state={{ pagination, sorting, showLoadingOverlay: false }}
      onSortingChange={setSorting}
      onPaginationChange={setPagination}
      manualSorting={true}
      enableExpanding={false}
      enableExpandAll={false}
      enableTopToolbar={false}
      {...props}
    />
  );
};

const SubTablesWithPaginationComponent = ({
  densityCompact,
}: TableProps<Record<string, unknown>>) => {
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 15,
  });

  const [subTableResults, setSubTableResults] = useState<{
    [key: string]: any;
  }>({});

  const cacheResultHandler = (id: string, data: any) => {
    setSubTableResults((prevState) => ({ ...prevState, [id]: data }));
  };

  const getCachedResultHandler = (id: string) => {
    return subTableResults[id];
  };

  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  return (
    <Box sx={{ padding: "20px" }}>
      <Table
        columns={
          mainTableMockData.columns as unknown as MRT_ColumnDef<
            Record<string, unknown>,
            unknown
          >[]
        }
        data={mainTableMockData.data}
        densityCompact={densityCompact}
        enableColumnResizing={false}
        enableExpanding={true}
        enableExpandAll={false}
        state={{ pagination, sorting }}
        enableRowActions={false}
        isLoading={false}
        onSortingChange={setSorting}
        onPaginationChange={setPagination}
        paginateExpandedRows
        renderDetailPanel={({ row }) =>
          row.original.id ? (
            <SubTableComponent
              id={row.original.id}
              columns={subTableMockData.columns}
              densityCompact={densityCompact}
              getCachedResultCallback={getCachedResultHandler}
              cacheResultCallback={cacheResultHandler}
            />
          ) : null
        }
      />
    </Box>
  );
};

export const SimpleTable: Story = {
  render: SimpleTableComponent,
  args: {
    ...data,
    ...onRowFeaturesWorkAround,
    title: { label: "Simple Table", count: 12, showSelected: true },
    isLoading: false,
    topToolbarProps: {
      export: {
        enableExport: true,
        onClickExportCsv: ({ setSuccess }) => setSuccess("export csv"),
        onClickExportJson: ({ setError }) => setError(),
      },
    },
  },
};

export const EmptyTable: Story = {
  render: EmptyTableComponent,
  args: {
    ...data,
    ...onRowFeaturesWorkAround,
  },
};

export const SubTablesWithPagination: Story = {
  render: (args) => <SubTablesWithPaginationComponent {...args} />,
  args: {
    densityCompact: false,
  },
};

export const TableRowWithActions: Story = {
  render: SimpleTableComponent,
  args: {
    ...data,
    ...onRowFeaturesWorkAround,
    renderRowActionMenuItems: ({ row }) => [
      <MenuItem key="edit" onClick={() => console.info("Edit", row)}>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        Edit
      </MenuItem>,
      <MenuItem key="delete" onClick={() => console.info("Delete", row)}>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        Delete
      </MenuItem>,
    ],
  },
};

export const TableRowWithLinkAction: Story = {
  render: (args) => <SimpleTableComponent {...args} />,
  args: {
    ...data,
    ...onRowFeaturesWorkAround,
    renderRowActionMenuItems: ({ row }) => [
      <MenuItem key="open-link" href="https://www.google.com" openInNewTab>
        <ListItemIcon>
          <AdbIcon />
        </ListItemIcon>
        Open a link
      </MenuItem>,
      <MenuItem key="edit" onClick={() => console.info("Edit", row)}>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        Edit
      </MenuItem>,
      <MenuItem key="delete" onClick={() => console.info("Delete", row)}>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        Delete
      </MenuItem>,
    ],
  },
};

export const SimpleTableWithColumnPinning: Story = {
  render: SimpleTableWithFreezeColumnComponent,
  args: {
    ...data,
    ...onRowFeaturesWorkAround,
  },
};

const TableWithReloadComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [innerData, setInnerData] = useState<any>([]);
  const [count, setCount] = useState<number>(0);

  const fetchData = () => {
    setIsLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.data);
      }, 2000);
    })
      .then((res) => {
        const response = res as Array<any>;
        setInnerData(response);
        setCount(response.length);
      })
      .catch(() => {
        console.error("error fetching findings data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SimpleTableComponent
      isLoading={isLoading}
      topToolbarProps={{
        onReload: () => {
          fetchData();
        },
      }}
      title={{ label: `${isLoading ? "" : count} Table With Reload` }}
      data={innerData}
      columns={data.columns}
    />
  );
};

export const TableWithReload: Story = {
  render: TableWithReloadComponent,
};

const TableWithCustomActionsInToolBarComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [innerData, setInnerData] = useState<any>([]);
  const [count, setCount] = useState<number>(0);

  const fetchData = () => {
    setIsLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.data);
      }, 2000);
    })
      .then((res) => {
        const response = res as Array<any>;
        setInnerData(response);
        setCount(response.length);
      })
      .catch(() => {
        console.error("error fetching findings data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SimpleTableComponent
      isLoading={isLoading}
      renderToolbarInternalActions={() => (
        <Button size="medium">Custom Action</Button>
      )}
      title={{ label: `${isLoading ? "" : count} Table With Custom Action` }}
      data={innerData}
      columns={data.columns}
    />
  );
};

export const TableTitleVariant: Story = {
  render: SimpleTableComponent,
  args: {
    ...data,
    ...onRowFeaturesWorkAround,
    topToolbarProps: { export: { enableExport: false } },
    title: {
      label: "Subtitle 2 variant grey color",
      variant: "subtitle2",
      color: "grey",
    },
  },
};

export const TableWithCustomActionsInToolBar: Story = {
  render: TableWithCustomActionsInToolBarComponent,
};

export const TableWithPathDisplay: Story = {
  render: SimpleTableComponent,
  args: {
    ...onRowFeaturesWorkAround,
    enableRowActions: false,
    isLoading: data.isLoading,
    densityCompact: data.densityCompact,
    data: Array.from({ length: 20 }).map(() => ({
      path: faker.helpers.arrayElement([
        "Company / subgroup#1 / subgroup#2 / subgroup#3",
        "Epsagon / Subgroup",
        "Epsagon",
        "",
        "/",
        "/Epsagon",
        "Company / subgroup#1 / subgroup#2 / subgroup#3",
        "Epsagon / Subgroup",
      ]),
    })),
    title: { label: "Table With Path Display" },
    columns: [
      {
        header: "Path",
        accessorKey: "path",
        Cell: ({ renderedCellValue }: any) => (
          <PathDisplay path={renderedCellValue} />
        ),
      },
    ],
  },
};

export const TableRowIsLink: Story = {
  render: (args) => <SimpleTableComponent {...args} />,
  args: {
    ...data,
    onRowLinkClick: ({ cell }) => {
      console.info("Row link created! Cell data: ", cell);
      return "https://www.google.com";
    },
  },
};

export const TableRowIsClickable2: Story = {
  render: (args) => <SimpleTableComponent {...args} />,
  args: {
    ...data,
    ...onRowFeaturesWorkAround,
    muiTableBodyRowProps: ({ row }) => {
      return {
        onClick: (e) => {
          e.stopPropagation();
          console.info("Row clicked! Row value: ", row);
          // EXAMPLE: open a link
          //window.open("https://google.com", "_blank");
        },
        /*
        // FOR non-primary pointing device buttons
        onAuxClick: (e) => {
          if (e.button === 1) {
            console.info("Row clicked! Row value: ", row);
            window.open("google.com", "_blank");
          }
        },
        */
        sx: { cursor: "pointer" },
      };
    },
  },
};
