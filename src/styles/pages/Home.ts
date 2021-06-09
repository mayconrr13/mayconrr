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
`;
