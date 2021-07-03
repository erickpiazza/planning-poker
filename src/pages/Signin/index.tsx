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
    const roomRef = database.ref("rooms");
    console.log("user >", user);
    const firebaseRoom = await roomRef.push({
      title: roomName,
      authorId: user?.id,
      player: [{ name: user?.name, id: user?.id }],
    });

    console.log("response sala", firebaseRoom.key);
    history.push(`admin/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      {console.log("usuario ", user)}
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
              {" "}
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
              <form onSubmit={() => {}}>
                <input
                  type="text"
                  placeholder="Digite seu nick name"
                  value={undefined}
                  onChange={() => {}}
                />
                <input
                  type="text"
                  placeholder="Digite o código da sala"
                  value={undefined}
                  onChange={() => {}}
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
