import styled from "styled-components";

interface ContainerProps {
  active?: boolean;
}
// https://styled-components.com/docs/api#using-custom-props
export const Container = styled.div<ContainerProps>`
  .flip-container.flip .flipper {
    transform: rotateY(180deg);
  }

  .flip-container {
    perspective: 1000;
  }

  .flip-container,
  .front,
  .back {
    width: 92px;
    height: 154px;
  }

  .flipper {
    transition: 2s;
    transform-style: preserve-3d;
    position: relative;
  }

  .front,
  .back {
    cursor: pointer;
    background-color: ${(props) =>
      props.active === undefined || props.active ? "#475f94" : "#737380"};
    border-radius: 10px;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;

    box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.55);
  }

  .front {
    z-index: 2;
    padding: 4px;

    p {
      color: #ffffff;
      font-size: 32px;
      font-weight: normal;
      font-family: "Roboto";
    }
  }

  .container {
    height: 100%;

    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back {
    transform: rotateY(180deg);
    padding: 4px;

    .circle-container {
      background-color: #ffffff;
      height: 60%;
      width: 100%;
      border-radius: 50%;
      padding: 2px;
    }
    .circle-container-1 {
      background-color: ${(props) =>
        props.active === undefined || props.active ? "#475f94" : "#737380"};
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
        background-color: ${(props) =>
          props.active === undefined || props.active ? "#475f94" : "#737380"};
        border-radius: 100px;
      }

      p {
        font-size: 16px;
        font-weight: 500;
        font-family: "Roboto";
      }
    }
  }
`;
