import React from "react";
import { useState } from "react";
import { followAction } from "../actions/followAction";
import { unfollowAction } from "../actions/unfollowAction";

export const FollowButton = (id, followers, isFollowByYou) => {
    let test;
    if (isFollowByYou){
        test = "following"
    } else {
        test = "unfollowing"
    }
    const onClickFollow = () => {
        console.log("shshss")
        followAction(id)
    }
    return (
        <div>
            <button className="follow-button" onClick={onClickFollow}>{test}</button>
        </div>
        
    )
}
