import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import { useState, useEffect } from 'react'

function MailCompte({ account }) {
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
                        <span className="material-icons text-[#f59e0b] px-2 cursor-pointer">mail</span>
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
                            <Formulaire account={account} />
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default MailCompte

function Formulaire({ account }) {
    const inputStyle = ' bg-light-blue rounded-md  w-full outline-blue px-2 py-[6px] text-grey'
    const labelStyle = 'font-bold py-1 text-grey'
    const destinator = account.email
    const [object, setObject] = useState('')
    const [body, setBody] = useState('')
    const [mail, setMail] = useState({})

    useEffect(() => {
        setMail({ object, body })
    }, [object, body])

    return (
        <div className=" bg-white  shadow-md rounded-md w-[450px] py-[6px]  ">
            <div className="p-2 bg-white flex  flex-row justify-center border-light-blue border-b-2  items-center shadow-sm  ">
                <span className="text-2xl font-bold text-[#0c0c75]">Envoyer un mail </span>
            </div>
            <div className=" flex flex-col gap-[10px] px-5 py-3">
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        {'  '}À
                    </label>
                    <input type="text" className={inputStyle} value={destinator} disabled />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        Objet<span className="text-blue">*</span>
                    </label>

                    <input
                        type="text"
                        className={inputStyle}
                        value={object}
                        onChange={(e) => setObject(e.target.value)}
                    />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        Corps<span className="text-blue">*</span>
                    </label>
                    <textarea rows={4} className={inputStyle} value={body} onChange={(e) => setBody(e.target.value)} />
                </div>

                <div
                    onClick={() => {
                        console.log(mail)
                    }}
                    className="mt-2 flex justify-center py-2 rounded-md cursor-pointer text-md font-bold bg-blue hover:bg-[#181894] text-white"
                >
                    Envoyer
                </div>
            </div>
        </div>
    )
}
