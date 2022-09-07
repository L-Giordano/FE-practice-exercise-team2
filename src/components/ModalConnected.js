
import { Modal } from "./Modal";
import { connect } from "react-redux";
import { closeModalOnClick } from "../actions/openModal";

const stateToTaskInput = (state) => {
  return {
    eventData: state.modal
  };
};



const mapDispatchToProps = {
  closeModalOnClick
};


export const ModalConnected = connect( stateToTaskInput, mapDispatchToProps)(Modal);
  