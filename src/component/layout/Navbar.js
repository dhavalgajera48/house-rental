import { Link, NavLink, useNavigate } from "react-router-dom"
import { getAuth } from 'firebase/auth'
import { useContext } from "react"

import UserContext from "../../context/UserContext"


function Navbar() {

    const auth = getAuth()


    // const [formData, setFormData] = useState({
    //     name: auth.currentUser.displayName,
    //     email: auth.currentUser.email,
    //   })

    const navigate = useNavigate()

    const { users, dispatch } = useContext(UserContext)
    
    const onLogout = () => {
        auth.signOut()
        navigate('/')
        dispatch({type:'GET_USERS', payload:null})
    }

    return (
        <div className="navbar fixed top-0 shadow shadow-gray-600 border-2 bg-base-100">
            <div className="navbar-start mr-5 ml-5">
                <Link to='' className="btn btn-ghost normal-case text-xl">House Rental</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 space-x-1">
                    <li><NavLink exact="true" to='/' >Explore</NavLink></li>
                    <li><NavLink exact="true" to='/offer' >Offers</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">

                {users ? (
                    <ul className="menu menu-horizontal p-0 space-x-1">
                        <Link to='/profile' className="btn btn-ghost normal-case">{users.displayName ? users.displayName : users.email}</Link>
                        <button className="btn btn-ghost hover:btn-primary" onClick={onLogout}>Log Out</button>
                        {/* <li><Link to='/' onClick={onLogout} >Sign Out</Link></li> */}
                    </ul>

                ) : (
                    <ul className="menu menu-horizontal p-0 space-x-1">
                        <li><NavLink to='/signin' >Sign In</NavLink></li>
                        <li><NavLink to='/signup' >Sign Up</NavLink></li>
                    </ul>
                )}



            </div>
        </div>
    )
}

export default Navbar
