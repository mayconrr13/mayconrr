import styled from 'styled-components';

export const Container = styled.section`
  padding: 10rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text);

    margin-bottom: 3rem;
  }

  > div {
    margin: 0 auto;
    padding: 0 1.5rem;
    width: 100%;
    max-width: 1180px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      width: 300px;
      height: 300px;
      border-radius: 1.5rem;

      background-image: url('/profile.jpg');
      background-position: top;
      background-size: cover;
    }
  }

  @media (min-width: 900px) {
    h2 {
      font-size: 3rem;
      margin-bottom: 8rem;
    }

    > div {
      flex-direction: row-reverse;

      > div {
        min-width: 500px;
        max-width: 500px;
        height: 500px;

        margin-left: 5rem;
      }
    }
  }
`;

export const AboutText = styled.section`
  margin-top: 2.5rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);

    margin-bottom: 1rem;
    margin-right: auto;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
    line-height: 1.75rem;
    text-align: justify;

    & + p {
      margin-top: 0.5rem;
    }
  }

  a {
    width: 240px;
    height: 3.75rem;

    margin: 2rem auto 0 auto;

    border: none;
    border-radius: 0.25rem;
    background-color: var(--primary);

    color: var(--text);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 3.75rem;
    text-align: center;

    transition: filter linear 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 900px) {
    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }

    a {
      margin-left: 0;
      font-size: 1.25rem;
    }
  }
`;
