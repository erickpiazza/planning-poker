import { Container } from "./styles";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  key?: string;
  cardValue?: string;
  flip?: boolean;
  active?: boolean;
}

export default function Card({
  key,
  cardValue,
  flip = true,
  active,
  ...rest
}: CardProps) {
  return (
    <Container key={key} active={active} {...rest}>
      <div className={`flip-container  ${flip ? "flip" : null}`}>
        <div className="flipper">
          {cardValue && (
            <div className="front">
              <div className="container">
                <p>{cardValue}</p>
              </div>
            </div>
          )}

          <div className="back">
            <div className="container">
              <div className="circle-container">
                <div className="circle-container-1">
                  <div className="circle-container-2">
                    <p> Scrum</p>
                    <div className="divider" />
                    <p> Poker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
