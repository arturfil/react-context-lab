import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import home from "./views/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
