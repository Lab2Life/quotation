import React from "react";
import Button from '@material-ui/core/Button';
export const Dvr = (props) => {
    return <Button variant='contained' color='success' onClick={props.handleClick}>{props.details.type} </Button>
}