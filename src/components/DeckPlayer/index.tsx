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
  cardVote?: string;
};

export default function DeckPlayer({
  playerGameId,
  roomId,
  cardVote,
}: TDeckPlayerProps) {
  async function vote(card: string) {
    if (cardVote === card) {
      await database
        .ref(`rooms/${roomId}/players/${playerGameId}/cardVote`)
        .remove();
    } else {
      await database.ref(`rooms/${roomId}/players/${playerGameId}`).update({
        cardVote: card,
      });
    }
  }
  return (
    <>
      {cardValues.map((card, index) => (
        <Card key={`${index}`} onClick={() => vote(card)} cardValue={card} />
      ))}
    </>
  );
}
