import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { IoIosLogOut } from 'react-icons/io';
import { HiOutlineUser } from 'react-icons/hi2';
import DarkModeToggle from './DarkModeToggle';
import { useAuth } from '../context/AuthContext';
const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
function HeaderMenu() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon onClick={logout}>
          <IoIosLogOut />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
