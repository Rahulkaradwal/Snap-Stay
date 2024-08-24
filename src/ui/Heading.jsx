import styled, { css } from 'styled-components';

const baseHeadingStyles = css`
  font-size: 1.4rem;
  line-height: 1.4;
  font-weight: 600;

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Heading = styled.h1`
  ${(props) => {
    switch (props.as) {
      case 'h1':
        return css`
          ${baseHeadingStyles}
          font-weight: 600;
        `;
      case 'h2':
        return css`
          ${baseHeadingStyles}
          font-weight: 600;
        `;
      case 'h3':
        return css`
          ${baseHeadingStyles}
          font-weight: 500;
        `;
      case 'h4':
        return css`
          ${baseHeadingStyles}
          text-align: center;
          font-weight: 600;
        `;
      default:
        return css`
          font-size: 1.4rem;
          font-weight: 600;
        `;
    }
  }}
`;

export default Heading;
