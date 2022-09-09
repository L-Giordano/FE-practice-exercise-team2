import React from "react";
import "./PurchaseSection.css";

import { TicketConnected } from "./TicketConnected";

export function PurchaseSection(props) {

    const checkoutOnClick = props.checkoutOnClick
    const closeModalOnClick = props.closeModalOnClick
    const state = props.eventData
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


        let soldOut = 0
        newState.events
                    .find(e => e.id === event.id).tickets
                    .forEach(ticket =>{
                        if(ticket.quantity > 0) soldOut++
                    })
        
        if(soldOut<1){
            newState.events
            .find(e => e.id === event.id).soldOut = true
        }

        checkoutOnClick(newState)
        closeModalOnClick()
    }

    const ticketSelection = [];

    event.tickets.forEach(ticket => {
        ticketSelection.push(ticket);
    });

    return (
        <div className="purchaseSection">
            <h3>{event.eventName}</h3>
            <p>{event.startDatetime} - {event.endDateTime}</p>
            <hr/>
            {ticketSelection.map(t => {
                t.eventId = event.id
                return (<div key={t.id}>
                    <TicketConnected  {...t}/>
                    <hr />
                </div>
                )
            })}
            <div className="bottomLine">
                <p className="poweredBy">
                    Powered by Eventbrite
                </p>
                <p>
                    <label htmlFor="lenguage">
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