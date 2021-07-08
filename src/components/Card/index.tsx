import { ReactNode } from "react";
import { Container } from "./styles";

type CardProps = {
  key?: string;
  children?: ReactNode;
  flip?: boolean;
};

export default function Card({ key, children, flip = true }: CardProps) {
  return (
    <Container>
      <div className={`flip-container  ${flip ? "flip" : null}`}>
        <div className="flipper">
          {children && <div className="front">{children}</div>}

          <div className="back">traz</div>
        </div>
      </div>
    </Container>
  );
}
