/* eslint-disable react/prop-types */
import React from 'react';
import ServiceOption from './ServiceOption';



const CardDetails = ({ service }) => {
    const { title, img, price, serviceDetail } = service;

    console.log(serviceDetail);

    return (
        <> <h2 className="text-4xl font-semibold text-center">{title}</h2>
            <div className="card bg-base-100 shadow-xl grid p-2 md:grid-cols-2 mt-10 gap-6">
                <figure><img className='h-[500px] w-[550px]' src={img} alt="Shoes" /></figure>
                <div className="card bg-base-100 shadow-xl">
                        <div className='flex justify-center'>
                            <h2 className="card-title text-4xl">{title} Services</h2>
                        </div>
                    <div className="text-center mt-12 space-y-4">
                        {
                            serviceDetail?.map(item => <ServiceOption item={item}></ServiceOption>)
                        }
                        <div className='flex justify-center'>
                            <h3 className='text-2xl text-white bg-slate-500 w-40 py-1 rounded-lg'>${price}</h3>
                        </div>

                        <div className="">
                            <button className='btn text-white text-xl bg-slate-400 bg-opacity-50 w-1/2'>Book a Consultation</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;