import stories from '../../assets/stories.jpg'

const Stories = () => {
    return (
        <>  <h2 className='text-center text-5xl text-white my-16'>We Create Stories</h2>
            <div className="card bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2 p-4 md:gap-6">
                <figure><img className='h-[300px] md:h-[400px] lg:h-[500px] w-full' src={stories} alt="" /></figure>
                <div className="text-center text-white lg:mt-12 ">
                    <p className='text-left lg:w-[550px] text-2xl mt-12 lg:mt-36'>&quot;I am so happy that I chose WedsZone to organize my wedding. The team was so friendly and helpful throughout the process, and did a wonderful job of helping me get everything done in a very short time frame.&quot;
                    <br />
                    <br />
                    - Lauren
                    </p>

                </div>
            </div>
        </>
    );
};

export default Stories;