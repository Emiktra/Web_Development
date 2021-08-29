import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

function App() {
  return (
    <Router basename="clarusway" forceRefresh>
      <div className="App">
        <Header />
      </div>
      <Switch>
        {/* <Route exact path="/" component={Home}  /> */}
        <Route path="/about" component={About}  />
        <Route path="/profile" component={Profile}  />
        {/*put the root to the bottom*/}
        <Route exact path="/" component={Home}  />
        <Route component={Post} path="/post" />
        <Route component= {NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
