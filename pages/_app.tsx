import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from '../themes';
import {SessionProvider} from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps },}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme = {darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
</SessionProvider>
  )
}

export default MyApp
