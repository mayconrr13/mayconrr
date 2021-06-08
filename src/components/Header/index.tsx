import { useState } from 'react';
import { SideButtons } from '../SideButtons';

import { Container, Navigation, MenuButton } from './styles';

export const Header = (): JSX.Element => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  console.log(menuIsOpen);

  return (
    <Container>
      <div>
        <img src="/logo.svg" alt="Logo" />

        <Navigation menuIsOpen={menuIsOpen}>
          <ul>
            <li>
              <a onClick={() => setMenuIsOpen(false)} href="#home">
                HOME
              </a>
            </li>
            <li>
              <a onClick={() => setMenuIsOpen(false)} href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a onClick={() => setMenuIsOpen(false)} href="#techs">
                TECHS
              </a>
            </li>
            <li>
              <a onClick={() => setMenuIsOpen(false)} href="#projects">
                PROJECTS
              </a>
            </li>
            <li>
              <a onClick={() => setMenuIsOpen(false)} href="#contact">
                CONTACT
              </a>
            </li>
          </ul>

          <SideButtons />
        </Navigation>

        <MenuButton
          type="button"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          aria-hidden
          menuIsOpen={menuIsOpen}
        >
          <span />
          <span />
          <span />
        </MenuButton>
      </div>
    </Container>
  );
};
