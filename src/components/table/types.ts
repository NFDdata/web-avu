import { Column } from 'react-table';

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: Column<Data>[];
  dataLoading: boolean;
  sortById?: SortById<Data>;
  sortbyDesc?: boolean;
  disableSortBy?: boolean;
  disabledRow?: {
    id: string;
    value: string;
  };
  pl?: number;
  pr?: number;
};

export type SortById<T> = Extract<keyof T, string> | 'name';

export type TableProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
  dataLoading: boolean;
  sortById?: SortById<T>;
  sortbyDesc?: boolean;
  disableSortBy?: boolean;
  columnsVisibility?: {
    base?: number[];
    sm?: number[];
    md?: number[];
    lg?: number[];
    xl?: number[];
    '2xl'?: number[];
  };
  maxHeight?: string | number;
  width?: string | number | string[];
  pl?: number;
  pr?: number;
  pagination?: boolean;
  handlePagination?: (page: number, limit: number) => void;
  totalDocs?: number;
  pageNum?: number;
  setPageNum?: (pageNum: number) => void;
  pageSize?: number;
  setPageSize?: (pageNum: number) => void;
};

export interface TextTableProps {
  label: string;
  fontWeight?: string;
  paddingLeft?: string;
  color?: string;
  align?: 'start' | 'center' | 'end';
  showTooltip?: boolean;
}
