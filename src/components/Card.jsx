import React from "react";


export function Card(props) {
    
    const {id, eventName, description} =  props;

    return(
        <div>{eventName} {id} {description}</div>
    )
}

