import { memo } from 'react';
import illustration from '../../assets/images/illustration.svg';
import { Aside } from './styles';

function AsidePanel() {
  return (
    <Aside>
      <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
    </Aside>
  );
}

export default memo(AsidePanel);
