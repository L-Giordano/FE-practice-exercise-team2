import React, { useEffect } from "react";
import getEventData from "../api/eventService";
import "../styles.css";
import { CardContainerConnected } from "./CardContainerConnected";
import { ModalConnected } from "./ModalConnected";
import { OrderSummaryContainerConnected } from "./orderSummaryContainer/OrderSummaryContainerConnected";



const App = (props) => {

  const { mockedApi, mockApi } = props;

  

  useEffect(()=>{
    getEventData()
    .then(response => {
      const data = response.data
      mockApi(data)
    })
    .catch(e =>{
      console.log("error", e)
    })
  },[]);

  console.log("api", mockedApi)
  return (
    <div className="App">
      <CardContainerConnected />
      {/* <button id="myBtn" onClick={()=>setShowModal(true)}>Open Modal</button> */}
      <ModalConnected displayModal={mockedApi.modal.isOpen}/>

    </div>
  );
};

export default App;
