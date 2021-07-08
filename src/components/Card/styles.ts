import styled from "styled-components";

export const Container = styled.div`
  .flip-container.flip .flipper {
    transform: rotateY(180deg);
  }

  .flip-container {
    perspective: 1000;
  }
  /* .flip-container:hover .flipper,
  .flip-container.hover .flipper {
    transform: rotateY(180deg);
  } */

  .flip-container,
  .front,
  .back {
    width: 140px;
    height: 220px;
  }

  .flipper {
    transition: 2s;
    transform-style: preserve-3d;
    position: relative;
  }

  .front,
  .back {
    background-color: #475f94;
    border-radius: 10px;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.55);
  }

  .front {
    z-index: 2;
  }

  .back {
    transform: rotateY(180deg);
  }
`;
