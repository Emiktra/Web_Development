import {SELL_COMP, SELL_PHONE, SELL_LAPTOP, SELL_WATCH} from "../types/type";

export const sellLaptop = (number=1) => {
    return {
        type:SELL_LAPTOP,
        payload:number,
    };
};

export const sellWatch = () => {
    return {
        type:SELL_WATCH,
    };
};

export const sellPhone = (number=1) => {
    return {
        type:SELL_PHONE,
        payload:number,
    };
};

export const sellComp = () => {
    return {
        type:SELL_COMP,
    };
};

