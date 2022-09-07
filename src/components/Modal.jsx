import React from "react";
import './Modal.css';
import { PurchaseSection } from "./PurchaseSection";
import { PurchaseSectionConnected } from "./PurchaseSectionConnected";

export function Modal({displayModal, closeModalOnClick}) {// display, eventData

    if(displayModal )
    return (
        <div className="modal">
            <div id="myModal" class="modal">
                <div class="modal-content">
                    
                    <p>Modal Text</p>
                    <div>Modal Abierto</div>
                    <button id="myBtn" onClick={closeModalOnClick}>Close Modal</button>
                    <PurchaseSectionConnected/>
                </div>
                
            </div>
        </div>
    )
    else return <></>;
}