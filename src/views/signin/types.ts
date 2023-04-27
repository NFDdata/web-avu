import { FormikProps } from 'formik';

export type SingInProps = {
  formik: FormikProps<Record<string, string | boolean | undefined>>;
  loading: boolean;
  control: boolean;
  onClose?: () => void;
  error?: string;
};
