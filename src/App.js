import { Router, Switch, Route } from "react-router";
import "./App.css";
import HomePage from "./Component/Pages/HomePage";
import ProductsPage from "./Component/Pages/ProductsPage/ProductsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Product:ProductsId" component={ProductsPage} />
      </Switch>
    </div>
  );
}

export default App;
