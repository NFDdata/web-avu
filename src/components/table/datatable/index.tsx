import { ReactElement, useMemo } from 'react';
import { useTable } from 'react-table';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Loading from '@components/loading';
import { colors } from 'theme';

import { DataTableProps } from '../types';

const DataTable = <Data extends object>({
  data,
  columns,
  dataLoading
}: DataTableProps<Data>): ReactElement | null => {
  const tableData = useMemo(() => data, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: columns,
      data: tableData
    });

  return (
    <Table {...getTableProps()}>
      <Thead bg={colors.navbar}>
        {headerGroups.map((headerGroup, idx) => {
          return (
            <Tr
              {...headerGroup.getHeaderGroupProps()}
              color={'black'}
              key={`${idx + 1}`}>
              {headerGroup.headers.map((column, index: number) => {
                return (
                  <Th
                    key={`${index + 1} - header`}
                    paddingTop="24px"
                    // border="none"
                    color={colors.white}
                    fontSize={'14px'}
                    fontWeight="bold"
                    textAlign={'center'}>
                    {column.render('Header')}
                  </Th>
                );
              })}
            </Tr>
          );
        })}
      </Thead>
      <Tbody {...getTableBodyProps()} w="full">
        {dataLoading ? (
          <Tr>
            <Td colSpan={10}>
              <Loading />
            </Td>
          </Tr>
        ) : (
          rows.map((row, index) => {
            prepareRow(row);

            return (
              <Tr
                {...row.getRowProps()}
                key={`-${index + 1}`}
                color={'rgba(0, 0, 0, 0.24)'}>
                {row.cells.map((cell, idx) => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={`${idx + 1}`}
                      textAlign={'center'}
                      color={'black'}
                      fontSize={'12px'}
                      fontWeight={600}>
                      {cell.render('Cell')}
                    </Td>
                  );
                })}
              </Tr>
            );
          })
        )}
      </Tbody>
    </Table>
  );
};

export default DataTable;
