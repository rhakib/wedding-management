import React from 'react';

const Gallary = () => {
    return (
        <>
            <div className='text-center md:w-3/4 lg:w-3/5 flex flex-col mx-auto mt-8'>
                <h2 className='text-3xl md:text-5xl text-center mb-4'>Some of our clients memories</h2>
                <p className='md:text-lg text-center mb-6'>Memories of yesterday will last a lifetime. We'll take the best, forget the rest, and someday will find that these are the best of times.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 p-2 md:p-0 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/kGYr8t7/p1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/jW0xV80/p2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/y4KBzgX/p13.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/DYP8Hmt/p4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/DV0HkmT/p5.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/tHvwTSS/p6.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/LSJTC1q/p7.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/9gs3YLF/p8.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/Qfq5djd/p9.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/X4SRCdp/p10.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/gTq1SvP/p11.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/6nDD3Zf/p12.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallary;