import { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Post from "./Post";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {

  let [user, setUser] = useState(null);

  return (

    <>
      
      <Router>
      <Navbar handleUser = {setUser} user = {user}/>
        <Switch>
          <Route path="/post">
            <Post user={user}/>
          </Route>
          <Route path="/">
            <Home user={user} />
          </Route>
        </Switch>
      </Router>
    </>

  );
}


export default App;
