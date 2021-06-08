import Head from 'next/head';
import { Header } from '../components/Header';
import { HomeSection } from '../sections/HomeSection';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Maycon</title>
      </Head>

      <Header />
      <HomeSection />
    </>
  );
}
