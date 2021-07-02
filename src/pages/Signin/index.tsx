import { Container } from "./styles";

export function Signin() {
  return (
    <Container>
      <aside>
        <strong>Planning Poker</strong>
        <p>Scrum poker de forma simples</p>
      </aside>
      <main>
        <div className="main-content">
          <div className="separator">crie sua partida</div>
          <form onSubmit={() => {}}>
            <input
              type="text"
              placeholder="Digite o nome da sala"
              value={undefined}
              onChange={() => {}}
            />
            <input
              type="text"
              placeholder="Digite seu nick name"
              value={undefined}
              onChange={() => {}}
            />
            <button type="submit" className="button-form">
              Criar partida
            </button>
          </form>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={() => {}}>
            <input
              type="text"
              placeholder="Digite seu nick name"
              value={undefined}
              onChange={() => {}}
            />
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={undefined}
              onChange={() => {}}
            />
            <button type="submit" className="button-form">
              Entrar na partida
            </button>
          </form>
        </div>
      </main>
    </Container>
  );
}
