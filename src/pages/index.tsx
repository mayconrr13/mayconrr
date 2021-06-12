import Head from 'next/head';
import { ParallaxBanner } from 'react-scroll-parallax';

import { Header } from '../components/Header';
import { SideButtons } from '../components/SideButtons';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { HomeSection } from '../sections/HomeSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { TechSection } from '../sections/TechsSection';

import { Container } from '../styles/pages/Home';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Maycon</title>
      </Head>

      <Header />
      <ParallaxBanner
        layers={[
          {
            image: '/home-bg.jpg',
            amount: 0.3,
          },
        ]}
        style={{
          position: 'absolute',
          height: '100vh',
          width: '100vw',
        }}
        className="home-parallax"
      />
      <HomeSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
      <footer>
        {'>>'} Desenvolvido por Maycon {'<<'}
      </footer>

      <SideButtons />
    </Container>
  );
}
