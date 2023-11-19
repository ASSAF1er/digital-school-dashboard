import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import { useState, useEffect } from 'react'

function AjoutTransaction({ handleAdd }) {
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
                        className={classNames(open && '', 'hover:transform hover:scale-[1.1] mt-3  rounded-full ')}
                    >
                        <div>
                            <span className="material-icons text-[#0c0c75] cursor-pointer text-[43px] leading-[43px] shadow-2xl rounded-full ">
                                add_circle
                            </span>
                        </div>
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
                        <Popover.Panel className="absolute left-1/2 top-1/4 -translate-x-1/2 transform -translate-y-1/4 z-10 mt-3  max-w-sm  px-4 ">
                            <Formulaire handleAdd={handleAdd} />
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default AjoutTransaction

function Formulaire({ handleAdd }) {
    const [transaction, setTransaction] = useState()
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        const hours = new Date().getHours()
        const mins = new Date().getMinutes()
        const secs = new Date().getSeconds()
        const day = new Date().getDate()
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()
        setTransaction([
            {
                id: new Date() + new Date().getMilliseconds(),
                date: `${day}-${month}-${year}`,
                time: `${hours}:${mins}:${secs}`,
                status: 'Test',
                autor: 'User',
                type,
                amount,
                description
            }
        ])
    }, [type, amount, description])

    const inputStyle = 'bg-light-blue rounded-md  w-full outline-blue px-2 py-1 text-grey appearance-none'
    const labelStyle = 'font-bold py-1 text-grey'

    return (
        <div className=" bg-white  shadow-md rounded-md w-[400px] py-1  ">
            <div className="p-2 bg-white flex  flex-row justify-center border-light-blue border-b-2  items-center shadow-sm  ">
                <span className="text-2xl font-bold text-[#0c0c75]">Nouvelle Transaction</span>
            </div>
            <div className=" flex flex-col gap-[10px] px-5 py-3">
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        Type <span className="text-blue">*</span>
                    </label>
                    <select name="" id="" value={type} onChange={(e) => setType(e.target.value)} className={inputStyle}>
                        <option value=""></option>
                        <option value="entree">Entrée</option>
                        <option value="sortie">Sortie</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="" className={labelStyle}>
                        Montant <span className="text-blue">*</span>
                    </label>
                    <input
                        type="text"
                        className={inputStyle}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="" className={labelStyle}>
                        Description <span className="text-blue">*</span>
                    </label>
                    <textarea
                        type="text"
                        rows={2}
                        className={inputStyle}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div
                    onClick={() => handleAdd(transaction)}
                    className=" flex justify-center py-2 rounded-md cursor-pointer text-md font-bold bg-[#0c0c75] hover:bg-[#181894] text-white"
                >
                    Enregistrer
                </div>
            </div>
        </div>
    )
}
