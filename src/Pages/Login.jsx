import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (e) => {

        e.preventDefault()
        const form = new FormData(e.currentTarget)
        
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
}
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[400px] shadow-2xl mt-6 bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p className='ml-4 mb-2'>Don't an account? <Link to='/register' className='text-lg hover:underline font-semibold text-purple-600 '>Register</Link></p>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;