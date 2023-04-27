import { ReactNode } from 'react';
import { PlacementWithLogical } from '@chakra-ui/react';

export type CustomTooltipProps = {
  children: ReactNode;
  label: string;
  labelColor?: string;
  color?: string;
  width?: string;
  maxWidth?: string;
  padding?: string;
  placement?: PlacementWithLogical;
  height?: string | number;
  colorText?: string;
  pt?: string;
};
