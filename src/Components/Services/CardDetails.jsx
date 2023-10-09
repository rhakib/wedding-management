/* eslint-disable react/prop-types */
import React from 'react';
import ServiceOption from './ServiceOption';



const CardDetails = ({ service }) => {
    const { title, img, price, serviceDetail } = service;

    console.log(serviceDetail);

    return (
        <> <h2 className="text-4xl font-semibold text-center mt-4">{title}</h2>
            <div className="card bg-base-100 shadow-xl grid p-2 md:grid-cols-2 mt-10 ">
                <figure><img className='rounded-xl h-[500px] w-[450px]' src={img} alt="Shoes" /></figure>
                <div className="card bg-base-300 shadow-xl p-1">
                    <div className='flex justify-center mt-6'>
                        <h2 className="card-title text-3xl  lg:text-4xl">{title} Services</h2>
                    </div>
                    <div className="mt-12 space-y-4">
                        <div className='flex flex-col lg:ml-32 space-y-4'>
                            {
                                serviceDetail?.map(item => <ServiceOption item={item}></ServiceOption>)
                            }
                        </div>
                        <div className='flex text-center justify-center'>
                            <h3 className='text-2xl text-white bg-slate-600 w-40 py-1 rounded-lg'>${price}</h3>
                        </div>

                        <div className="text-center">
                            <button className='btn text-white text-xl hover:bg-slate-900 bg-slate-800 bg-opacity-50 '>Book a Consultation</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;