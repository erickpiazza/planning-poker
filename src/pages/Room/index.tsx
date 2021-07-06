import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../services/firebase";

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);
    console.log("roomref", roomRef);
    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      console.log("fibase room >", databaseRoom);
    });

    return () => {
      roomRef.off("value");
    };
  }, [roomId]);

  return <div> bem vindo a sala ${roomId}</div>;
}
