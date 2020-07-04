import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../utility';

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch ( action.type ) 
    {        
        case actionTypes.INCREMENT:
            return updatedObject(state, {counter: state.counter + 1 })
        case actionTypes.DECREMENT:
            return updatedObject(state, {counter: state.counter - 1 })
        case actionTypes.ADD:
            return updatedObject(state, {counter: state.counter + action.value }) 
        case actionTypes.REDUCE:
            return updatedObject(state, {counter: state.counter - action.value })
    }
    return state;
};

export default counterReducer;