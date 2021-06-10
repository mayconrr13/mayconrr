import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  padding: 8rem 0;

  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: saturate(0);
  }

  > div {
    width: 100%;
    max-width: 1180px;
    padding: 0 1.5rem;
    margin: 0 auto;

    z-index: 3;

    > section {
      max-width: 480px;
      padding: 6rem 6rem;
      margin-left: auto;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      background-color: var(--primary-t50);

      h2 {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text);

        margin: 0 auto 3rem auto;
      }

      strong {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-2);

        margin-bottom: 0.375rem;
      }

      span {
        font-size: 1rem;
        color: #ffffff;

        margin-bottom: 1.5rem;
      }

      > div {
        display: flex;
        align-items: center;

        a {
          & + a {
            margin-left: 2rem;
          }

          img {
            width: 1.5rem;
            height: auto;

            filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(306deg)
              brightness(110%) contrast(100%);
          }
        }
      }
    }
  }

  @media (min-width: 500px) {
    > div {
      > section {
        h2 {
          font-size: 3rem;
        }

        strong,
        span {
          font-size: 1.5rem;
        }

        span {
          margin-bottom: 2rem;
        }
      }
    }
  }
`;
