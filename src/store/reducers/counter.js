import * as actionTypes from '../actions';

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch ( action.type ) 
    {
        case actionTypes.INCREMENT:
            //return { counter: state.counter + 1 }
            //Al contrartio de setState de esta manera no se hace merge. Si actualizamos una propiedad y no
            //otra se sobreescribe. Tenemos copiar el estado anterior y actualizar solo las que son necesario
            //Ejemplo largo de como hacerlo:
            const newState = Object.assign({}, state);
            //Pasamos primero un objeto vacío y luego el objeto a copiar
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            //Manera más corta: devolver un objeto js con todas las propiedades del objeto a copiar usando spread
            //Luego añadir o actualizar las propieadades xa existentes
            return { 
                ...state,
                counter: state.counter - 1 
            } 
        case actionTypes.ADD:
            return { 
                ...state,
                counter: state.counter + action.value 
            } 
        case actionTypes.REDUCE:
            return {
                ...state,
                counter: state.counter - action.value 
            }
    }

    return state;//Si no entra en ninguno de los casos tenemos este return que retornaría el estado inicial
    //igualado por defecto al principio. Esto es importante porque si ningún dispatch coincide la aplicación
    //no se rompe, simplemente devuelve el estado actual.
};

export default counterReducer;