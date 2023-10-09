import React from 'react';

const Team = () => {
    return (
        <div>
            <h2 className="text-center text-5xl mt-12 font-medium">Our Team</h2>
            <p className="text-center w-1/2 mx-auto text-lg my-6">Our expert team of professionals delivers unparalleled results through dedication, skill, and innovation.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 md:p-20 bg-base-300">
                <div data-aos="zoom-out-up" className="flex flex-col items-center bg-slate-400 py-10 rounded-lg">
                    <div className="w-[200px] h-[200px]">
                        <img src="https://i.ibb.co/hY2ZsZL/manager.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="text-3xl font-semibold text-white">Michael Doe</h2>
                        <p className="text-xl text-black mt-3">Founder <span className='font-mono'>&</span> Cheif Event Organizer</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className="flex flex-col items-center bg-slate-400 py-10 rounded-lg">
                    <div className="w-[200px] h-[200px]">
                        <img src="https://i.ibb.co/C60Lbjj/founder.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="text-3xl font-semibold text-white">Olivia Johnson </h2>
                        <p className="text-xl text-black mt-3">Cheif Event Planner</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className="flex flex-col items-center bg-slate-400 py-10 rounded-lg">
                    <div className="w-[200px] h-[200px]">
                        <img src="https://i.ibb.co/8XfCRyK/photographer.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="text-3xl font-semibold text-white">Sophia Brown</h2>
                        <p className="text-xl text-black mt-3">Photographer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;