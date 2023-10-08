import React from 'react';
import UseAuth from '../Provider/UseContext/UseAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = UseAuth()

    if (loading) {
        return <div className='flex justify-center'><span className="loading loading-bars loading-lg"></span></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;