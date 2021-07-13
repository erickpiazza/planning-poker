import { Button } from "./styles";

interface ShowVoteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export default function ShowVoteButton({
  active,
  ...rest
}: ShowVoteButtonProps) {
  return (
    <Button active={active} {...rest}>
      <p> Mostrar Votos</p>
    </Button>
  );
}
