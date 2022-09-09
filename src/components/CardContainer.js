import React from "react";
import { CardConnected } from "./CardConnected";
import "./CardContainer.css"

export const CardContainer = (props) => {
    const { eventList } = props

    return (
        <div className="card-container">
            {eventList.map(elem => <CardConnected {...elem} key={elem.id}/>)}
        </div>
    )
}
