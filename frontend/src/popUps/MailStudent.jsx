import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Spinner from '../components/Loaders/Spinner'

import { useEffect, useState } from 'react'
import axios from 'axios'
import classNames from 'classnames'

export default function MailStudent({ handleDelete, student }) {
    const [openBox, setOpenBox] = React.useState(false)

    const handleClickOpen = () => {
        setOpenBox(true)
    }
    const handleSendMail = () => {
        setOpenBox(false)
    }

    const handleClose = () => {
        setOpenBox(false)
    }

    return (
        <div>
            <span className="material-icons text-[#f59e0b] px-2 cursor-pointer" onClick={() => handleClickOpen()}>
                mail
            </span>

            <Dialog
                open={openBox}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Formulaire student={student} setOpenBox={setOpenBox} />
            </Dialog>
        </div>
    )
}

function Formulaire({ student, setOpenBox }) {
    const inputStyle = ' bg-light-blue rounded-md  w-full outline-blue px-2 py-[6px] text-grey'
    const labelStyle = 'font-bold py-1 text-grey'

    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')
    const email = student.email
    const [isSending, setIsSending] = useState(false)

    const handleSendMail = () => {
        setIsSending(true)
        axios
            .post(`http://localhost:8000/api/students/${student._id}`, { subject, text })
            .then(() => {
                console.log('message envoyé!')
                setIsSending(false)
                setOpenBox(false)
            })
            .catch((err) => console.log(err))
        // setOpenBox(false)
    }

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
                    <input type="text" className={inputStyle} value={email} disabled />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        Objet<span className="text-blue">*</span>
                    </label>

                    <input
                        type="text"
                        className={inputStyle}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="" className={labelStyle}>
                        Corps<span className="text-blue">*</span>
                    </label>
                    <textarea rows={4} className={inputStyle} value={text} onChange={(e) => setText(e.target.value)} />
                </div>

                <div
                    onClick={() => {
                        handleSendMail()
                    }}
                    className={classNames(
                        isSending && 'opacity-[0.8] ',
                        'mt-2 flex justify-center py-2 rounded-md cursor-pointer text-md font-bold bg-blue hover:bg-[#181894] text-white'
                    )}
                >
                    {isSending ? <Spinner /> : 'Envoyer'}
                </div>
            </div>
        </div>
    )
}
