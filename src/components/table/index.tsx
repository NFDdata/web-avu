import { PropsWithChildren, ReactElement, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Pagination from '@components/pagination';

import DataTable from './datatable';
import { TableProps } from './types';

const Table = <T extends object>({
  columns,
  data,
  dataLoading,
  width,
  pr,
  pl,
  handlePagination,
  totalDocs,
  pageNum,
  setPageNum,
  pageSize
}: PropsWithChildren<TableProps<T>>): ReactElement | null => {
  const showPagination = totalDocs && totalDocs > 10;

  useEffect(() => {
    if (handlePagination && pageNum && pageSize)
      handlePagination(pageNum, pageSize);
  }, [pageNum, pageSize]);

  return (
    <Flex
      direction={'column'}
      align={'center'}
      borderColor="border"
      py="20px"
      justify={'center'}>
      <Box
        borderWidth={1}
        borderColor="gray.300"
        mb={'22px'}
        borderRadius="5px"
        overflowX={['auto']}
        w={width || 'full'}>
        <DataTable
          columns={columns}
          data={data}
          dataLoading={dataLoading}
          pr={pr}
          pl={pl}
        />
      </Box>
      {handlePagination && showPagination && setPageNum && pageNum ? (
        <Pagination
          totalItems={totalDocs || 0}
          pageSize={pageSize || 0}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      ) : null}
    </Flex>
  );
};

export default Table;
