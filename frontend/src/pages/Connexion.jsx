import logo from '../assets/digital-school-logo-transparent.png'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../utils/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Connexion() {
    const { setConnectedUser } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleClick = () => {
        window.open('https://www.seeds.cm')
    }
    const handleLogin = () => {
        axios
            .post('http://localhost:8000/api/users/login/', { email, password })
            .then((res) => {
                setConnectedUser(res.data)
                navigate('/')
            })
            .catch((err) => console.log(err))
    }
    const inputStyle =
        'border-[#e2e8f0] border-2 rounded-md focus:outline-[#93c5fd]  w-10/12 h-[40px] shadow-sm px-[5px] text-[#404040]'
    return (
        <div className="  w-screen h-screen bg-[#f7f7f7] shadow-md flex flex-col justify-center items-center">
            <div className="relative flex flex-col justify-center items-center bg-[#f0f9ff] border border-light-blue py-[50px] w-2/5 rounded-[10px]">
                <div className="flex items-center  mx-auto pb-2">
                    <img src={logo} alt="logo" className="object-contain  w-40" />
                </div>

                <br />

                <div className="text-[#f87171]">Application reservée aux administrateurs</div>
                <br />
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputStyle}
                    placeholder="Email"
                />
                <br />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    className={inputStyle}
                />
                <br />
                <div className="flex flex-row justify-between w-10/12 px-1">
                    <div className="flex flex-row items-center justify-center text-sm text-grey gap-[2px]">
                        <input type="checkbox" className="cursor-pointer" />
                        se souvenir de moi
                    </div>
                    <div className="text-blue cursor-pointer text-sm">Mot de passe oublié ?</div>
                </div>
                {/* comportement de div */}
                <div
                    onClick={() => handleLogin()}
                    className="mt-2 hover:bg-[#5795e7] border-[#e2e8f0] text-center border-2 rounded-md bg-blue text-white font-bold text-[20px] w-10/12  shadow-sm py-[5px] cursor-pointer"
                >
                    Se connecter
                </div>
                <div className="absolute  bottom-2  italic right-[9%] text-grey ">
                    <div>
                        {' '}
                        <span>
                            Powered by{' '}
                            <span
                                onClick={handleClick}
                                className="text-blue not-italic hover:text-[#4c1d95] font-medium cursor-pointer"
                            >
                                SEED
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connexion
