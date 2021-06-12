import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ActiveSectionProvider } from '../hooks/useActiveSection';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ParallaxProvider>
      <ActiveSectionProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ActiveSectionProvider>
    </ParallaxProvider>
  );
}

export default MyApp;
