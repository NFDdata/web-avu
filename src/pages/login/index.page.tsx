import { useState } from 'react';
import { AxiosError } from 'axios';
import { statusLoginEnum } from 'constants/enum';
import { useActiveAlertMessage } from 'context/activealertmessage';
import { ActiveAlertTypeEnum } from 'context/activealertmessage/constants';
import { useFormik } from 'formik';
import BaseResponse from 'models/response.model';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import SignIn from 'views/signin';

const Index: NextPage = () => {
  const { setValues } = useActiveAlertMessage();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [control, setControl] = useState<boolean>(false);

  const formik = useFormik<Record<string, string | boolean | undefined>>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async ({ email, password }) => {
      setLoading(true);

      await signIn('sign-in', {
        email,
        password,
        redirect: false
      })
        .then(res => {
          if (res?.error === statusLoginEnum.unauthorized) {
            setError('Usuario no existe o la contraseña es incorrecta');
            setControl(true);
          } else if (res?.error === statusLoginEnum.pendingConfirmation) {
            setError('El usuario no ha confirmado su cuenta');
            setControl(true);
          } else {
            setValues(
              'Usuario ingresado con éxito.',
              ActiveAlertTypeEnum.SUCCESS
            );
            router.push('/');
          }
        })
        .catch((err: AxiosError<BaseResponse>) => {
          console.error('el error:', err);
        });

      setLoading(false);
    },
    validate: values => {
      const errors: Record<string, string> = {};

      if (!values.email) errors.email = 'Debe ingresar un email';
      if (!values.password) errors.password = 'Debe ingresar una contraseña';

      return errors;
    }
  });

  const onClose = () => {
    setControl(false);
    setError(undefined);
  };

  return (
    <SignIn
      formik={formik}
      loading={loading}
      error={error}
      control={control}
      onClose={onClose}
    />
  );
};

export default Index;
