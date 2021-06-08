import type { AppProps } from 'next/app';
import { SideButtons } from '../components/SideButtons';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <SideButtons />
    </>
  );
}

export default MyApp;
