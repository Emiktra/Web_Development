import {SELL_LAPTOP} from "../types/types"

const initialstate ={
    numberOfLaptops: 100,
}
const laptopReducer =(state = initialstate, action)=>{
    switch (action.type){
        case SELL_LAPTOP:
            return{...state, numberOfLaptops: state.numberOfLaptops-1}
        default: return state;
    }
}
export default laptopReducer



// import { SELL_LAPTOP } from '../types/types';
// const initialState = {
//     numberOfLaptops: 100,
// }
// const laptopReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SELL_LAPTOP:
//             return { ...state, numberOfLaptops: state.numberOfLaptops - action.payload }
//         default:
//             return state
//     }
// }
// export default laptopReducer;