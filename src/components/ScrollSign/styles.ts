import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    color: var(--primary);

    transform: translateY(0);
  }
  50% {
    color: #ffffff;
    transform: translateY(0.75rem);
  }
  100% {
    color: var(--primary);
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  svg {
    width: 1.5rem;
    height: auto;

    animation: ${scroll} 2s linear infinite;

    &:nth-child(2) {
      animation-delay: 0.25s;
    }

    &:nth-child(3) {
      animation-delay: 0.5s;
    }

    & + svg {
      margin-top: -0.8rem;
    }
  }
`;
