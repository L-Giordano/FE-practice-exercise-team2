import React from "react";
import "./Ticket.css";

export function Ticket(props) {

    const {id, name, price, fee, fee_type, state, purchaseTicketOnClick} = props

    const feeTotal = () => {
        if (fee_type === "fixed") {return fee};
        if (fee_type === "percent") {return price * fee / 100};
    }

    const selectTicket = (e) => {

        let newState = JSON.parse(JSON.stringify(state))


        let ticketToPurchase = newState.modal.event.tickets.find(e => e.id === id)

        ticketToPurchase.purchase = parseInt(e.target.value)

  

        purchaseTicketOnClick(newState)

    }

    return (
        <div className="ticket">
            <div className="ticketSpecs">
                <span className="ticketName">{name}</span>
                <span>${price} {props.fee && <span className="feeText">+ ${feeTotal()} fees</span>}</span>
                <span className="salesEnd">Ticket sales end at 01/01/2022</span>
                
                
            </div>

            {props.quantity< 1 ?<p>SOLD OUT</p>:
            <div className="amountSelector">
                <select id="amount" name="purchase" onChange={selectTicket}>
                    { props.quantity > 1 && <option value="0">-</option> }
                    { props.quantity >= 1 && <option value="1">1</option> }
                    { props.quantity >= 2 && <option value="2">2</option> }
                    { props.quantity >= 3 && <option value="3">3</option> }
                    { props.quantity >= 4 && <option value="4">4</option> }
                    { props.quantity >= 5 && <option value="5">5</option> }
                </select>
            </div>
            }
        </div>
    )

}