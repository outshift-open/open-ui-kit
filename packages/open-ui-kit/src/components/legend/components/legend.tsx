/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { JSX } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { styles } from "../styles/styles";
import { Tooltip, TooltipProps, TooltipSize } from "@/components";

export interface ILegendProps<T extends string> {
  headers: T[];
  rows: TRow<T>[];
  isHorizontal?: boolean;
}

export interface TRow<T extends string> {
  color?: string | number;
  icon?: React.ReactNode;
  onClick?: ({ color, icon, values }: TRow<T>) => void;
  values: { [K in T]: string | number | JSX.Element };
  tooltip?: React.ReactNode;
  tooltipProps?: Partial<TooltipProps>;
}

export const Legend = <T extends string>({
  headers,
  rows,
  isHorizontal = false,
}: ILegendProps<T>) => {
  const theme = useTheme();

  return (
    <TableContainer sx={styles(theme).Table(isHorizontal)}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                sx={
                  index === 0
                    ? styles(theme).leftMostHeaderCell(isHorizontal)
                    : styles(theme).headerCell(isHorizontal)
                }
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            (
              { color, icon, onClick, values, tooltip, tooltipProps },
              index,
            ) => {
              const rowContent = (
                <TableRow
                  key={index}
                  {...(onClick && {
                    onClick: () => onClick({ color, icon, values }),
                    sx: styles(theme).clickable,
                  })}
                >
                  {headers.map((header, columnIndex) => (
                    <TableCell
                      key={columnIndex}
                      sx={
                        columnIndex === 0
                          ? styles(theme).leftMostColumnCell
                          : styles(theme).cell
                      }
                    >
                      {columnIndex === 0 && color ? (
                        <span
                          style={{
                            ...styles(theme).circle,
                            backgroundColor: color as string,
                          }} // Color should always be string
                        />
                      ) : null}
                      {columnIndex === 0 && icon && (
                        <Box component="span" mr={0.5}>
                          {icon}
                        </Box>
                      )}
                      {values[header]}
                    </TableCell>
                  ))}
                </TableRow>
              );

              return tooltip ? (
                <Tooltip
                  key={index}
                  title={tooltip}
                  size={TooltipSize.Medium}
                  {...tooltipProps}
                  followCursor
                >
                  {rowContent}
                </Tooltip>
              ) : (
                rowContent
              );
            },
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
