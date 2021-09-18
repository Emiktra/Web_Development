import './App.css';
import Register from "./pages/Register"
// import SimpleRegister from "./pages/SimpleRegister"
import SimpleRegisterWithComponents from "./pages/SimpleRegisterWithComponents"

function App() {
  return (
    <div className="App">
      {/* <SimpleRegister/> */}
      <SimpleRegisterWithComponents />
    </div>
  );
}

export default App;