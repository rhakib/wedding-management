import React from 'react';
import UseAuth from '../Provider/UseContext/UseAuth';
import { FaUserCircle } from 'react-icons/fa'

const DashBoard = () => {
    const { user } = UseAuth()
    return (
        <div className='flex justify-center mt-6'>
            <div className="card lg:w-1/3 bg-slate-300 shadow-xl justify-center">
                <figure className="px-10 pt-10">
                    {user?.photoURL ? <img src={user.photoURL} alt="Shoes" className="rounded-full w-1/2" /> : <FaUserCircle className="text-6xl"></FaUserCircle>}
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"></h2>
                    {user?.displayName ? <h3><span className='font-semibold text-lg'>Name:</span> {user.displayName}</h3> : <h3>N/A</h3>}
                    {user?.email ? <h3><span className='font-semibold text-lg'>Email:</span> {user.email}</h3> : <h3>N/A</h3>}
                    <h2><span className='font-semibold text-lg'>Phone:</span> +1 012 345 678</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;