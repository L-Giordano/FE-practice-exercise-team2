import React from "react";

export const FollowButton = (props) => {
    const {id, isFollowByYou, followAction, unfollowAction} = props
    let test;
    if (isFollowByYou){
        test = "following"
    } else {
        test = "unfollowing"
    }
    const onClickFollow = () => {
        if (isFollowByYou){
            unfollowAction(id)
        } else {
            followAction(id)
        }
    }
    return (
        <div>
            <button className="follow-button" onClick={onClickFollow}>{test}</button>
        </div>
        
    )
}
