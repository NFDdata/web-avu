import { ActiveAlertTypeEnum } from 'context/activealertmessage/constants';

// types of components

export type AlertMessageProps = {
  width?: string;
  type?: ActiveAlertTypeEnum;
  label: string;
  isOpen: boolean;
  onClose: () => void;
};

export type PropsType = {
  bgColor: string;
  icon?: JSX.Element;
};
