import React from 'react'

import "./Button.css";

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    return(
        <button className="btn btn-block login-btn">
            {children}
        </button>
    )
}