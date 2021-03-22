import { BrowserRouter, Route, Switch } from "react-router-dom";
import Shopping from "./Shopping";
import Cart from "./Cart";
import Main from "./Main";
import NavBar from "./NavBar";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route path="/Shopping" component={Shopping}></Route>
        <Route path="/Cart" component={Cart}></Route>
        <Route path="/" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
