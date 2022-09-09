const action = { type: "@followEvent"};

export const followAction = (eventId) => (dispatch) => {
    action.payload = eventId
    return dispatch(action);
}

