import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
function App() {
  return (
    <div className="App">
      <ClassComponent name = "Dawg"/>
      <FunctionalComponent name = "The doug"/>
    </div>
  );
}

export default App;
