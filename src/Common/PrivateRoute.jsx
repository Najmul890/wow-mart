/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DataContext } from './context/DataProvider';

const PrivateRoute = ({children}) => {
    const { user } = useContext(DataContext);
    const location = useLocation();
        
    if (user && user?.name && user.role==="user" ) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;