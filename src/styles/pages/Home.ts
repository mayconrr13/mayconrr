import styled from 'styled-components';

export const Container = styled.main`
  overflow-x: hidden;

  padding: 0;
  margin: 0;

  > aside {
    position: fixed;

    bottom: 3rem;
    left: 3rem;
    z-index: -10;
  }

  footer {
    width: 100%;
    height: 6rem;
    background-color: var(--background);
    color: var(--text);
    line-height: 6rem;
    text-align: center;
    font-size: 1rem;

    @media (min-width: 900px) {
      font-size: 1.25rem;
    }
  }
`;
