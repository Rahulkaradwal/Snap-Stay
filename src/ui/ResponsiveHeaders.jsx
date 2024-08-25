import styled from 'styled-components';
import Heading from '../ui/Heading';

const ResponsiveHeaders = styled(Heading)`
  @media (max-width: 480px) {
    font-size: 0.5rem;
  }
  @media (max-width: 783px) {
    font-size: 1rem;
  }
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  font-size: 2.2rem;
`;

export default ResponsiveHeaders;
