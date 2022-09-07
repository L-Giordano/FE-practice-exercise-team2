import React from "react";
import "./Ticket.css";

export function Ticket(props) {

    const {name, price, fee, fee_type, ticketInfo} = props

    console.log(!!ticketInfo);
    if (ticketInfo) {console.log(ticketInfo)};

    // "fee_type": "percent", "fixed"

    const feeTotal = () => {
        if (fee_type === "fixed") {return fee};
        if (fee_type === "percent") {return price * fee / 100};
    }

    return (
        <div className="ticket">
            <div className="ticketSpecs">
                <span className="ticketName">{name}</span>
                <span>${price} {props.fee && <span className="feeText">+ ${feeTotal()} fees</span>}</span>
                
                
            </div>
            <div className="amountSelector">
                <select id="amount" name="purchase">
                    { props.quantity >= 1 && <option value="1">1</option> }
                    { props.quantity >= 2 && <option value="2">2</option> }
                    { props.quantity >= 3 && <option value="3">3</option> }
                    { props.quantity >= 4 && <option value="4">4</option> }
                    { props.quantity >= 5 && <option value="5">5</option> }
                </select>
            </div>
        </div>
    )

}