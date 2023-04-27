import { FC } from 'react';
import { Box, FlexProps, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';

// This is a component that decide what color if white theme or dark theme
export const Container: FC<FlexProps> = ({ title, ...props }) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'white', dark: 'black' };
  const color = { light: 'black', dark: 'white' };

  return (
    <>
      <Head>
        <title>VICA</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, with=device-width" />
      </Head>
      <Box
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        scrollBehavior={'smooth'}
        {...props}
      />
    </>
  );
};
