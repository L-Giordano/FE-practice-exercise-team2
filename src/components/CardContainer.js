import React ,{useEffect, useState} from "react";
import { Card } from "./Card";
import { CardConnected } from "./CardConnected";
import "./CardContainer.css"

export const CardContainer = ({ eventList = [] }) => {
    const [event, setEvents] = useState(eventList);


    useEffect(()=>{
        setEvents(eventList)
    },[eventList])


    return (
        <div className="card-container">
            {event.map(elem => <CardConnected {...elem} key={elem.id}/>)}
        </div>
    )
}
