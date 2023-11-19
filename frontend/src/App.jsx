import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import GestionEleves from './pages/GestionEleves'

import LogIn from './pages/LogIn'
import NouvelEleve from './components/NouvelEleve'
import Formations from './pages/Formations'
import Comptabilite from './pages/Comptabilite'
import SuperAdmin from './pages/SuperAdmin'
import MonProfil from './pages/Monprofil'
import Connexion from './pages/Connexion'
import ConnectedUserProvider from './utils/AuthContext'
import Infos from './pages/Infos'
function App() {
    return (
        <ConnectedUserProvider>
            <Router>
                <Routes>
                    <Route path="/Connexion" element={<Connexion />} />
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/nouvel-eleve" element={<NouvelEleve />} />
                        <Route path="/gestion-eleves" element={<GestionEleves />} />
                        <Route path="/formations" element={<Formations />} />
                        <Route path="/comptabilite" element={<Comptabilite />} />
                        <Route path="/espace-super-admin" element={<SuperAdmin />} />
                        <Route path="/profil" element={<MonProfil />} />
                        <Route path="/Infos" element={<Infos />} />
                    </Route>

                    <Route path="/login" element={<LogIn />} />
                </Routes>
            </Router>
        </ConnectedUserProvider>
    )
}

export default App
