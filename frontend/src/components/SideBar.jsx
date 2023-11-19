import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/digital-school-logo-transparent.png'
import { SIDE_BAR_TOP_LINKS, SIDE_BAR_BOTTOM_LINKS } from '../utils/SideBarLinks'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'

const LinkClasses =
    'text-grey text-[18px] flex flex-row items-center gap-2 pl-5 py-3 hover:bg-light-blue  rounded-sm font-normal '

const ActiveLink = 'text-white bg-blue hover:!bg-blue '

function SideBar() {
    return (
        <div className="bg-white  w-60 py-3 px-1 flex flex-col shadow-xl">
            <div className="flex items-center  mx-auto pb-4">
                <img src={logo} alt="logo" className="object-contain  w-40" />
            </div>
            <div className=" flex flex-1 pb-0.5 flex-col gap-0.5">
                {SIDE_BAR_TOP_LINKS.map((item) => (
                    <SideBarLink key={item.label} item={item} />
                ))}
            </div>
            <div className=" border-t pt-0.5  ">
                {SIDE_BAR_BOTTOM_LINKS.map((item) => (
                    <SideBarLink key={item.label} item={item} />
                ))}
                <div>
                    <Link to="/Connexion" className={classNames('text-red', LinkClasses)}>
                        <span className="material-icons">power_settings_new</span>
                        Déconnexion
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar

function SideBarLink({ item }) {
    const location = useLocation()
    return (
        <Link to={item.path} className={classNames(LinkClasses, location.pathname === item.path ? ActiveLink : '')}>
            <span class className="material-icons">
                {item.icon}
            </span>
            {item.label}
        </Link>
    )
}
