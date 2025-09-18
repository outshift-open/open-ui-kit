import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { Pagination, PaginationProps } from "../components/pagination";

/**
 * ### The Pagination component enables the user to select a specific page from a range of pages.
 */

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const ExampleBasicPagination = (args: PaginationProps) => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} {...args} />
      <Pagination count={10} color="primary" {...args} />
      <Pagination count={10} disabled {...args} />
    </Stack>
  );
};

export const BasicPagination: Story = {
  render: ExampleBasicPagination,
  args: { showFirstButton: true, showLastButton: true },
};

const ExampleOutlinedPagination = (args: PaginationProps) => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" {...args} />
      <Pagination count={10} variant="outlined" color="primary" {...args} />
      <Pagination count={10} variant="outlined" disabled {...args} />
    </Stack>
  );
};

export const OutlinedPagination: Story = {
  render: ExampleOutlinedPagination,
};

const ExampleRoundedPagination = (args: PaginationProps) => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" {...args} />
      <Pagination count={10} variant="outlined" shape="rounded" {...args} />
    </Stack>
  );
};

export const RoundedPagination: Story = {
  render: ExampleRoundedPagination,
};
