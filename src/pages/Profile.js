import UserContext from "../context/UserContext"
import { useContext } from "react"

function Profile() {


  const { users } = useContext(UserContext)

  return (
    <section className="flex mt-24 mb-8 flex-col md:flex-row">

      <div className="bg-white hidden lg:block w-full mx-10">
        <div class="card bg-gray-100 shadow-xl">

          <div class="card-body px-2 py-2">

            <div class="flex flex-row">
              <div class="basis-1/2 ml-5 justify-start content-center">
                  <h2 className="card-title align-middle py-2">User Profile</h2>
                {/* </div> */}
              </div>

              <div class="basis-1/2">
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
        {users ? (
          <main>

            <p >User Name : {users.displayName ? users.displayName : '-'}</p>
            <p >Email ID : {users.email}</p>
          </main>

        ) : (
          <main>
            <p >No User Deails Found</p>
          </main>
        )}
      </div>
    </section>
  )
}

export default Profile