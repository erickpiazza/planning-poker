import styled from "styled-components";

export const Container = styled.div`
  .flip-container.flip .flipper {
    transform: rotateY(180deg);
  }

  .flip-container {
    perspective: 1000;
  }

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
    padding: 6px;

    .container {
      height: 100%;

      border: 2px solid #ffffff;
      border-radius: 10px;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;

      .circle-container {
        background-color: #ffffff;
        height: 125px;
        width: 150px;
        border-radius: 50%;
        padding: 4px;
      }
      .circle-container-1 {
        background-color: #475f94;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        padding: 4px;
      }
      .circle-container-2 {
        background-color: #ffffff;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4px;

        .divider {
          height: 2px;
          width: 100%;
          background-color: #475f94;
          border-radius: 100px;
        }

        p {
          font-size: 24px;
          font-weight: 500;
          font-family: "Roboto";
        }
      }
    }
  }
`;
