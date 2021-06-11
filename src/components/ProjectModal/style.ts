import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  z-index: 1000;

  width: 100%;
  max-width: 1180px;

  overflow: hidden;

  > button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    border: none;
    background-color: #ffffff10;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease-in-out;

    img {
      width: 1rem;
      height: auto;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 650px) {
    > button {
      top: 3rem;
      right: 3rem;

      width: 3rem;
      height: 3rem;

      img {
        width: 1.5rem;
      }
    }
  }
`;

export const ImageSection = styled.section`
  width: 100%;
  padding-bottom: 0%;

  > div {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 650px) {
    width: 600px;
    height: 600px;
  }
`;

export const ProjectDetails = styled.section`
  flex: 1;
  min-height: 600px;

  padding: 3rem;
  background-color: var(--background);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  strong {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text);

    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
    line-height: 1.75rem;

    margin-bottom: 1.5rem;
  }

  > div {
    margin-top: auto;

    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;

    a {
      border: none;
      background-color: transparent;

      display: flex;
      align-items: center;

      padding: 1rem;
      transition: all ease-in-out 0.3s;

      &:hover {
        background-color: var(--primary);
      }

      span {
        font-size: 1.25rem;
        color: var(--text);
      }

      img {
        width: 1.5rem;
        height: auto;

        filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(306deg)
          brightness(110%) contrast(100%);

        margin-right: 1rem;
      }
    }
  }

  section {
    margin-bottom: 1.5rem;
    margin-left: -0.25rem;

    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    > span {
      padding: 0.5rem 0.75rem;
      margin: 0.25rem;

      background-color: var(--primary);
      color: #fff;
    }
  }

  @media (max-width: 650px) {
    padding: 1.5rem;

    strong {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    > div {
      a {
        span {
          font-size: 1rem;
        }
        img {
          width: 1.25rem;
        }
      }
    }

    section {
      > span {
        font-size: 0.875rem;
      }
    }
  }
`;
