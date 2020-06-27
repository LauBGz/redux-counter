import React, { Component } from 'react';
import {connect} from 'react-redux'; //es una especie función que retorna un HOC que conecta el componente con el store
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                {/* this.props porque es una propiedad que recibimos del reducer */}
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />       
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onReduceCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul> 
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

//Fuera de la clase
const mapStateToProps = state => {//Nombre es una convención
    return {
        ctr: state.counter.counter,//en medio, el reducer correspondiente (counter)
        storedResults: state.result.results//en medio, el reducer correspondiente (result)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        onReduceCounter: () => dispatch({type: actionTypes.REDUCE, value: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
        //También podríamos tener un valor insertado por el usuario que quisiéramos pasar aquí

    }
};
//Tenemos que pasar el state que queremos obtener y action que queremos dispatch
//connect es una función que devuelve otra función 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//Ojo: si solo necesitamos pasar el estado sería export default connect(mapStateToProps)(Counter);
//Pero si solo necesitamos pasar acctiones sería export default connect(null, mapDispatchToProps)(Counter);