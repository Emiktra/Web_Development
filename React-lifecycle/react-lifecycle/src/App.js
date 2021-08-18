import './App.css';
// import Counter from './Counter';
import Counter2 from './Counter2';
import CounterWithHook from './CounterWithHook';

function App() {
  return (
    <div className="App">
      <h2>My Counter</h2>
      { visible && <Counter2/>}
      {visible ? <CounterWithHook/>:null}
    </div>
  );
}

export default App;
