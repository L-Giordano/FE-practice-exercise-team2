import React from "react";
import { OrderSummaryConnected } from "../orderSummary/OrderSummaryConnected";
import "./OrderSummaryContainer.css";

export const OrderSummaryContainer = (props) =>{

    const { event } = props

    return(
        <div id="orderSummaryContainer">
            <img className="orderImg" src={event.imageUrl} alt={event.eventName}></img>
            <OrderSummaryConnected/>
        </div>
        
    )
}
