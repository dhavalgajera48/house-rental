import { Link, NavLink } from "react-router-dom"

function Navbar() {

    return (
        <div className="navbar top-0 shadow shadow-gray-600 border-2 bg-base-100">
            <div className="navbar-start mr-5 ml-5">
                <Link to='' className="btn btn-ghost normal-case text-xl">House Rental</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink exact="true" to='/' >Explore</NavLink></li>
                    <li><NavLink exact="true" to='/offer' >Offers</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/signin' >Sign In</NavLink></li>
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
                </ul>


            </div>
        </div>
    )
}

export default Navbar
