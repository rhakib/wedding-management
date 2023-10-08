import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Provider/UseContext/UseAuth";
import toast from "react-hot-toast";
import { FaSignOutAlt } from 'react-icons/fa'

const NavBar = () => {
    const { user, logOut, } = UseAuth()

    const handleLogOut = () => {
        logOut()
            .then(res => {
                toast.success('logged out successfully, see you again')
            })
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/case'>Gallary</NavLink></li>
        {/* <li><NavLink to='/offer'>Special Offer</NavLink></li> */}
        {user ? <li><NavLink className='hidden' to='/register'>Register</NavLink></li> : <li><NavLink to='/register'>Register</NavLink></li>}
        {user ? <li className="bg-base-200 rounded-xl">
            <li className="flex gap-2 items-center p-3">
                <li className="w-[40px]"><img className="rounded-full w-full" src={user.photoURL} alt="" /></li>
                <li>{user.displayName}</li>
                <li className=""><button className="bg-slate-500 flex items-center gap-1 text-white p-2 rounded-lg" onClick={handleLogOut}><span><FaSignOutAlt></FaSignOutAlt></span>Logout</button></li>
            </li>
        </li> : <li><NavLink to='/login'>Login</NavLink></li>}


    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'}><a className="btn btn-ghost normal-case text-2xl">WedsZone</a></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex items-center gap-4">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;