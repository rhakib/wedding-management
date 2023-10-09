import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai'
import UseAuth from '../Provider/UseContext/UseAuth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handeleGoogleSignIn = () => {
        googleSignIn()
        .then(res =>{
              toast.success('Successfuly logged in')  
              navigate(location?.state ? location.state : '/')     
        })
        .catch(err => {

        })
    }
    return (
        <div>
            <div className='flex mb-2 justify-center'>
                <button onClick={handeleGoogleSignIn} className='btn w-[340px] text-white font-bold hover:bg-slate-900 bg-slate-500'><AiOutlineGoogle className='text-xl'></AiOutlineGoogle>Sign in with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;