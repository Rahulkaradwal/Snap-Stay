import styled from 'styled-components';
import Heading from '../ui/Heading';

const ResponsiveHeader = styled(Heading)`
  @media (max-width: 783px) {
    display: none;
  }
  @media (min-width: 810px) and (max-width: 850px) {
    font-size: 2rem;
  }
  @media (min-width: 783px) and (max-width: 810px) {
    font-size: 1.5rem;
  }
`;

export default ResponsiveHeader;
