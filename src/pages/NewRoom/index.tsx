import { Link } from 'react-router-dom';

import { useContext } from 'react';
import logo from '../../assets/images/logo.svg';

import { Main, MainContent, Wrapper } from './styles';

import { AsidePanel, Button } from '../../components';
import { AuthContext } from '../../Context/AuthContext';

export default function NewRoom() {
  const { user } = useContext(AuthContext);

  return (
    <Wrapper>
      <AsidePanel />

      <Main>
        <MainContent>
          <img src={logo} alt="Letmeask" />
          <h1>{user?.name}</h1>
          <h2>Crie uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente?
            {' '}
            <Link to="/">Click Aqui</Link>
          </p>
        </MainContent>
      </Main>
    </Wrapper>
  );
}
