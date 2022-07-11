import React from "react";
import Button from '@material-ui/core/Button';

export const Harddisk = (props) => {
    return <> <Button variant='contained' color='secondary' onClick={props.handleClick}>{props.details.size} </Button></>
}