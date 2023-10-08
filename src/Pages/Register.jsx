import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../Provider/UseContext/UseAuth';
import toast from 'react-hot-toast';

const Register = () => {

    const {createUser} = UseAuth()
    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const img = form.get('image');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, name, img, password);

        if (password.length < 6) {
            toast.error('Password length should be at least 6 character')
            return;
        } 
        else if(!/^(?=.*[A-Z])(?=.*[^a-zA-Z\d])/.test(password)) {
            toast.error('please incldue an uppercase, a lowercase and a special character')
            return;
        }

        createUser(email, password)
        .then(res => {
            console.log(res)
            toast.success('Successfuly registered')

        })
        .catch(err => {
            toast.error(err.message)
        })


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[350px] md:w-[400px]  shadow-2xl mt-6 bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name='image' placeholder="Image URL" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered"  />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='ml-4 mb-2'>Already have an account? <Link to='/login' className='text-purple-600 hover:underline text-lg font-semibold '>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;