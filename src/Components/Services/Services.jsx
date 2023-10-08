import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { id, title, img, price, shortDes, description } = service;
   
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div data-aos="fade-right" className="card bg-base-100 shadow-xl">
            <figure><img className='h-[500px] w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body space-y-2 absolute text-center bg-black bg-opacity-60 top-32 text-white">
                <h2 className="text-4xl font-semibold">{title}</h2>
                <p className=''>{shortDes}</p>
                <div className='flex justify-center'>
                    <h3 className='text-2xl bg-slate-500 py-1 w-20 rounded-lg'>${price}</h3>
                </div>
                <Link to={`/service/${id}`}>
                    <div>
                        <button className='btn text-xl w-full bg-slate-400 bg-opacity-70 border-0 text-white'>Book Now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;