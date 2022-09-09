import React from "react";
import './Modal.css';
import { PurchaseSection } from "./PurchaseSection";
import { PurchaseSectionConnected } from "./PurchaseSectionConnected";
import { OrderSummaryContainerConnected } from "./orderSummaryContainer/OrderSummaryContainerConnected";

export function Modal({displayModal, closeModalOnClick}) {

    if(displayModal )
    return (
        <div className="modal">
            <div id="myModal" class="modal">
                <div class="modal-content">
                  <div className="left-component">
                    
                    <button id="myBtn" onClick={closeModalOnClick}>Close Modal</button>
                    
                    <PurchaseSectionConnected closeModalOnClick={closeModalOnClick}/>
                  </div>
                    
                    <OrderSummaryContainerConnected />
                </div>
                
                
            </div>
        </div>
    )
    else return <></>;
}