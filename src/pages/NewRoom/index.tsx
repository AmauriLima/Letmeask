import { Link, useHistory } from 'react-router-dom';

import { FormEvent, useContext, useState } from 'react';
import logo from '../../assets/images/logo.svg';

import { Main, MainContent, Wrapper } from './styles';

import { AsidePanel, Button } from '../../components';
import { AuthContext } from '../../Context/AuthContext';
import { database } from '../../services/firebase';

export default function NewRoom() {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const [newRoomCode, setNewRoomCode] = useState('');

  async function handleCreateNewRoom(event: FormEvent) {
    event.preventDefault();

    if (!newRoomCode.trim()) return;

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoomCode,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Wrapper>
      <AsidePanel />

      <Main>
        <MainContent>
          <img src={logo} alt="Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoomCode}
              onChange={({ target }) => setNewRoomCode(target.value)}
            />
            <Button type="submit" onClick={handleCreateNewRoom}>Criar sala</Button>
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
