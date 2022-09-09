import { connect } from "react-redux";
import { CardContainer } from "./CardContainer";

const openModal = (eventId) => (dispatch) => {
    // event.preventDefault();
    let action = {
      type: "@openModalById",
      payload: eventId,
    };
    return dispatch(action);
    // Introduce in redux here
};

const mapStateToProps = (state) => {
    return {
        eventList: state.events
    }
}

const mapDispatchToProps = {
    onUserClick: openModal
};

export const CardContainerConnected = connect(mapStateToProps, mapDispatchToProps)(CardContainer)
