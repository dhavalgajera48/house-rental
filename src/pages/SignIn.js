import { useState } from 'react'
import googleIcon from '../assets/svg/googleIcon.svg'

function SignIn() {

    const [formData, setFormData] = useState({
      email: '',
      password: ''
    })
  const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id] : e.target.value
        }))
    }
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">

      <div className="bg-white hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        {/* <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" /> */}

      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

        <div className="w-full h-100">


          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-2">Log in to your account</h1>

          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input type="email" name="email" id="email"
                placeholder="Enter Email Address" onChange = {onChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="true" required />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" onChange = {onChange} required />
            </div>

            <div className="text-right mt-2">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6" onClick={handleFormSubmit}>Log In</button>
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

          <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
            account</a></p>
        </div></div>
    </section>
  )
}

export default SignIn
