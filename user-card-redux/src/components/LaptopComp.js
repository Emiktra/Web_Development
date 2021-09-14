import React, {useState} from "react";
import { connect } from "react-redux";
import { sellLaptop } from "../redux/actions/actions";
const LaptopComp = (props) => {
  const [number, setNumber] = useState(1);
  console.log(props);
  return (
    <div className="container">
      <h2>Laptops -- Pure Redux -- </h2>
      <h3>Number of Laptops : {props.numberOfLaptops} </h3>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>props.sellLaptop(number)}>Sell Laptop</button>
    </div>
  );
};

/*dispatch yerine connect yöntemi kullanmak (pure redux, eski yöntem)*/
const mapStateToProps = (state) => {
  return {
    numberOfLaptops: state.laptop.numberOfLaptops,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sellLaptop: (number) => dispatch(sellLaptop(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LaptopComp);