import { useState } from "react"
import { UserContext } from "./UseContext"

// const user = {
//     id: 123,
//     name: 'Agustin Fraile',
//     email: 'agustin@google.com'
// }


export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState();


    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
        
    )
}
