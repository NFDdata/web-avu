import { useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react';
import { colors } from 'theme';

type PaginationPropsPageButtons = {
  totalItems: number;
  pageSize: number;
  pageNum: number;
  setPageNum: (pageNum: number) => void;
};

const PageButtons: React.FC<PaginationPropsPageButtons> = ({
  totalItems,
  pageSize,
  pageNum,
  setPageNum
}) => {
  const pagesQuantity = 5;
  const totalPages = Math.ceil(totalItems / pageSize);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  let displayingPages = pages;

  if (totalPages > pagesQuantity) {
    if (pageNum < pagesQuantity - 1)
      displayingPages = pages.slice(0, pagesQuantity - 1);

    if (
      pageNum >= pagesQuantity - 1 &&
      pageNum <= totalPages - pagesQuantity + 2
    )
      displayingPages = pages.slice(pageNum - 2, pageNum + 1);

    if (pageNum > totalPages - pagesQuantity + 2)
      displayingPages = pages.slice(totalPages - pagesQuantity + 1, totalPages);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChangePage = (event: any) => {
    const { value } = event.target;

    setPageNum(value as number);
  };

  useEffect(() => {
    if (totalPages !== 0 && pageNum > totalPages) setPageNum(totalPages);
  }, [pageSize]);

  const renderButtons = () => {
    const buttons = [];

    if (pageNum >= pagesQuantity - 1 && totalPages > pagesQuantity)
      buttons.push(
        <Button
          key={'0'}
          variant="action"
          value={1}
          onClick={handleOnChangePage}
          isActive={pageNum === 1}
          _active={{ bg: colors.secondary['600'] }}
          fontSize={'16px'}>
          {1}
        </Button>,
        <Button variant={'action'} pointerEvents="none" value={1}>
          ...
        </Button>
      );
    buttons.push(
      displayingPages.map(page => {
        return (
          <Button
            key={page}
            variant="action"
            value={page}
            onClick={handleOnChangePage}
            isActive={pageNum === page}
            _active={{ bg: colors.secondary['600'] }}
            fontSize={'16px'}>
            {page}
          </Button>
        );
      })
    );

    if (pageNum <= totalPages - pagesQuantity + 2 && totalPages > pagesQuantity)
      buttons.push(
        <Button variant="action" pointerEvents="none" value={1} key={'...'}>
          ...
        </Button>,
        <Button
          key={totalPages.toString()}
          variant="action"
          value={totalPages}
          onClick={handleOnChangePage}
          isActive={pageNum === totalPages}
          _active={{ bg: colors.secondary['600'] }}
          fontSize={'16px'}>
          {totalPages}
        </Button>
      );

    return buttons;
  };

  return (
    <Flex
      justify={'space-between'}
      align={'baseline'}
      w="full"
      color={colors.primary['700']}>
      <Flex
        justify={'flex-start'}
        align={'center'}
        cursor={'pointer'}
        w="90px"
        onClick={() => setPageNum(pageNum > 1 ? pageNum - 1 : 1)}>
        {pageNum > 1 && (
          <Flex align={'center'}>
            <FiChevronLeft />
            <Text userSelect="none" fontWeight="600" fontSize={'16px'}>
              Anterior
            </Text>
          </Flex>
        )}
      </Flex>
      <ButtonGroup variant={'outline'} spacing="2" mr="6" size="sm">
        {renderButtons()}
      </ButtonGroup>
      <Flex
        w={'90px'}
        cursor="pointer"
        justify={'flex-end'}
        align={'center'}
        onClick={() =>
          setPageNum(pageNum < totalPages ? pageNum + 1 : totalPages)
        }>
        {pageNum < totalPages && (
          <>
            <Flex align={'center'}>
              <Text userSelect="none" fontWeight="600" fontSize={'16px'}>
                Siguiente
              </Text>
            </Flex>
            <FiChevronRight />{' '}
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default PageButtons;
