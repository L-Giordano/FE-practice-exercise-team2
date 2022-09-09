import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { PurchaseSection } from "./PurchaseSection";
import { TicketConnected } from './TicketConnected';

jest.mock("./TicketConnected", () => ({
    TicketConnected: ()=> (<div>TicketConnected</div>)
}))
  
let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const store = {
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
        "isFollowByYou":false,
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
    events:[
        {
          "id": 1,
          "eventName": "Test Event 1",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend consequat velit, at rutrum lacus semper vel. Nam tempus vulputate sapien eget facilisis. Nulla ut.",
          "imageUrl": "https://place-hold.it/200x200",
          "startDatetime": "2022-10-15T13:45:00Z",
          "endDateTime": "2022-10-15T16:00:00Z",
          "venue": "123 Fake St.",
          "followers": 156,
          "soldOut":false,
          "tickets": [
            {
              "id":1,
              "quantity": 100,
              "price": 14.56,
              "name": "General Ticket",
              "fee_type": "fixed",
              "fee": "1.50",
              "purchase":0
            },
            {
              "id":2,
              "quantity": 50,
              "price": 35.0,
              "name": "VIP Ticket",
              "fee_type": "percent",
              "fee": "5",
              "purchase":0
            },
            {
              "id":3,
              "quantity": 5,
              "price": 35.0,
              "name": "VIP Ticket",
              "fee_type": "none",
              "purchase":0
            }
          ]
        },
        {
          "id": 2,
          "eventName": "Test Event 2",
          "description": "C adipiscing elit. Curabitur eleifend consequat velit, at rutrum lacus semper vel. Nam tempus vulputate sapien eget facilisis. Nulla ut.",
          "imageUrl": "https://place-hold.it/200x200",
          "startDatetime": "2022-11-15T13:45:00Z",
          "endDateTime": "2022-11-15T16:00:00Z",
          "venue": "12345 Fake St.",
          "followers": 14567,
          "soldOut":false,
          "isFollowByYou": false,
          "tickets": [
            {
              "id":1,
              "quantity": 18,
              "price": 14.56,
              "name": "General Ticket",
              "fee_type": "fixed",
              "fee": "1.50",
              "purchase":0
            }
          ]
        },
        {
          "id": 3,
          "eventName": "Test Event 3",
          "description": "urabitur eleifend consequat velit, at rutrum lacus semper vel. Nam tempus vulputate sapien eget facilisis. Nulla ut.",
          "imageUrl": "https://place-hold.it/200x200",
          "startDatetime": "2022-11-17T13:45:00Z",
          "endDateTime": "2022-11-17T16:00:00Z",
          "venue": "123456 Fake St.",
          "followers": 6,
          "soldOut":false,
          "isFollowByYou": false,
          "tickets": [
            {
              "id":1,
              "quantity": 4,
              "price": 0,
              "name": "Free Ticket",
              "purchase":0
            }
          ]
        },
        {
          "id": 4,
          "eventName": "Test Event 4",
          "description": "Amet, consectetur adipiscing elit. Curabitur eleifend consequat velit, at rutrum lacus semper vel. Nam tempus vulputate sapien eget facilisis. Nulla ut.",
          "imageUrl": "https://place-hold.it/200x200",
          "startDatetime": "2022-10-15T13:45:00Z",
          "endDateTime": "2022-10-15T16:00:00Z",
          "venue": "123sds Fake St.",
          "followers": 1566,
          "soldOut":false,
          "isFollowByYou": false,
          "tickets": [
            {
              "id":1,
              "quantity": 100,
              "price": 14.56,
              "name": "General Ticket",
              "fee_type": "fixed",
              "fee": "1.50",
              "purchase":0
            },
            {
              "id":2,
              "quantity": 50,
              "price": 35.0,
              "name": "VIP Ticket",
              "fee_type": "percent",
              "fee": "5",
              "purchase":0
            },
            { "id":3,
              "quantity": 5,
              "price": 35.0,
              "name": "VIP Ticket",
              "fee_type": "none",
              "purchase":0
            },
            {
              "id":4,
              "quantity": 5,
              "price": 0.0,
              "name": "Free Ticket",
              "purchase":0
            }
          ]
        }
    ]
}

const eventData = store;


it("renders with the Purchase Section (form) correctly.", () => {
  
    render(<PurchaseSection eventData={eventData} />);
    expect(screen.findAllByText("Test Event 1")).toBeInTheDocument;
    /*
    act(() => {
      render(<PurchaseSection eventData={eventData} />, container);
    });
    // expect(container.textContent).toBe("Hello, Jenny!");
    expect(screen.getByRole('heading')).toHaveTextContent('Test Event 1')
  
    act(() => {
      render(<PurchaseSection name="Margaret" />, container);
    });
    expect(container.textContent).toBe("Hello, Margaret!");
    */
});


/*
test('Purchase section loads correctly.', async () => {
  // ARRANGE
  render(<PurchaseSection />)

  // ASSERT
  expect(screen.getByLabelText('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})
*/
