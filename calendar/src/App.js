import Topbar from "./components/topbar/Topbar";
import Single from "./pages/home/single/Single";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting"
import Login from "./pages/login/Login"
import Booking from "./pages/login/Booking"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Contact from "./pages/Contact";



function App() {
  const uesr = false;
  return (
  <Router>
    <Topbar />
    <Switch>
    <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Register">{ uesr ?<Home />:<Booking/>}</Route>

          <Route path="/login">{uesr ? <Home />: <Login />}</Route>

          <Route path="/Write">{uesr ? <Write/>:<Booking />}</Route>
          <Route path="/Setting">{uesr ?<Setting/>:<Booking />}</Route>

          <Route path="/post/:postId">
            <Single />
          </Route>
    <Route exact path="/contact">
    <Contact/>

    </Route>

    </Switch>
    </Router> 
  );
}

export default App;
