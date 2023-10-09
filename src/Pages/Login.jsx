import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../Provider/UseContext/UseAuth';
import toast from 'react-hot-toast';
import SocialLogin from './SocialLogin';

const Login = () => {

    const {signInUser} = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = (e) => {

        e.preventDefault()
        const form = new FormData(e.currentTarget)
        
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signInUser(email, password)
        .then(res => {
            console.log(res)
            toast.success('Successfuly logged in')
            navigate(location?.state ? location.state : '/')


        })
        .catch(err => {
            toast.error('please provide a valid email and password')
        })
}
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/G7CJZQS/venue2.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'  }}>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-black font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[350px] md:w-[400px]  shadow-2xl mt-6 bg-slate-400">
                    <form onSubmit={handleLogin} className="card-body">                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold text-xl">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input bg-slate-300 input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-black font-semibold text-xl">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input bg-slate-300 input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt text-black link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn text-xl text-white hover:bg-slate-900 bg-slate-500">Login</button>
                        </div>
                        <p className='ml-14 md:ml-12 text-black my-2'>Don't have an account? <Link to='/register' className='text-lg hover:underline font-semibold text-purple-600 '>Register</Link></p>
                        
                    </form>
                        <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;