import React, { useEffect } from "react";
import getEventData from "../api/eventService";
import "../styles.css";
import { CardContainerConnected } from "./CardContainerConnected";
import { ModalConnected } from "./ModalConnected";

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

  return (
    <div className="App">
      <CardContainerConnected />
      <ModalConnected displayModal={mockedApi.modal.isOpen}/>
    </div>
  );
};

export default App;
