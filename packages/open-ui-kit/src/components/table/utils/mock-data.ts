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
