import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import googleIcon from '../assets/svg/googleIcon.svg'
import homeSweetHomeIcon from '../assets/jpg/homeSweetHome.jpg'
import { NavLink } from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import UserContext from '../context/UserContext'

function SignIn() {
  const navigate = useNavigate()

  const { dispatch } = useContext(UserContext)


  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  const onSubmit = async (e) => {
    e.preventDefault();

    try{
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      
      if(userCredential.user){
        dispatch({type:'GET_USERS', payload:userCredential.user})
        navigate('/')
        toast.success('User Sign In Successfully!', {autoClose:3000})
      }
    }catch(error){
      // console.log(error);
      toast.error('Bad Credentials!')
    }
  };

  return (
    // <section className="flex mt-24 mb-8 flex-col md:flex-row h-screen items-center">
<>
      <div className="bg-white hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <div className='mx-20 my-20 justify-center'>
          <img src={homeSweetHomeIcon} alt="" className="mx-auto" />
          <p className="mx-auto text-center font-bold">Login to your account to unlock below benefits</p>
          <div className="divider divider-vertical h-fit"></div>
          <ul className="list-none list-outside text-center">
            <li>Get latest updates about Properties and Projects.</li>
            <li>Access millions of advertiser details in one click.</li>
            <li>Get market information, reports and price trends.</li>
            <li>Advertise your property for free!</li>
          </ul>
        </div>
      </div>
      <div className="divider divider-horizontal h-screen"></div>
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex">

        <div className="w-full h-auto">


          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-2">Log in to your account</h1>

          <form className="mt-6" onSubmit={onSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700">Email Address</label>
              <input type="email" name="email" id="email"
                placeholder="Enter Email Address" onChange={onChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="true" required />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" onChange={onChange} required />
            </div>

            <div className="text-right mt-2">
              <NavLink to="/forgot-password" className="text-sm font-semibold text-gray-900 hover:text-blue-700 focus:text-blue-700">Forgot Password?</NavLink>
            </div>

            <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />

          <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
              <img src={googleIcon} alt="" className='w-5 h-5'></img>
              <span className="ml-4">
                Log in
                with
                Google</span>
            </div>
          </button>

          <p className="mt-8">Need an Account? <NavLink exact="true" to='/signup' className="text-blue-500 hover:text-blue-700 font-semibold" >Create an
            account</NavLink></p>
        </div></div>
    </>
  )
}

export default SignIn
