import './App.css';
import reactSvg from "./assets/react.svg"
import { categories } from './helpers/data';
import Card from './components/Card';

function App() {
  console.log(categories)
  return (
    <div className="App">
      <div>
        <img src={reactSvg} id="imgReact"/>
      </div>
      <div id="cardContainer">
        <h1 style={{width: "100%"}}>
          Languages
        </h1>
        {categories.map((item, index) => <Card  key={item.name} item={item}/>)}
      </div>
    </div>
  );
}

export default App;
