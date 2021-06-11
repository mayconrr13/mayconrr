import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: #1d1d1daa;

  > img {
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    filter: blur(1px);
    object-fit: cover;
  }

  p {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 400;
  }

  h1 {
    color: var(--primary);
    font-size: 4rem;
    font-weight: 800;
  }

  span {
    color: var(--gray-2);
    font-size: 1rem;
    font-weight: 400;
  }

  > div {
    display: flex;
    align-items: center;

    opacity: 0;

    margin-top: 2rem;

    a {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 2px solid var(--primary);

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: var(--primary);
      }

      & + a {
        margin-left: 1.5rem;
      }

      img {
        width: 1.25rem;
        height: auto;

        filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(306deg)
          brightness(110%) contrast(100%);
      }
    }

    &:last-child {
      position: absolute;
      bottom: 3rem;

      flex-direction: column;
    }
  }

  @media (min-width: 600px) {
    p {
      font-size: 2.25rem;
    }

    h1 {
      font-size: 6rem;
    }

    span {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 900px) {
    p {
      font-size: 3rem;
    }

    h1 {
      font-size: 8rem;
    }

    span {
      font-size: 1.5rem;
    }

    div {
      a {
        width: 3rem;
        height: 3rem;

        img {
          width: 1.375rem;
        }
      }
    }
  }
`;
