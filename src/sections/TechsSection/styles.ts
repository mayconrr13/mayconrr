import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  padding: 8rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--background-2);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text);

    margin-bottom: 3rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;
    max-width: 1180px;
  }

  @media (max-width: 350px) {
    ul {
      justify-content: center;
    }
  }
`;

export const TechItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  position: relative;
  margin: 5rem 0 0 0;

  list-style-type: none;

  width: 150px;
  height: 150px;

  transition: all 0.2s linear;

  &:hover {
    padding: 1.5rem;

    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);

    img {
      width: 60%;
      height: 60%;

      filter: invert(72%) sepia(98%) saturate(1921%) hue-rotate(352deg)
        brightness(99%) contrast(106%);
    }

    div {
      opacity: 1;
      transition-delay: 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;

    margin-bottom: auto;

    filter: invert(21%) sepia(0%) saturate(9%) hue-rotate(286deg)
      brightness(97%) contrast(96%);

    transition: all 0.2s ease-in-out;
  }

  div {
    position: absolute;
    bottom: 1rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    opacity: 0;
    transition: opacity 0.1s linear;
    transition-delay: 0.2s;
  }

  span {
    color: var(--gray-3);
    font-size: 0.75rem;
    text-align: center;
  }

  strong {
    color: var(--text);
    font-size: 1rem;
    text-align: center;
  }

  @media (min-width: 500px) {
    margin: 5rem 0.5rem 0 0.5rem;
  }

  @media (min-width: 650px) {
    margin: 5rem 1rem 0 1rem;
  }

  @media (min-width: 750px) {
    margin: 5rem 2rem 0 2rem;
  }

  @media (min-width: 900px) {
    width: 180px;
    height: 180px;

    margin: 5rem 2.5rem 0 2.5rem;
  }
`;
