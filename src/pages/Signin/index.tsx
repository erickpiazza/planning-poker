import { useState } from "react";
import { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { useAuthAnonymously } from "../../hooks/useAuthAnonymouslyContext";
import { database } from "../../services/firebase";

import { Container } from "./styles";

export function Signin() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomKey, setRoomKey] = useState("");
  const { signInAnonymously, user } = useAuthAnonymously();

  async function createdPlayer(event: FormEvent) {
    event.preventDefault();

    if (!userName) {
      return alert("Digite um nick name");
    }

    await signInAnonymously(userName);
  }

  async function createRoom(event: FormEvent) {
    event.preventDefault();

    if (!roomName) {
      return alert("Digite o nome da sala");
    }

    const roomRef = database.ref("rooms");
    const firebaseRoom = await roomRef.push({
      title: roomName,
      authorId: user?.id,
    });

    await database
      .ref(`rooms/${firebaseRoom.key}/players`)
      .push({ id: user?.id, name: user?.name });

    history.push(`rooms/${firebaseRoom.key}`);
  }

  async function enterTheRoom(event: FormEvent) {
    event.preventDefault();
    if (!roomKey) {
      return alert("Digite a chave da sala");
    }

    const roomRef = await database.ref(`rooms/${roomKey}`).get();

    if (!roomRef.exists()) {
      alert("Sala não existe");
      return;
    }

    await database
      .ref(`rooms/${roomKey}/players`)
      .push({ id: user?.id, name: user?.name });

    history.push(`rooms/${roomKey}`);
  }

  return (
    <Container>
      <aside>
        <strong>Planning Poker</strong>
        <p>Scrum poker de forma simples e divertida</p>
      </aside>
      <main>
        <div className="main-content">
          {!user?.id && !user?.name ? (
            <>
              <div className="separator">Seu nome na partida</div>
              <form onSubmit={createdPlayer}>
                <input
                  type="text"
                  placeholder="Digite seu nick name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <button type="submit" className="button-form">
                  Play Game
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="separator">crie sua partida</div>
              <form onSubmit={createRoom}>
                <input
                  type="text"
                  placeholder="Digite o nome da sala"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                />
                <button type="submit" className="button-form">
                  Criar partida
                </button>
              </form>
              <div className="separator">ou entre em uma partida</div>
              <form onSubmit={enterTheRoom}>
                <input
                  type="text"
                  placeholder="Digite o código da sala"
                  value={roomKey}
                  onChange={(e) => setRoomKey(e.target.value)}
                />
                <button type="submit" className="button-form">
                  Entrar na partida
                </button>
              </form>{" "}
            </>
          )}
        </div>
      </main>
    </Container>
  );
}
