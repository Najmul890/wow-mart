/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';


const EditIcon = ({size}) => {
    return (
        <FaRegEdit className={`hover:text-secondary text-primary cursor-pointer text-2xl`}/>
    );
};

export default EditIcon;