import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 5rem;

  border: none;
  border-bottom: 1px solid var(--gray-1);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 997;

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
}

export const Navigation = styled.nav<NavigationProps>`
  height: 100vh;

  display: ${({ menuIsOpen }) => (menuIsOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  padding: 9rem 0 5rem 0;

  background-color: var(--background);

  position: absolute;
  top: 0;
  right: 0;
  z-index: 998;

  opacity: ${({ menuIsOpen }) => (menuIsOpen ? 1 : 0)};

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      width: 100%;
      list-style-type: none;

      a {
        display: block;
        width: 300px;
        height: 3.5rem;

        text-align: center;
        line-height: 3.5rem;
        letter-spacing: 1px;

        color: var(--text);

        border: 1px solid #363636;
        border-left: none;
        border-right: none;

        &:hover {
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
    opacity: 1;

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

      li {
        a {
          border: none;
          width: inherit;
          height: 5rem;
          line-height: 5rem;

          &:hover {
            color: var(--text);
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
      }
    }

    aside {
      display: none;
    }
  }
`;

interface MenuButtonProps {
  menuIsOpen: boolean;
}

export const MenuButton = styled.button<MenuButtonProps>`
  border: none;
  background-color: transparent;

  z-index: 999;

  span {
    display: block;
    margin-left: auto;

    height: 0.25rem;

    background-color: #ffffff;

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
