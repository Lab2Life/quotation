import React from "react";
export const Type = (props) => {
    return <span onClick={props.handleClick}>{props.details.type} </span>
}