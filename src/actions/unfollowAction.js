const action = { type: "@unfollowEvent"};

export const unfollowAction = (eventId) => (dispatch) => {
    action.payload = eventId
    return dispatch(action);
}

