import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';//permite inyectar el store en los componentes de React
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

//CombineReducers: funcion que coge todos los reducers y hace un merge de todos los estados en uno solo
//En redux solo puede haber un reducer al final 
const rootReducer = combineReducers({
    counter: counterReducer,
    result: resultReducer
})

//Middleware which logs each action we issue
const logger = store => {
    //It returns another fuction 
    return next => {
        //Return next which will be a function
        return action => {
            console.log("[Middleware] Dispatching", action);
            const result = next(action);
            console.log("[Middleware] next state", store.getState());
            return result;
        }
    };
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//Pasamos applyMiddleware como segundo argumento y desde ahí se pueden enviar tantos middleware como queramos
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
