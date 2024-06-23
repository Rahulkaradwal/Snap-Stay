import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { IoIosLogOut } from 'react-icons/io';
import { HiOutlineUser } from 'react-icons/hi2';
const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
          <IoIosLogOut />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
