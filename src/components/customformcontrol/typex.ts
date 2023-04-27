import { StyleProps } from '@chakra-ui/react';
import { FormikProps } from 'formik';

export interface CustromFormControlProps extends StyleProps {
  id: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  type?: string;
  disabled?: boolean;
  withColor?: boolean;
  maxLength?: number;
  value?: string;
  formik: FormikProps<Record<string, string | boolean | undefined>>;
}
