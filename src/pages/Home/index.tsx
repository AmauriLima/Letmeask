import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import googleIcon from '../../assets/images/google-icon.svg';

import { AsidePanel, Button } from '../../components';
import { AuthContext } from '../../Context/AuthContext';

import {
  CreateRoom, Main, MainContent, Separator, Wrapper,
} from './styles';

export default function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useContext(AuthContext);

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  return (
    <Wrapper>
      <AsidePanel />

      <Main>
        <MainContent>
          <img src={logo} alt="Letmeask" />
          <CreateRoom type="button" onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo do google" />
            Crie sua sala com o google
          </CreateRoom>
          <Separator>ou entre em uma sala</Separator>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </Main>
    </Wrapper>
  );
}
