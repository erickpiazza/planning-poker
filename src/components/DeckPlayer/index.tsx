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

export default function DeckPlayer() {
  return (
    <>
      {cardValues.map((card) => (
        <Card flip={false} cardValue={card} />
      ))}
    </>
  );
}
