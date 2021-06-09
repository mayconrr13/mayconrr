import Head from 'next/head';

import { Header } from '../components/Header';
import { AboutSection } from '../sections/AboutSection';
import { HomeSection } from '../sections/HomeSection';
import { TechSection } from '../sections/TechsSection';

import { Container } from '../styles/pages/Home';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Maycon</title>
      </Head>

      <Header />
      <HomeSection />
      <AboutSection />
      <TechSection />
    </Container>
  );
}
