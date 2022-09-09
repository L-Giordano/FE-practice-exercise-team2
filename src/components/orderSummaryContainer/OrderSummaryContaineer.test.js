import '@testing-library/jest-dom'

import {OrderSummaryContainer} from "./OrderSummaryContainer"
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock("../OrderSummary/OrderSummaryConnected", ()=>({
    OrderSummaryConnected: ()=> (<div data-testid="OrderSummary"></div>)
}))

describe("OrderSummary componnent", ()=>{

    it("should load the OrderSummary component", ()=>{
        render(<OrderSummaryContainer event={{}}/>)
        expect(screen.getByTestId("OrderSummary")).toBeInTheDocument()
    })

    it("should load the event image", ()=>{
        render(<OrderSummaryContainer event={{}}/>)
        expect(screen.getByTestId("img-test")).toBeInTheDocument()
    })


})


