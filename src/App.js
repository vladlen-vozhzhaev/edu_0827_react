import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {Menu} from "./components/Menu";
import {MainPage} from "./components/MainPage";
import {ContactUs} from "./components/ContactUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <div className="container">
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route path="/contact-us">
                <ContactUs/>
            </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
