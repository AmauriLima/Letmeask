import { FormEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import googleIcon from '../../assets/images/google-icon.svg';

import { AsidePanel, Button } from '../../components';
import { AuthContext } from '../../Context/AuthContext';

import {
  CreateRoom, Main, MainContent, Separator, Wrapper,
} from './styles';
import { database } from '../../services/firebase';

export default function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useContext(AuthContext);
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (!roomCode.trim()) return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
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
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={({ target }) => setRoomCode(target.value)}
            />
            <Button type="submit" onClick={handleJoinRoom}>Entrar na sala</Button>
          </form>
        </MainContent>
      </Main>
    </Wrapper>
  );
}
