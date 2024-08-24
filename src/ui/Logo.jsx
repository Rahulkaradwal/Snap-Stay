import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 6rem;
  width: auto;

  @media (min-width: 768px) {
    height: 7rem;
  }

  @media (min-width: 1024px) {
    height: 9.6rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo.svg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
