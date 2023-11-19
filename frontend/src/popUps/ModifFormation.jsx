import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import { useState, useEffect } from 'react'

function ModifFormation({ editTraining, training }) {
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
                        className={classNames(open && '', 'hover:transform hover:scale-[1.1] mt-1  rounded-full ')}
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
                        <Popover.Panel className="absolute left-1/2 top-[10%] -translate-x-1/2 transform -translate-y-[0%] z-10    px-4 ">
                            <Formulaire editTraining={editTraining} training={training} />
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default ModifFormation

function Formulaire({ editTraining, training }) {
    const inputStyle = 'h-8 bg-light-blue rounded-md  w-full outline-blue px-2 py-1 text-grey'
    const labelStyle = 'font-bold py-1 text-grey'
    const [name, setName] = useState(training.name)
    const [duration, setDuration] = useState(training.duration)
    const [mincost, setMincost] = useState(training.mincost)
    const [maxcost, setMaxcost] = useState(training.maxcost)
    const [trainer1, setTrainer1] = useState(training.trainer1)
    const [trainer2, setTrainer2] = useState(training.trainer2)
    const [newInfos, setnewInfos] = useState(training)

    useEffect(() => {
        setnewInfos({ ...newInfos, name, duration, mincost, maxcost, trainer1, trainer2 })
    }, [name, duration, mincost, maxcost, trainer1, trainer2])

    return (
        <div className=" bg-white  shadow-md rounded-md w-[450px] py-1  ">
            <div className="p-2 bg-white flex  flex-row justify-center border-light-blue border-b-2  items-center shadow-sm  ">
                <span className="text-2xl font-bold text-[#0c0c75]">Modifier cette Formation</span>
            </div>
            <div className=" flex flex-col gap-[10px] px-5 py-3">
                <div className="flex flex-col">
                    <label htmlFor="" className={labelStyle}>
                        Nom <span className="text-blue">*</span>
                    </label>
                    <input type="text" className={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className={labelStyle}>
                        Durée<span className="text-blue">*</span>
                    </label>
                    <input
                        type="text"
                        className={inputStyle}
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className={labelStyle}>
                        Cout minimal <span className="text-blue">*</span>
                    </label>
                    <input
                        type="text"
                        className={inputStyle}
                        value={mincost}
                        onChange={(e) => setMincost(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className={labelStyle}>
                        Cout maximal <span className="text-blue">*</span>
                    </label>
                    <input
                        type="text"
                        className={inputStyle}
                        value={maxcost}
                        onChange={(e) => setMaxcost(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className={labelStyle}>
                        Formateur 1 <span className="text-blue">*</span>
                    </label>
                    <input
                        type="text"
                        className={inputStyle}
                        value={trainer1}
                        onChange={(e) => setTrainer1(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className={labelStyle}>
                        Formateur 2
                    </label>
                    <input
                        type="text"
                        className={inputStyle}
                        value={trainer2}
                        onChange={(e) => setTrainer2(e.target.value)}
                    />
                </div>
                <div
                    onClick={() => editTraining(newInfos)}
                    className="mt-2 flex justify-center py-2 rounded-md cursor-pointer text-md font-bold bg-blue hover:bg-[#181894] text-white"
                >
                    Modifier
                </div>
            </div>
        </div>
    )
}
