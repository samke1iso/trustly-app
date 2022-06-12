
import { BrowserRouter as Route, Switch,} from "react-router-dom";
import Home from "./Pages/homepage/Home";
import Reviews from "./Pages/Reviews";
import Community from "./Pages/Community";
import Login from "./Pages/login/Login";
import Navbarbefore from "./Navbar/Navbarbefore";
import Footer from "./footer/footer-main";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbarbefore />
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
