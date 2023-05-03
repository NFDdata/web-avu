import { FC } from 'react';
import { Button, Fade, Flex, Text } from '@chakra-ui/react';
import CustomFormControl from '@components/customformcontrol';
import SigninAlert from '@components/siginalert';

import * as styles from './styles';
import { SingInProps } from './types';

const SignIn: FC<SingInProps> = ({
  formik,
  loading,
  error,
  control,
  onClose
}) => {
  return (
    <Flex {...styles.container}>
      <Flex>{/* <Img src={'#'} alt="#" w={'165px'} /> */}</Flex>
      <Flex {...styles.containerView}>
        <Text {...styles.signInTitle} color={'black'}>
          ¡BIENVENIDO A AVU!
        </Text>
        <Flex {...styles.containerForm}>
          {control && (
            <Fade in={control}>
              <SigninAlert
                spaceProps={{ m: '0.5em auto' }}
                onClose={() => onClose && onClose()}>
                <Text fontSize={'14px'}>{error}</Text>
              </SigninAlert>
            </Fade>
          )}
          <Text {...styles.signInLabel}>Inicia sesion</Text>
          <form onSubmit={formik.handleSubmit}>
            <CustomFormControl
              {...styles.inputStyle}
              id="email"
              label="Email"
              placeholder="Ingrese email"
              formik={formik}
            />
            <CustomFormControl
              {...styles.inputStyle}
              id="password"
              type="password"
              label="Contraseña"
              placeholder="Ingrese contraseña"
              formik={formik}
            />
            <Button
              variant="loginStyle"
              width="full"
              mt={4}
              isLoading={loading}
              type="submit">
              Iniciar sesión
            </Button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignIn;
