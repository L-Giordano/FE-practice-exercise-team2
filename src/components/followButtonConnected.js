import { FollowButton } from "./FollowButton";
import { connect } from "react-redux";
import { FollowButton } from "./FollowButton";
import { unfollowAction } from "../actions/unfollowAction";
import { followAction } from "../actions/followAction";

const stateToTaskInput = (state) => {
    return {
        eventData: state.events
    };
};



const mapDispatchToProps = {
    followAction : followAction,
    unfollowAction : unfollowAction,
};


export const followButtonConnected = connect( stateToTaskInput, mapDispatchToProps)(FollowButton);
