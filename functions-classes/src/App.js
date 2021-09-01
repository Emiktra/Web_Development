import './App.css';
import ClassBased from './components/ClassBased';
import FunctionBased from './components/FunctionBased';

function App() {
  return (
    <div className="App">
      {false ? <ClassBased name = {"steven"} age = {36}/> : null}
      <br/>
      <br/>
      <FunctionBased />
    </div>
  );
}

export default App;