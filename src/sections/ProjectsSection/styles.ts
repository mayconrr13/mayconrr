import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  padding: 8rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text);

    margin-bottom: 3rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.25rem;

    width: 100%;
    max-width: 1180px;

    padding: 0 1.5rem;
    margin-top: 5rem;
  }
`;

export const ProjectItem = styled.article`
  width: 100%;
  padding-top: 100%;

  position: relative;

  &:hover {
    span,
    div {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
  }

  span {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    background-color: var(--primary-t50);

    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  div {
    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    opacity: 0;

    transition: opacity 0.3s ease-in-out;
    transition-delay: 0.1s;

    padding: 1rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;

      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: #efefef;
      line-height: 1.75rem;

      margin-bottom: 0.5rem;
    }

    button {
      border: none;
      background-color: #363636;

      margin-left: auto;

      width: 2.5rem;
      height: 2.5rem;

      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;

      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #ffffff;
        color: #363636;
      }
    }
  }

  @media (min-width: 650px) {
    width: 48%;
    padding-top: 48%;
  }

  @media (min-width: 1050px) {
    width: 32%;
    padding-top: 32%;
    /* width: calc((100% / 3) - (2 * 1.25rem));
    padding-top: calc((100% / 3) - (2 * 1.25rem)); */
  }
`;
