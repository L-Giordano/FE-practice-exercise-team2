import React from "react";
import "./Card.css";
import { formatTime } from "../utils/FormatTime";

export const Card = (props) => {
    
    const {id, eventName, imageUrl, startDatetime, endDateTime, venue, followers, onUserClick} = props

    const onClick = () => {
        console.log("aaa");
        console.log(eventName);
        console.log(`id is ${id}`);
        onUserClick(id);
    }

    const dateFormated = formatTime(startDatetime)

    return (
        <div className="individual-card">
            <div className="image">
                <img alt= " " src={imageUrl} height="200px" width="200px" onClick={onClick}></img>
            </div>
            <div className="description">
                <div className="event-name">{eventName}</div>
                <div className="time">{dateFormated}</div>
                <div className="venue">{venue}</div>
                <div className="followers">{followers} followers</div>
            </div>
        </div>
    )
}
