import React, {createContext, useState} from "react";


// Create a context
const UserContext = createContext();

// Create a provider component that will give access to the context data to its child components
function UserProvider({children}){
    const [user, setUser] = useState(null);
    return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>)
}

export {UserContext, UserProvider}