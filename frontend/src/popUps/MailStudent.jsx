import * as React from 'react'
import Dialog from '@mui/material/Dialog'

import { useEffect, useState } from 'react'

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
                <Formulaire student={student} handleSendMail={handleSendMail} />
            </Dialog>
        </div>
    )
}

function Formulaire({ student, handleSendMail }) {
    const inputStyle = ' bg-light-blue rounded-md  w-full outline-blue px-2 py-[6px] text-grey'
    const labelStyle = 'font-bold py-1 text-grey'
    const destinator = student.email
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
                        handleSendMail()
                    }}
                    className="mt-2 flex justify-center py-2 rounded-md cursor-pointer text-md font-bold bg-blue hover:bg-[#181894] text-white"
                >
                    Envoyer
                </div>
            </div>
        </div>
    )
}
