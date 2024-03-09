import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./Cart";
import { Login } from "./component/login";
import { Register } from "./component/register";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        

      </Switch>
    </>
  );
}

export default App;