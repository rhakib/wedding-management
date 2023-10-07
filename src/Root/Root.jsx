import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Navbar/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;