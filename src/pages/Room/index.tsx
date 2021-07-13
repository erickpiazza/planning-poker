import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import DeckPlayer from "../../components/DeckPlayer";
import { HeaderComponent } from "../../components/Header/styles";
import RoomCode from "../../components/RoomCode";
import ShowVoteButton from "../../components/ShowVoteButton";
import { useRoom } from "../../hooks/useRoom";

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { players, playerGame, roomData, showVotes } = useRoom(roomId);

  return (
    <div>
      <HeaderComponent>
        {roomData?.authorId === playerGame?.id && (
          <ShowVoteButton
            onClick={() => {
              showVotes();
            }}
          />
        )}

        <RoomCode code={roomId} />
      </HeaderComponent>
      <div>
        <div>
          {players.map((player) => (
            <div>
              <Card
                showContent={!roomData?.showVotes || undefined ? false : true}
                active={!!player.cardVote}
                key={player.id}
                cardValue={player?.cardVote ?? "?"}
              />
              <span>{player.name}</span>
            </div>
          ))}
        </div>
        {roomId && playerGame && (
          <div style={{ display: "flex", gap: 4 }}>
            <DeckPlayer
              cardVote={playerGame.cardVote}
              roomId={roomId}
              playerGameId={playerGame?.gameId}
            />
          </div>
        )}
      </div>
    </div>
  );
}
