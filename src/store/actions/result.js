import * as actionTypes from './actionTypes';

export const saveResult = (result) => {   
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };

};

export const storeResult = (result) => {
    return dispatch =>{
        //Aquí podríamos poner un http request
        setTimeout(() => {
            //Una vez hecha, la info se guardaría en saveResult
             dispatch(saveResult(result))
        },2000)
    }    
};

// export const storeResult = (result) => {
//     // Aquí obtenemos el dispatch gracias a redux thunk
//     // El middleware se ejecuta entre que se dispara la acción y el momento en que la acción llega al reducer
//     // Se hace el dispatch pero entonces redux-thunk en el middleware accede al action, bloquea esta acción
//     // y la despacha en el futuro de manera similar a como lo hace el logger en el index.
//     return dispatch =>{
//         setTimeout(() => {
//              dispatch(storeResult)//De esta manera podemos crear un dispatch que se ejecute cuando queramos.
//              El problema si se hace de esta manera es que entramos en un bucle infinito por eso tenemos que 
//              crear otra variable
//         },2000)
//     }    
// };
 

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    };
};


