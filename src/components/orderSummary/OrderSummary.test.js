import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import { OrderSummary } from './OrderSummary'

let modal = {event:{
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
        "name": "VIP Ticket-op",
        "fee_type": "none",
        "purchase":0
      }
    ]
  }}

jest.mock("../subtotal/SubTotal", () => ({
    SubTotal : () => (<div data-testid="SubTotal"></div>)
}))
describe("OrderSummary componnent", () => {
    it("Should load three tickets", () => {

        render( <OrderSummary modal={modal}/>)
        expect(screen.findByText("General Ticket")).toBeInTheDocument
        expect(screen.findByText("VIP Ticket")).toBeInTheDocument
        expect(screen.findByText("VIP Ticket-op")).toBeInTheDocument
    })

    it("Should load Subtotal", () => {
        render( <OrderSummary modal={modal}/>)
        expect(screen.getByTestId("SubTotal")).toBeInTheDocument
    })
})