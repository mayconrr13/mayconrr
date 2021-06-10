import type { AppProps } from 'next/app';
import { ActiveSectionProvider } from '../hooks/useActiveSection';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ActiveSectionProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ActiveSectionProvider>
  );
}

export default MyApp;
