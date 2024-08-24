import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);

  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: 480px) {
    padding: 2.4rem 5px;
  }

  @media (min-width: 480px) and (max-width: 720px) {
    padding: 2.4rem 5px;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
