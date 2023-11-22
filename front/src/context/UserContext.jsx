import React, { createContext, useState, useEffect  } from 'react';


export const UserContext = createContext();

function UserProvider({children}) {
    

    const [user, setUser] = useState('');

    function loadUser(username) {
        setUser(username);
    }


    return (
        <UserContext.Provider value={{user, loadUser}}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider