import { FiChevronDown } from 'react-icons/fi';

import { Container } from './styles';

export const ScrollSign = (): JSX.Element => {
  return (
    <Container>
      <FiChevronDown />
      <FiChevronDown />
      <FiChevronDown />
    </Container>
  );
};
