import { ReactNode } from "react";
import { HeaderComponent } from "./styles";

type IHeaderProps = {
  children?: ReactNode;
};

export default function Header({ children }: IHeaderProps) {
  return (
    <HeaderComponent>
      <div className="content"> {children}</div>
    </HeaderComponent>
  );
}
