import illustration from '../../assets/images/illustration.svg';
import logo from '../../assets/images/logo.svg';
import googleIcon from '../../assets/images/google-icon.svg';

import {
  Aside, CreateRoom, Main, MainContent, Separator, Wrapper,
} from './styles';
import { Button } from '../../components';

export default function Home() {
  return (
    <Wrapper>
      <Aside>
        <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>

      <Main>
        <MainContent>
          <img src={logo} alt="Letmeask" />
          <CreateRoom type="button">
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
