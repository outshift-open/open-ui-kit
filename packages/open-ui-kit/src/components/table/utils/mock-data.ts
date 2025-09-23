/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { faker } from "@faker-js/faker";
import { MRT_ColumnDef } from "material-react-table";

faker.seed(42);

export const mainTableMockData = {
  columns: [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Phone",
      accessorKey: "phone",
      enableSorting: false,
    },
    {
      header: "firstName",
      accessorKey: "firstName",
    },
    {
      header: "lastName",
      accessorKey: "lastName",
    },
  ] as MRT_ColumnDef<{
    id: string;
    name: string;
    phone: string;
    firstName: string;
    lastName: string;
  }>[],
  data: Array.from({ length: 20 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  })),
  densityCompact: false,
  isLoading: false,
};

export const subTableMockData = {
  columns: [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      header: "Address",
      accessorKey: "address",
    },
    {
      header: "Phone",
      accessorKey: "phone",
      enableSorting: false,
    },
    {
      header: "Git Branch",
      accessorKey: "gitBranch",
    },
  ] as MRT_ColumnDef<object>[],
  data: Array.from({ length: 20 }).map(() => ({
    id: faker.string.uuid(),
    address: faker.location.streetAddress(),
    phone: faker.phone.number(),
    gitBranch: faker.git.branch(),
  })),
  densityCompact: false,
  isLoading: false,
};
