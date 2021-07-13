import { Container } from "./styles";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  cardValue?: string;
  showContent?: boolean;
  active?: boolean;
}

export default function Card({
  cardValue,
  showContent = true,
  active,
  ...rest
}: CardProps) {
  return (
    <Container active={active} {...rest}>
      <div className={`flip-container  ${showContent ? null : "flip"}`}>
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
