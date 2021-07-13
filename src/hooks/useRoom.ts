import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuthAnonymously } from "./useAuthAnonymouslyContext";

type TFirebasePlayer = Record<
  string,
  {
    gameId: string;
    name: string;
    id: string;
  }
>;

type TPlayer = {
  gameId: string;
  id: string;
  name: string;
};

export function useRoom(roomId: string) {
  const { user } = useAuthAnonymously();
  const [players, setPlayers] = useState<TPlayer[]>([]);
  const [playerGame, setPlayerGame] = useState<TPlayer>();

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebasePlayers: TFirebasePlayer = databaseRoom?.players ?? {};

      const parsedPlayers = Object.entries(firebasePlayers).map(
        ([key, value]) => {
          return {
            gameId: key,
            id: value.id,
            name: value.name,
          };
        }
      );
      console.log("parsedPlayers", parsedPlayers);
      setPlayers(parsedPlayers);
    });

    return () => {
      roomRef.off("value");
    };
  }, [roomId]);

  useEffect(() => {
    console.log("teste");
    console.log("user?.id", user?.id);
    const playerGame = players.find((player) => player.id === user?.id);
    console.log("playerGame", playerGame);
    setPlayerGame(playerGame);
  }, [players, user, roomId]);

  async function teste() {
    await database.ref(`rooms/${roomId}/players/${playerGame?.gameId}`).update({
      name: "funcionou 3",
    });
  }

  return { players, teste, playerGame };
}
