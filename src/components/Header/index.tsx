import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdSearch,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import {
  Container,
  Logo,
  InputFind,
  SearchButton,
  Profile,
  Menu,
} from './styles';
import AuthContext from '../../contexts/auth';

const Header: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [menuDrop, setMenuDrop] = useState(false);

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <InputFind>
        <input type="text" placeholder="Encontre seus filmes favoritos…" />
        <SearchButton>
          <MdSearch size={30} />
        </SearchButton>
      </InputFind>

      <Profile>
        <img src={user?.photoURL || ''} alt={user?.displayName || ''} />
        <p>{user?.displayName}</p>

        <Menu onClick={() => setMenuDrop(!menuDrop)} open={menuDrop}>
          {menuDrop ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

          <ul>
            <li>
              <Link to="/">Teste 1</Link>
            </li>
            <li>
              <Link to="/">Teste 2</Link>
            </li>
            <li>
              <Link to="/">Teste 3</Link>
            </li>
          </ul>
        </Menu>
      </Profile>
    </Container>
  );
};

export default Header;
