import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuthAnonymously } from "./useAuthAnonymouslyContext";

type TFirebasePlayer = Record<
  string,
  {
    gameId: string;
    name: string;
    id: string;
    cardVote?: string;
  }
>;

type TPlayer = {
  gameId: string;
  id: string;
  name: string;
  cardVote?: string;
};

type TRoomData = {
  authorId?: string;
  title?: string;
  showVotes?: boolean;
};
export function useRoom(roomId: string) {
  const { user } = useAuthAnonymously();
  const [players, setPlayers] = useState<TPlayer[]>([]);
  const [playerGame, setPlayerGame] = useState<TPlayer>();
  const [roomData, setRoomData] = useState<TRoomData>();

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      setRoomData({
        authorId: databaseRoom?.authorId,
        title: databaseRoom?.title,
        showVotes: databaseRoom?.showVotes,
      });
      const firebasePlayers: TFirebasePlayer = databaseRoom?.players ?? {};

      const parsedPlayers = Object.entries(firebasePlayers).map(
        ([key, value]) => {
          return {
            gameId: key,
            id: value.id,
            name: value.name,
            cardVote: value.cardVote,
          };
        }
      );
      setPlayers(parsedPlayers);
    });

    return () => {
      roomRef.off("value");
    };
  }, [roomId]);

  useEffect(() => {
    const playerGame = players.find((player) => player.id === user?.id);
    setPlayerGame(playerGame);
  }, [players, user, roomId]);

  async function showVotes() {
    const showVotes = roomData?.showVotes ? false : true;
    console.log("showVotes", showVotes);

    await database.ref(`rooms/${roomId}`).update({
      showVotes: showVotes,
    });
  }

  return { players, playerGame, roomData, showVotes };
}
