import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, {useState} from "react";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Login from "../login/Login";
import PrivateRouter from "./PrivateRouter";
function AppRouter() {
  const [isAuth, setIsAuth] = useState(false)

  const AuthContainer=()=>{
    <div>
      <PrivateRouter isAuth={isAuth} exact path="/" component={Home}/>
      <PrivateRouter isAuth={isAuth} path="/about" component={About}/>
      <PrivateRouter isAuth={isAuth} path="/details" component={Details}/>
    </div>
  }

  return (
    <BrowserRouter>
        <Navbar />
      <Switch>
        {/* <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/details" exact component={Details} />
        <Route path="/login" exact component={Login}/> */}


        <Route         
          path="/login"
          exact
          component={() => <Login setIsAuth={setIsAuth} />}
        />
         <Route component={AuthContainer} />
      </Switch>
    </BrowserRouter>
  );
}
export default AppRouter;