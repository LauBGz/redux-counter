import React, { Component } from 'react';
import {connect} from 'react-redux'; //es una especie función que retorna un HOC
// que conecta el componente con el store
import * as actionCreators from '../../store/actions/index';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionTypes from '../../actions/actions';
//Con el action creator ya no hace falta.
class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                {/* This props porque es una propiedad que recibimos del reducer */}
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
        ctr: state.counter.counter,//en medio, el reducer correspondiente
        storedResults: state.result.results//en medio, el reducer correspondiente
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        //Hace un dispatch de la acción INCREMENT en actions.js
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        //Payload: datos transmitidos, el valor del dato en sí excluyendo el código extra
        //Se suele utilizar payload = {} con un objeto javascript con diversa información
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onReduceCounter: () => dispatch(actionCreators.reduce(5)),
        //Necesitamos un dispatch que envíe un objeto js
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
        //También podríamos tener un valor insertado por el usuario que quisiéramos pasar aquí

    }
};
//Tenemos que pasar el state que queremos obtener y action que queremos dispatch
//connect es una función que devuelve otra función 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//Ojo: si solo necesitamos pasar el estado sería export default connect(mapStateToProps)(Counter);
//Pero si solo necesitamos pasar acctiones sería export default connect(null, mapDispatchToProps)(Counter);