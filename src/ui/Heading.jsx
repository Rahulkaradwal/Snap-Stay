import styled, { css } from 'styled-components';

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 1.4rem;
      font-weight: 600;
      text-align: center;

      @media (min-width: 480px) {
        font-size: 2rem;
      }

      @media (min-width: 768px) {
        font-size: 3rem;
      }
    `}
    
  line-height: 1.4;
`;

export default Heading;
