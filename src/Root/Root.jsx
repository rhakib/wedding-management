import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div><Toaster/></div>
        </div>
    );
};

export default Root;