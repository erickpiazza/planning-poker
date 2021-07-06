import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthAnonymouslyProvider } from "./contexts/AuthAnonymouslyContext";
import { Room } from "./pages/Room";
import { Signin } from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <AuthAnonymouslyProvider>
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthAnonymouslyProvider>
    </BrowserRouter>
  );
}

export default App;
