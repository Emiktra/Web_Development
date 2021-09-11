export default function reducer(state, action){
    switch (action.type) {
        case "increase_counter":
            state.counter = state.counter+1
            return {...state};
        case "decrease_counter":
            state.counter = state.counter-1
            return {...state};
        case "reset_counter":
            state.counter = 0;
            return {...state} 
        default:
            break;
    }
}
