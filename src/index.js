import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';//permite inyectar el store en los componentes de React
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

//CombineReducers: función que coge todos los reducers y hace un "merge" de todos los estados en uno solo
//En redux solo puede haber un reducer al final 
const rootReducer = combineReducers({
    counter: counterReducer,
    result: resultReducer
})

const store = createStore(rootReducer);
//Pasamos la constante store como propiedad "store"
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
