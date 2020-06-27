import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) 
    {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            } 
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray
            } 
    }
    return state;//Si no entra en ninguno de los casos tenemos este return que retornaría el estado inicial
    //igualado por defecto al principio. Esto es importante porque si ningún dispatch coincide la aplicación
    //no se rompe, simplemente devuelve el estado actual.
};

export default reducer;