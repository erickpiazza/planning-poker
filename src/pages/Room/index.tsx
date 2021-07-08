import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import { HeaderComponent } from "../../components/Header/styles";
import RoomCode from "../../components/RoomCode";
import { useRoom } from "../../hooks/useRoom";

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { players } = useRoom(roomId);
  const [flip, setFlip] = useState(false);

  function teste() {
    setFlip(!flip);
  }

  return (
    <div>
      <HeaderComponent>
        <RoomCode code={roomId} />
      </HeaderComponent>
      <div
        style={{
          padding: 24,
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {players.map((player) => (
          <div>
            <Card key={player.id} flip={flip}>
              {player.name}
            </Card>
            <span>{player.name}</span>
          </div>
        ))}
      </div>
      <button onClick={teste}>testar</button>
    </div>
  );
}
