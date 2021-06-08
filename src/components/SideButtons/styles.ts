import styled from 'styled-components';

export const Container = styled.aside`
  position: static;

  display: none;
  flex-direction: column;
  align-items: center;

  img {
    width: 1.5rem;
    height: auto;

    filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(306deg)
      brightness(110%) contrast(100%);

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: invert(72%) sepia(98%) saturate(1921%) hue-rotate(352deg)
        brightness(99%) contrast(106%);
    }
  }

  > button {
    border: none;
    background-color: transparent;
  }

  span {
    width: 1px;
    height: 4rem;
    background-color: var(--text);

    margin: 2rem 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    a + a {
      margin-top: 2rem;
    }
  }

  @media (min-width: 900px) {
    position: absolute;
    bottom: 3rem;
    left: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
