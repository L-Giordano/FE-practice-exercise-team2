export const openModal = (eventId) => (dispatch) => {
    let action = {
      type: "@openModalById",
      payload: eventId
    };
    return dispatch(action);
};

export const closeModal = {type:"@closeModal"}

export const closeModalOnClick = () => (dispatch) => {
  return dispatch(closeModal)
}

// Para hacerlo correcatmente, dewbería sacar el método "openModal" a la cafrpeta "actions",
// No debe definirse la lógica aquí.
/*
    Opcion 1 , lo que hago, usar eventId como argumento.ç
    Opcion 2, le meando toda la info de la card. Con esom me ahorro que el Reducer filtre.
*/
