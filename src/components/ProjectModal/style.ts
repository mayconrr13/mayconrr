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
    top: 3rem;
    right: 3rem;

    border: none;
    background-color: transparent;

    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 2rem;

    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const ImageSection = styled.section`
  width: 600px;
  height: 600px;

  > div {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
`;
