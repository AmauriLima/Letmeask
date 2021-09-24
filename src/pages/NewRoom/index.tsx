import { Link } from 'react-router-dom';

import illustration from '../../assets/images/illustration.svg';
import logo from '../../assets/images/logo.svg';

import {
  Aside, Main, MainContent, Separator, Wrapper,
} from './styles';
import { Button } from '../../components';

export default function NewRoom() {
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
          <h2>Crie uma nova sala</h2>
          <Separator>ou entre em uma sala</Separator>
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