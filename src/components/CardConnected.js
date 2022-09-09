import React from "react";
import { Card } from "./Card";
import { connect } from "react-redux";
import { openModal } from "../actions/openModal";

const mapStateToProps = (state) => {
    return {
        completeList: state.complete
    };
};

const mapDispatchToProps = {
    onUserClick: openModal
};

export const CardConnected = connect(
    mapStateToProps,
    mapDispatchToProps)(Card);
