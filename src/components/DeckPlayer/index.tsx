import { database } from "../../services/firebase";
import Card from "../Card";

const cardValues = [
  "0",
  "1/2",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "21",
  "34",
  "55",
  "89",
  "?",
];

type TDeckPlayerProps = {
  roomId: string;
  playerGameId: string;
};

export default function DeckPlayer({ playerGameId, roomId }: TDeckPlayerProps) {
  async function teste(card: string) {
    console.log("carta clicada foi", card);

    await database.ref(`rooms/${roomId}/players/${playerGameId}`).update({
      cardVote: card,
    });
  }
  return (
    <>
      {cardValues.map((card, index) => (
        <Card
          key={`${index}`}
          onClick={() => teste(card)}
          flip={false}
          cardValue={card}
        />
      ))}
    </>
  );
}
