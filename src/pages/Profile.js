import UserContext from "../context/UserContext"
import { useContext } from "react"

function Profile() {

    
    const { users } = useContext(UserContext)

  return (
    <section className="flex mt-16 flex-col md:flex-row h-screen items-center">

    <div className="bg-white hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
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