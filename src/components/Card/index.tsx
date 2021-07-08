import { Container } from "./styles";

type CardProps = {
  key?: string;
};

export default function Card({ key }: CardProps) {
  return <Container key={key} />;
}
