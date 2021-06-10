import { useEffect, useState } from 'react';
import Link from 'next/link';

import { SideButtons } from '../SideButtons';

import { Container, Navigation, MenuButton } from './styles';
import { useActiveSection } from '../../hooks/useActiveSection';

const sections = ['home', 'about', 'techs', 'projects', 'contact'];

export const Header = (): JSX.Element => {
  const { activeSection } = useActiveSection();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [windowYPosition, setWindowYPosition] = useState<number>(0);

  useEffect(() => {
    function getWindowData(): void {
      setWindowYPosition(window.pageYOffset);
    }

    window.addEventListener('scroll', getWindowData);

    return () => {
      window.removeEventListener('scroll', getWindowData);
    };
  }, []);

  return (
    <Container windowPosition={windowYPosition}>
      <div>
        <img src="/logo-white.svg" alt="Logo" />

        <Navigation
          menuIsOpen={menuIsOpen}
          windowPosition={windowYPosition}
          activeSection={activeSection}
          onClick={() => setMenuIsOpen(false)}
        >
          <ul>
            <li>
              <Link href="#home">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a>ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="#techs">
                <a>TECHS</a>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <a>PROJECTS</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>

          <SideButtons />
        </Navigation>

        <MenuButton
          type="button"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          aria-hidden
          menuIsOpen={menuIsOpen}
          windowPosition={windowYPosition}
        >
          <span />
          <span />
          <span />
        </MenuButton>
      </div>
    </Container>
  );
};
