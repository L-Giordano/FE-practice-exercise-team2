
import { connect } from "react-redux";
import { PurchaseSection } from "./PurchaseSection";


const stateToTaskInput = (state) => {
  return {
    eventData: state.modal
  };
};

export const PurchaseSectionConnected = connect(stateToTaskInput)(PurchaseSection);