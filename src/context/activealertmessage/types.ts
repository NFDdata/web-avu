import { ActiveAlertTypeEnum } from './constants';

export type ActiveAlertMessageType = {
  isOpen: boolean;
  message: string;
  type: ActiveAlertTypeEnum;
  setValues: (message: string, type: ActiveAlertTypeEnum) => void;
  onClose: () => void;
};
