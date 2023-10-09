const Banner = () => {
    return (
        <div className="h-[650px] relative" style={{ backgroundImage: 'url("https://i.ibb.co/jhpx5kX/banner.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'  }}>
             
             <div className='bg-black bg-opacity-50 h-full w-full'>
                <div className='absolute top-[280px]  lg:left-52 font-semibold text-white text-center'>
                    <p className='mb-6 text-xl'>LET US MAKE</p>
                    <h2 className='text-[32px] md:text-6xl'>The Wedding of Your Dreams</h2>
                </div>
             </div>
        </div>
    );
};

export default Banner;