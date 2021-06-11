/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { SideButtons } from '../SideButtons';

import { Container, Navigation, MenuButton } from './styles';
import { useActiveSection } from '../../hooks/useActiveSection';

export const Header = (): JSX.Element => {
  const { activeSection, setActiveSection } = useActiveSection();
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
          onClick={() => setMenuIsOpen(false)}
        >
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <Link href="#home">
                <a>HOME</a>
              </Link>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <Link href="#about">
                <a>ABOUT</a>
              </Link>
            </li>
            <li className={activeSection === 'techs' ? 'active' : ''}>
              <Link href="#techs">
                <a>TECHS</a>
              </Link>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <Link href="#projects">
                <a>PROJECTS</a>
              </Link>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
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
