import * as actionTypes from './actionTypes';

//Action creators: functions that create an action which returns the dispatched object
//Por convención se utiliza el mismo nombre de las constantes pero en camelCase
export const increment = () => {
    return {//Devuelve una acción de tipo X
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        value: value
    };
};

export const reduce = (value) => {
    return {
        type: actionTypes.REDUCE,
        value: value
    };
};
