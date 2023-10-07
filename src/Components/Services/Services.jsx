import React from 'react';

const Services = ({ service }) => {
    const {id, title, img, price, description} = service;
    console.log(service);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-[500px] w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body absolute text-center">
                <h2 className="">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="">
                    <button className="btn">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Services;