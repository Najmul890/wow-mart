/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn px-4 py-2.5 bg-primary">{children}</button>
    );
};

export default Button;