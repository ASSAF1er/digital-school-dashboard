import default_profile from '../assets/profile.png'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import React, { useState } from 'react'

const inputClass = 'w-70 py-1 px-2 text-grey focus:outline-none h-10'

function UpperBar() {
    const [month, setMonth] = useState(new Date().getMonth())
    const [weekDay, setWeekDay] = useState(new Date().getDay())
    const [day, setDay] = useState(new Date().getDate())
    const [hour, setHour] = useState(new Date().getHours())
    const [min, setMin] = useState(new Date().getMinutes())
    const [sec, setSec] = useState(new Date().getSeconds())

    const weekdays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
    const months = ['jan', 'fev', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'sept', 'oct', 'nov', 'dec']

    const refresh = () => {
        setInterval(() => {
            let d = new Date()
            setMonth(d.getMonth() + 1)
            setDay(d.getDate())
            setWeekDay(d.getDay())
            setHour(d.getHours())
            setMin(d.getMinutes())
            setSec(d.getSeconds())
        }, 1000)
    }
    refresh()
    return (
        <div className=" h-16 px-4 flex justify-between items-center  ">
            <Popover className="">
                {({ open }) => (
                    <>
                        <div
                            className={classNames(
                                open && '!visible',
                                ' invisible absolute top-0 left-0 bg-bdcolor backdrop-opacity-90 backdrop-blur-sm w-full h-full z-9 overflow-hidden'
                            )}
                        ></div>

                        <Popover.Button
                            className={classNames(
                                open && 'bg-light-blue',
                                'hover:bg-light-blue p-1 rounded-full focus:outline-none active:outline-none'
                            )}
                        >
                            <div className="px-4 bg-white rounded-full flex items-center shadow-sm  ">
                                <input type="text" placeholder="chercher un élève..." className={inputClass} />
                                <span className="material-icons">search</span>
                            </div>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute  left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="bg-white  shadow-md rounded-md  py-1 h-60 max-h-2/3 ">
                                    <div className="px-4 bg-white  border-light-blue border-b-2 flex items-center shadow-sm  ">
                                        <span className="material-icons cursor-pointer">search</span>
                                        <input
                                            type="text"
                                            placeholder="chercher un élève..."
                                            className="focus:outline-none h-10 text-inputcolor py-2 mx-2 w-4/5"
                                        />
                                    </div>
                                    <div className="px-5 py-3">Aucun résultat de recherche</div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            <div className="flex gap-10">
                <div className="flex items-center gap-1">
                    <div className="text-blue ">
                        <span className="material-icons">calendar_month</span>
                    </div>
                    <div className="flex gap-2">
                        <div>{`${weekdays[weekDay]}, ${day} ${months[month - 1]}`}.</div>
                        <div className="flex flex-1">
                            {hour.toString().length === 1 ? '0' : ''}
                            {hour}:{min.toString().length === 1 ? '0' : ''}
                            {min}:{sec.toString().length === 1 ? '0' : ''}
                            {sec}
                        </div>
                    </div>
                </div>
                <div>
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open && 'bg-light-blue',
                                        'hover:bg-light-blue p-1 z-1 rounded-full focus:outline-none active:outline-none'
                                    )}
                                >
                                    <img
                                        src="https://source.unsplash.com/40x40?african-man-face"
                                        alt="profile"
                                        className="w-10 object-cover rounded-full bg-light-blue"
                                    />
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute  right-2 z-10 mt-2.5  ">
                                        <div className="bg-white w-60 rounded-lg shadow-lg p-3 ">
                                            <strong>Profil</strong>
                                            <br />
                                            <span>Id:</span>
                                            <br />
                                            <span>Nom:</span>
                                            <br />
                                            <span>Statut:</span>
                                            <br />
                                            <span>Email: assaffart@gmail.com</span>
                                            <br />
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default UpperBar
