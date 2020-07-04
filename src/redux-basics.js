const redux = require('redux');//Importación de NodeJS
const createStore = redux.createStore;//Función que permite crear un nuevo redux store

const initialState = {//Puede ser cualquier nombre y tipo de dato - number, string,...
    counter: 0
};

//Reducer (receive action and update State, it can be multiple, combined reducers -es decir, solo tendremos uno
//que puede ser el merge de varios). Reducer es el único que puede actualizar el estado. Hay que pasarlo
//al store. Simplemente es una función
const rootReducer = (state = initialState, action) => {//El nombre puede ser otro. 
    //Recibe 2 argumentos: el viejo estado y la acción a ejecutar
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,//Se copia el viejo estado
            counter: state.counter + 1// es decir, la propiedad counter es igual a initialState.counter
        }
    };
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    };
    return state;
}; 

//Store (store entire application state)
const store = createStore(rootReducer);//Le podemos dar cualquier nombre pero para que haga algo necesitamos 
//inicializarla para lo cual necesitamos un reducer

//console.log(store.getState()) //si no inicializamos el estado será undefined

//Subscription: passes updated state to app
//Solo se ejecuta cuando se envía, resuelve algún dispatch
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//Dispatching Action: some code triggers an action
//tiene que tener un argumento con un objeto con propiedad type (en mayúscula) que hace referencia
//al tipo de acción se enviará
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log(store.getState()) 
