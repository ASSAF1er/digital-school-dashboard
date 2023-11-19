import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import { useState, useEffect } from 'react'

function ModifCompte({ handleEdit, account }) {
    return (
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
                        className={classNames(open && '', 'hover:transform hover:scale-[1.1]  rounded-full ')}
                    >
                        <span className="material-icons text-green px-2 cursor-pointer">edit</span>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-500"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute left-1/2 top-[10%] -translate-x-1/2 transform -translate-y-[0%] z-10 mt-3  max-w-sm  px-4 ">
                            <Formulaire handleEdit={handleEdit} account={account} />
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default ModifCompte

function Formulaire({ handleEdit, account }) {
    const inputStyle = 'h-8 bg-light-blue rounded-md  w-full outline-blue px-2 py-1 text-grey appearance-none'
    const labelStyle = 'font-bold py-1 text-grey'
    const [status, setStatus] = useState(account.status)
    const [name, setName] = useState(account.name)
    const [email, setEmail] = useState(account.email)
    const [tel, setTel] = useState(account.tel)
    const [password, setPassword] = useState(account.password)
    const date = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    const [newInfos, setNewInfos] = useState(account)

    useEffect(() => {
        setNewInfos({ ...newInfos, status, name, email, tel, password, date })
    }, [status, name, email, tel, password, date])

    return (
        <div className=" bg-white  shadow-md rounded-md w-[450px] py-1  ">
            <div className="p-2 bg-white flex  flex-row justify-center border-light-blue border-b-2  items-center shadow-sm  ">
                <span className="text-2xl font-bold text-[#0c0c75]">Modifier les informations du compte</span>
            </div>
            <div className=" flex flex-col gap-[10px] px-5 py-3">
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        Statut <span className="text-blue">*</span>
                    </label>
                    <select
                        name=""
                        id=""
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className={inputStyle}
                    >
                        <option value="" disabled selected></option>
                        <option value="admin">Admin</option>
                        <option value="Comptable">Comptable</option>
                        <option value="super-admin">Super Admin</option>
                    </select>
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        Nom <span className="text-blue">*</span>
                    </label>
                    <input type="text" className={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        E-mail <span className="text-blue">*</span>
                    </label>
                    <input
                        type="text"
                        className={inputStyle}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        Tel <span className="text-blue">*</span>
                    </label>
                    <input type="text" className={inputStyle} value={tel} onChange={(e) => setTel(e.target.value)} />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        Mot de passe <span className="text-blue">*</span>
                    </label>
                    <input
                        type="text"
                        className={inputStyle}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled
                    />
                </div>
                <div
                    onClick={() => handleEdit(newInfos)}
                    className="mt-2 flex justify-center py-2 rounded-md cursor-pointer text-md font-bold bg-blue hover:bg-[#181894] text-white"
                >
                    Modifier
                </div>
            </div>
        </div>
    )
}
