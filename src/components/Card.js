import React from "react";
import "./Card.css";
import { formatTime } from "../utils/FormatTime";
import { startingPrice } from "../utils/startingPrice";

export const Card = (props) => {
    
    const {id, eventName, imageUrl, startDatetime, venue, tickets, followers, onUserClick} = props

    const onClick = () => {
        onUserClick(id);
    }

    const dateFormated = formatTime(startDatetime)
    const priceToShow = startingPrice(tickets)
    return (
        <div className="individual-card">
            <div className="image">
                <img alt= " " src={imageUrl} height="200px" width="200px" onClick={onClick}></img>
            </div>
            <div className="description">
                <div className="event-name">{eventName}</div>
                <div className="time">{dateFormated}</div>
                <div className="venue">{venue}</div>
                <div className="starting-price">{priceToShow}</div>
                <div>
                    <ul>
                        {tickets.map(e => <li key={Math.random()*1000}>{e.quantity}</li>)}
                    </ul>
                   
                </div>
                <div className="followers">
                    <div className="num-followers">{followers} followers</div>
                    <button className="follow-button"><i>corazon</i></button>
                </div>
            </div>
        </div>
    )
}
