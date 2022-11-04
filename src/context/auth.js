import React, {createContext, useState} from "react";

const AuthContext = createContext ({});

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState (false)


    return(
        <AuthContext.Provider value = {{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;