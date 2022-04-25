import React, { useEffect } from 'react'
import { createContext, useState } from 'react'
import {getAuth} from 'firebase/auth'

const UserContext = createContext()



export const UserProvier = ({ children }) => {
    const [user, setUser] = useState(null)
    const [displayName, setDisplayName] = useState(null)
    const auth = getAuth()

    // useEffect(() => {
    //     fetchUser()
    // }, [user])

    const fetchUser = () => {
        setUser(auth.currentUser)
        console.log(user);
        if(user){
            console.log(displayName);
            setDisplayName(user.displayName)
        }

    }
    return <UserContext.Provider value={{
        user,
        displayName,
        fetchUser,
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContext
