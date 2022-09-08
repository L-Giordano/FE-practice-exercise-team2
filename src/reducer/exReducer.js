const initialState = {
  modal:{
    isOpen:false,
    event:{
      "id": 1,
      "eventName": "Test Event 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend consequat velit, at rutrum lacus semper vel. Nam tempus vulputate sapien eget facilisis. Nulla ut.",
      "imageUrl": "https://place-hold.it/200x200",
      "startDatetime": "2022-10-15T13:45:00Z",
      "endDateTime": "2022-10-15T16:00:00Z",
      "venue": "123 Fake St.",
      "followers": 156,
      "tickets": [
        {
          "id": 1,
          "quantity": 100,
          "price": 14.56,
          "name": "General Ticket",
          "fee_type": "fixed",
          "fee": "1.50",
          "purchase": 1
        },
        {
          "id": 2,
          "quantity": 50,
          "price": 35.0,
          "name": "VIP Ticket",
          "fee_type": "percent",
          "fee": "5",
          "purchase": 0
        },
        {
          "id": 3,
          "quantity": 5,
          "price": 35.0,
          "name": "VIP Ticket",
          "fee_type": "none",
          "purchase": 1
        }
      ]
    }
  },
  events:[]
}

export const reducerEvent = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case "@createMoskApi":
        return {...state, events:action.payload};
      case "@openModalById":
        // payload here should be the id of the desired event, e.g.: payload = 6;
        let newEvent = {};
        newEvent = state.events.find(ev => ev.id === action.payload)
        const newModal = {
          event: newEvent,
          isOpen: true,
        }
        console.log(newModal);
        return {...state, modal: newModal}

      case "@closeModal":
        return {...state, modal:{ isOpen: false}}


      case "@purchaseTicket":
        return action.payload

      case "@checkout":
        console.log("payload", action.payload)
        return action.payload

    default:
        return state;
    }
    };
