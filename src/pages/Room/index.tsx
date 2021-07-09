import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import DeckPlayer from "../../components/DeckPlayer";
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

  return (
    <div>
      <HeaderComponent>
        <RoomCode code={roomId} />
      </HeaderComponent>
      <div>
        <div>
          {players.map((player) => (
            <div>
              <Card key={player.id} cardValue={player.name} />
              <span>{player.name}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <DeckPlayer />
        </div>
      </div>
    </div>
  );
}
