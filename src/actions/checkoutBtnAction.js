export const checkout = { type: "@checkout"};

export const checkoutOnClick = (data) => (dispatch) => {
    checkout.payload = data;

    return dispatch(checkout);
  };