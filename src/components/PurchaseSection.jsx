import React from "react";
import "./PurchaseSection.css";

import { TicketConnected } from "./TicketConnected";

export function PurchaseSection(props) {

    const checkoutOnClick = props.checkoutOnClick
    const closeModalOnClick = props.closeModalOnClick
    const state = props.eventData
    const modal = props.eventData.modal
    const event = props.eventData.modal.event



    const confirmPurchase = () => {

        let newState = JSON.parse(JSON.stringify(state))

        newState.events.forEach(e => {
            if(e.id === event.id){
                for (let i=0; i<e.tickets.length; i++){
                    e.tickets[i].quantity = e.tickets[i].quantity - event.tickets[i].purchase
                }
            }
        })
        checkoutOnClick(newState)
        closeModalOnClick()


    }

    const ticketSelection = [];

    event.tickets.forEach(ticket => {
        const ticketCopy = {...ticket};
        ticketSelection.push(ticket);
    });

    console.log(ticketSelection)

    // ticketSelection.forEach(ticket => ticket.purchase = 0);

    return (
        <div className="purchaseSection">
            <h3>{event.eventName}</h3>
            <p>{event.startDatetime} - {event.endDateTime}</p>
            <hr/>
            {ticketSelection.map(t => {
                t.eventId = event.id
                return (<div>
                    <TicketConnected {...t}/>
                    <hr />
                </div>
                )
            })}
            <div className="bottomLine">
                <p className="poweredBy">
                    Powered by Eventbrite
                </p>
                <p>
                    <label for="card">
                        <span>Language:</span>
                    </label>
                    <select id="card" name="usercard">
                        <option value="english">English</option>
                        <option value="espanol">Espanol</option>
                        <option value="francias">Francais</option>
                    </select>
                </p>
            </div>
            <button className="completeButton" onClick={confirmPurchase}>Completar Pedido</button>
        </div>
    )
    
}