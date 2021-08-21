import './App.css';
import ClassBased from './components/ClassBased';
import FunctionBased from './components/FunctionBased';

function App() {
  return (
    <div className="App">
      <ClassBased name = {"steven"} age = {36}/>
      <br/>
      <br/>
      <FunctionBased />
    </div>
  );
}

export default App;