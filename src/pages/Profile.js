import UserContext from "../context/UserContext"
import { useContext, useState } from "react"
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'



import { getAuth, updateProfile } from "firebase/auth"

function Profile() {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const { name, email } = formData


  const { dispatch } = useContext(UserContext)
  const [changeDetails, setChangeDetails] = useState(false)

  const onSubmit = async () => {
    // console.log("ON Submit Works");
    try {

      if (auth.currentUser.displayName !== name) {
        //update display name in firebase
        await updateProfile(auth.currentUser, { displayName: name })
      }

      const userRef = doc(db, 'users', auth.currentUser.uid)
      await updateDoc(userRef, {
        name
      })

      // Dispatching USER Context for Navbar
      dispatch({type:'GET_USERS', payload:{ displayName: name, email: auth.currentUser.email}})
      
      toast.success('USER Profile Updated Successfully!', { autoClose: 3000 })


    } catch (error) {
      toast.error('Could Not Update Profile!', { autoClose: 3000 })

    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
<>
      <div className="bg-white hidden lg:block w-full mx-10">
        <div className="card bg-blue-800 shadow-xl">

          <div className="card-body px-2 py-2">

            <div className="flex flex-row">
              <div className="basis-1/2 ml-5 justify-start content-center">
                <h2 className="card-title text-white align-middle py-2">User Profile</h2>
                {/* </div> */}
              </div>

              <div className="basis-1/2">
                <div className="card-actions justify-end">
                  <button className="btn bg-white btn-outline" onClick={() => {
                    changeDetails && onSubmit()
                    setChangeDetails((prevState) => !prevState)
                  }}>
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-8 bg-white border">
          <div className="card-body px-8 py-2">

            <form className="w-1/3">
              <div className="mt-4">
                <label className="block text-gray-700">User Name</label>
                <input type="text" name="name" id="name" disabled={!changeDetails}
                  placeholder="Enter User Name" onChange={onChange} value={name}
                  className="w-full px-4 py-3 rounded-lg bg-white disabled:bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="true" required />
              </div>
              <div className="mt-4 mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" value={email} disabled
                  placeholder="Enter Email Address" onChange={onChange}
                  className="w-full px-4 py-3 rounded-lg bg-white disabled:bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoComplete="true" required />
              <p className="text-red-600">* Email Address can not be Modified</p>
              </div>

            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Profile