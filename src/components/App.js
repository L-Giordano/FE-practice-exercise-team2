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
      <h1>Hi y'all!</h1>
      <p>
      Create a new event visualization app, using the proposed project. 
      This app will have a checkout component and will reduce the tickets quantity after purchase it.
      Download the project and install all the dependencies necessaries to execute it.
      </p>
      <CardContainerConnected />
      <ModalConnected displayModal={mockedApi.modal.isOpen}/>

    </div>
  );
};

export default App;
