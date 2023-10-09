import { Link } from 'react-router-dom';

    const ErrorPage = () => {
        return (
            <>
                <div className='flex justify-center mt-12'>
                    <img className='rounded-xl' src="/error.jpg" alt="" />
                </div>
                <Link className='flex justify-center mt-8' to='/'>
                    <button className='bg-red-400 px-3 py-2 font-bold text-white rounded-md'>Go Back</button>
                </Link>
            </>
        );
    };
    
export default ErrorPage;