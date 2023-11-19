import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import UpperBar from './UpperBar'
import Footer from './Footer'
import { useContext } from 'react'
import { ConnectedUser } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Layout() {
    const { connected } = useContext(ConnectedUser)
    const navigate = useNavigate()

    useEffect(() => {
        if (!connected) {
            navigate('/Connexion')
        }
    }, [connected])

    return (
        <div className="flex flex-row bg-slate h-screen w-screen overflow-hidden">
            <SideBar />
            <div className="flex-1">
                <UpperBar />
                <div className="p-4">{<Outlet />}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
