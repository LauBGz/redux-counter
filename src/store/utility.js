export const updatedObject = (oldObject, updatedValues) => {
    return { //Creamos un objeto nuevo 
        ...oldObject, //con todas las propiedades del viejo objeto
        ...updatedValues // y un objecto con las propiedades que queremos actualizar
    } 
};