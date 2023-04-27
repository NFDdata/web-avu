import { Flex } from '@chakra-ui/layout';

import PageButtons from './pagebuttons';

export type PaginationProps = {
  totalItems: number;
  pageSize: number;
  setPageSize?: React.Dispatch<React.SetStateAction<number>>;
  pageNum: number;
  setPageNum: (pageNum: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  pageSize,
  pageNum,
  setPageNum
}) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <PageButtons
        totalItems={totalItems}
        pageSize={pageSize}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </Flex>
  );
};

export default Pagination;
