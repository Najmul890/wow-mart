/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';


const LocationIcon = ({size}) => {
    return (
        <BiCurrentLocation className={`hover:text-secondary text-primary ${size}`}/>
    );
};

export default LocationIcon;