import copyImg from "../../assets/images/copy.svg";
import { ButtonClipboard } from "./styles";

type RoomCodeProps = {
  code: string;
};

export default function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <ButtonClipboard onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala {props.code}</span>
    </ButtonClipboard>
  );
}
