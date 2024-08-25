import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 1500px) {
    grid-template-columns: 20rem 1fr;
  }

  @media (max-width: 1300px) {
    grid-template-columns: 15rem 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 5rem 1fr;
  }
  @media (min-width: 480px) and (max-width: 1000px) {
    grid-template-columns: 10rem 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;

  @media (max-width: 480px) {
    padding: 0.5rem 0.5rem 1rem;
  }

  @media (min-width: 480px) and (max-width: 1000px) {
    padding: 1.2rem 1.2rem 4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
