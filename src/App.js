import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home";
import { store } from "./Global State/Store";
import { Provider } from "react-redux";
import CartPage from "./Pages/Cart";
function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cart" component={CartPage} />
          </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
