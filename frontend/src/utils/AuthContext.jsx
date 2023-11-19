import React, { useState, createContext } from 'react'

export const ConnectedUser = createContext('')

function ConnectedUserProvider({ children }) {
    const [connected, setConnected] = useState(false)
    return <ConnectedUser.Provider value={{ connected, setConnected }}>{children}</ConnectedUser.Provider>
}

export default ConnectedUserProvider
