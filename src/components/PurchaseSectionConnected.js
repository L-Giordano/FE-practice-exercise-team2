
import { connect } from "react-redux";
import { PurchaseSection } from "./PurchaseSection";
import { checkoutOnClick } from "../actions/checkoutBtnAction";
import { closeModalOnClick } from "../actions/openModal";


const stateToTaskInput = (state) => {
  return {
    eventData: state
  };
};

const mapDispatchToProps = {
  checkoutOnClick,
  closeModalOnClick
};


export const PurchaseSectionConnected = connect(stateToTaskInput, mapDispatchToProps)(PurchaseSection);