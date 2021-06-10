import styled, { css } from 'styled-components';

interface HeaderProps {
  windowPosition: number;
}

export const Container = styled.header<HeaderProps>`
  width: 100vw;
  height: 5rem;

  border: none;
  border-bottom: 1px solid var(--gray-1);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 997;

  transition: background-color 0.3s ease-in-out;

  ${({ windowPosition }) =>
    windowPosition >= 150
      ? css`
          background-color: var(--background);
          filter: drop-shadow(5px 5px 5px #00000025);
        `
      : css`
          background-color: transparent;
        `};

  > div {
    display: flex;
    align-items: center;

    margin: 0 auto;
    padding: 0 1.5rem;

    width: 100%;
    max-width: 1180px;
    height: 100%;

    position: relative;

    > img {
      height: 1.5rem;
      width: auto;

      margin-right: auto;
    }
  }

  @media (min-width: 900px) {
    > div {
      img {
        height: 2rem;
      }
    }
  }
`;

interface NavigationProps {
  menuIsOpen: boolean;
  windowPosition: number;
}

export const Navigation = styled.nav<NavigationProps>`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5rem 0 3rem 0;

  background-color: var(--background);

  position: absolute;
  top: 0;
  right: 0;
  z-index: 998;

  transition: all 0.3s;

  opacity: ${({ menuIsOpen }) => (menuIsOpen ? 1 : 0)};
  transform: translateX(${({ menuIsOpen }) => (menuIsOpen ? '0' : '300px')});

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-top: 1px solid #363636;
    border-bottom: 1px solid #363636;

    li {
      width: 100%;
      list-style-type: none;
      cursor: pointer;

      & + li {
        border-top: 1px solid #363636;
      }

      a {
        display: block;
        width: 300px;
        height: 3.5rem;

        text-align: center;
        line-height: 3.5rem;
        letter-spacing: 1px;

        color: var(--text);

        &:hover {
          color: var(--primary);
          font-weight: 700;
        }
      }

      //styling active link
      &.active {
        a {
          color: var(--primary);
          font-weight: 700;
        }
      }
    }
  }

  aside {
    display: flex;
    margin-top: auto;

    span {
      transform: rotate(90deg);
      margin: 0.25rem 0;
    }

    div {
      flex-direction: row;

      a + a {
        margin-left: 2rem;
        margin-top: 0;
      }
    }
  }

  @media (min-width: 900px) {
    transition: none;
    opacity: 1;
    transform: translateX(0);

    display: flex;
    flex-direction: row;

    position: static;
    padding: 0;

    height: 100%;

    background-color: transparent;

    ul {
      display: flex;
      align-items: center;
      flex-direction: row;

      border: none;

      li {
        border: none;

        a {
          width: inherit;
          height: 5rem;
          line-height: 5rem;

          color: ${({ windowPosition }) =>
            windowPosition >= 150 ? 'var(--text)' : '#FFFFFF'};

          &:hover {
            color: ${({ windowPosition }) =>
              windowPosition >= 150 ? 'var(--text)' : '#FFFFFF'};
            position: relative;

            &:after {
              content: '';
              position: absolute;
              bottom: 1px;
              left: 0;
              width: 100%;
              height: 0.25rem;
              background-color: var(--primary);
              border-radius: 2px;
            }
          }
        }

        & + li {
          margin-left: 3rem;
        }

        //styling active link
        &.active {
          a {
            color: ${({ windowPosition }) =>
              windowPosition >= 150 ? 'var(--text)' : '#FFFFFF'};
            position: relative;

            &:after {
              content: '';
              position: absolute;
              bottom: 1px;
              left: 0;
              width: 100%;
              height: 0.25rem;
              background-color: var(--primary);
              border-radius: 2px;
            }
          }
        }
      }
    }

    aside {
      display: none;
    }
  }
`;

interface MenuButtonProps {
  menuIsOpen: boolean;
  windowPosition: number;
}

export const MenuButton = styled.button<MenuButtonProps>`
  border: none;
  background-color: transparent;

  z-index: 999;

  span {
    display: block;
    margin-left: auto;

    height: 0.25rem;

    background-color: ${({ windowPosition, menuIsOpen }) =>
      windowPosition >= 150 || menuIsOpen ? 'var(--text)' : '#FFFFFF'};

    transform-origin: 1px 2 px;
    transition: all 0.2s ease-in-out;

    & + span {
      margin-top: 3px;
    }

    &:nth-child(1) {
      width: 1.5rem;

      ${({ menuIsOpen }) =>
        menuIsOpen
          ? css`
              transform: translateY(9px) rotateZ(45deg);
            `
          : css`
              transform: rotateZ(0);
            `}
    }

    &:nth-child(2) {
      width: 1.125rem;

      ${({ menuIsOpen }) =>
        menuIsOpen
          ? css`
              opacity: 0;
              transform: translateX(-20px);
            `
          : css`
              opacity: 1;
              transform: translateX(0);
            `}
    }

    &:nth-child(3) {
      width: 0.75rem;

      ${({ menuIsOpen }) =>
        menuIsOpen
          ? css`
              width: 1.5rem;
              transform: translateY(-5px) rotate(-45deg);
            `
          : css`
              transform: rotateZ(0);
            `}
    }
  }

  &:hover {
    span {
      width: 1.5rem;
    }
  }

  @media (min-width: 900px) {
    display: none;
  }
`;
