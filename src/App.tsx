import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Signin } from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
