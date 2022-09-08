export const purchaseTicket = { type: "@purchaseTicket"};

export const purchaseTicketOnClick = (data) => (dispatch) => {
    purchaseTicket.payload = data;

    return dispatch(purchaseTicket);
  };