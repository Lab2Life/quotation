import React from "react";
export const Camera = (props) => {
    return <span onClick={props.handleClick}> {props.count} </span>
}