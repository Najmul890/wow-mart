/* eslint-disable react/prop-types */
import React from 'react';
import { BsTrash } from 'react-icons/bs';

const DeleteIcon = ({title}) => {
    return (
        <BsTrash title={title} className={`text-primary cursor-pointer hover:text-secondary text-2xl`} />
    );
};

export default DeleteIcon;