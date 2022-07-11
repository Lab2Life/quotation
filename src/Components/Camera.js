import React from "react";
import Button from '@material-ui/core/Button';
import { ButtonThemes, ButtonTypes, ButtonSizes } from "./buttonTypes";
export const Camera = (props) => {
    return <> <Button variant='contained' color='primary' onClick={props.handleClick}> {props.count} </Button></>

}