import { connect } from "react-redux";
import { Ticket } from "./Ticket";
import { purchaseTicketOnClick } from "../actions/ticketActions";


const mapStateToProps = (state) => {
    return {

      state
    };
  };
  
const mapDispatchToProps = {
  purchaseTicketOnClick
};
  
export const TicketConnected = connect(
    mapStateToProps, mapDispatchToProps
)(Ticket);
