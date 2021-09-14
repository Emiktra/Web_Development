import './App.css';
import LaptopComp from './components/LaptopComp';
import { PhoneComp } from './components/PhoneComp';

function App() {
  return (
    <div className="App">
      <h1>Clarus Shop</h1>
      <LaptopComp/>
      <PhoneComp/>
    </div>
  );
}

export default App;
