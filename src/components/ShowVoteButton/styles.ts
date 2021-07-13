import styled from "styled-components";

interface ButtonProps {
  active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  overflow: hidden;

  background: ${(props) =>
    props.active || props.active === undefined ? "#475f94" : "#737380"};
  border: 1px solid ${(props) => (props.active ? "#475f94" : "#737380")};
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
`;
