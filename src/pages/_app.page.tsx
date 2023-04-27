import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { ActiveAlertMessageProvider } from 'context/activealertmessage';
import dayjs from 'dayjs';
import { Layout } from 'layout';
import { queryClient } from 'lib/queryClient';
import { toastOptions } from 'lib/toaster';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { theme } from '../theme';

dayjs.locale('es');

const MyApp: NextPage<AppProps<{ session: Session }>> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <Fragment>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <ActiveAlertMessageProvider>
            <ChakraProvider resetCSS theme={theme}>
                  <Layout>
                    <Component {...pageProps} />
                    <Toaster toastOptions={toastOptions} position="top-left" />
                  </Layout>
            </ChakraProvider>
          </ActiveAlertMessageProvider>
        </QueryClientProvider>
      </SessionProvider>
    </Fragment>
  );
};

export default MyApp;
