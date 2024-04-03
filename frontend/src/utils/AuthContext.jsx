import React, { useState, createContext } from 'react'

export const AuthContext = createContext('')

function AuthContextProvider({ children }) {
    const [connectedUser, setConnectedUser] = useState('')
    return <AuthContext.Provider value={{ connectedUser, setConnectedUser }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
