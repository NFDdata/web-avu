import { ActiveAlertMessageType } from './types';

export enum ActiveAlertTypeEnum {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error'
}

export const initialAlertMessage: ActiveAlertMessageType = {
  isOpen: false,
  message: '',
  type: ActiveAlertTypeEnum.SUCCESS,
  setValues: () => null,
  onClose: () => null
};
