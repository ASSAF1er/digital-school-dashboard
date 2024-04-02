import * as React from 'react'
import Dialog from '@mui/material/Dialog'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Loaders/Spinner'
import classNames from 'classnames'

export default function ModifEleve({ handleDelete, student }) {
    const [openBox, setOpenBox] = React.useState(false)

    const handleClickOpen = () => {
        setOpenBox(true)
    }

    const handleClose = () => {
        setOpenBox(false)
    }

    return (
        <div>
            <span className="material-icons text-green px-2 cursor-pointer" onClick={handleClickOpen}>
                edit
            </span>

            <Dialog
                open={openBox}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="xl"
            >
                <Formulaire student={student} openBox={openBox} setOpenBox={setOpenBox} handleClose={handleClose} />
            </Dialog>
        </div>
    )
}

function Formulaire({ student, openBox = { openBox }, setOpenBox = { setOpenBox }, handleClose }) {
    const inputStyle = 'h-8 bg-light-blue rounded-md  w-full outline-blue px-2 py-1 text-grey'
    const labelStyle = 'font-bold py-1 text-grey flex '
    const [account, setAccount] = useState(student)

    const [firstName, setFirstName] = useState(account.firstName)
    const [lastName, setLastName] = useState(account.lastName)
    const [sex, setSex] = useState(account.sex)
    const [dateOfBirth, setDateOfBirth] = useState(account.dateOfBirth)
    const [photo, setPhoto] = useState('')
    const [email, setEmail] = useState(account.email)
    const [tel1, setTel1] = useState(account.tel1)
    const [tel2, setTel2] = useState(account.tel2)
    const [quater, setQuater] = useState(account.quater)
    const [dateBegin, setDateBegin] = useState(account.dateBegin)
    const [dateEnd, setDateEnd] = useState(account.dateEnd)
    const [amount, setAmount] = useState(account.amount)
    const [advance, setAdvance] = useState(account.advance)
    const [training, setTraining] = useState(account.training)
    const [schoolLevel, setSchoolLevel] = useState(account.schoolLevel)
    const rest = amount - advance

    useEffect(() => {
        setAccount({
            firstName,
            lastName,
            sex,
            dateOfBirth,
            email,
            tel1,
            tel2,
            quater,
            dateEnd,
            dateBegin,
            amount,
            advance,
            training,
            schoolLevel
        })
    }, [
        firstName,
        lastName,
        sex,
        dateOfBirth,
        email,
        tel1,
        tel2,
        quater,
        dateEnd,
        dateBegin,
        amount,
        advance,
        training,
        schoolLevel
    ])

    const [isUpdating, setIsUpdating] = useState(false)

    const handleUpdate = () => {
        setIsUpdating(true)
        axios
            .put(`http://localhost:8000/api/students/${student._id}`, account)
            .then((res) => {
                console.log(res)
                setIsUpdating(false)
                setOpenBox(false)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className=" bg-white flex flex-col shadow-md rounded-md  pt-2 pb-5  ">
            <div className="p-4 bg-white flex  flex-row w-full justify-center border-light-blue border-b-2  items-center shadow-sm  ">
                <span className="text-2xl font-bold text-[#0c0c75]">Modifier les informations</span>
            </div>
            <div className="flex w-full px-4 gap-4">
                <section className="flex-1  flex-col gap-[10px]  py-3">
                    <div className="flex flex-col ">
                        <label htmlFor="" className={labelStyle}>
                            Nom <span className="text-blue">*</span>
                        </label>
                        <input
                            type="text"
                            className={inputStyle}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="" className={labelStyle}>
                            Prénom <span className="text-blue">*</span>
                        </label>
                        <input
                            type="text"
                            className={inputStyle}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            Sexe <span className="text-blue">*</span>
                        </label>
                        <select type="text" className={inputStyle} value={sex} onChange={(e) => setSex(e.target.value)}>
                            <option value="" defaultValue disabled></option>
                            <option value="F">Féminin</option>
                            <option value="M">Masculin</option>
                        </select>
                    </div>

                    <div className="flex flex-col ">
                        <label htmlFor="" className={labelStyle}>
                            Date de Naissance <span className="text-blue">*</span>
                        </label>
                        <input
                            type="date"
                            className={inputStyle}
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col ">
                        <label htmlFor="" className={labelStyle}>
                            Photo <span className="text-blue">*</span>
                        </label>
                        <input
                            type="text"
                            className={inputStyle}
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                        />
                    </div>
                </section>
                <section className="flex-1  flex-col gap-[2px]  py-3">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            Numéro de téléphone 1 <span className="text-blue">*</span>
                        </label>
                        <input
                            type="number"
                            className={inputStyle}
                            value={tel1}
                            onChange={(e) => setTel1(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            Numéro de téléphone 2
                        </label>
                        <input
                            type="number"
                            className={inputStyle}
                            value={tel2}
                            onChange={(e) => setTel2(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            E-mail <span className="text-blue">*</span>
                        </label>
                        <input
                            type="e-mail"
                            className={inputStyle}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            Quartier <span className="text-blue">*</span>
                        </label>
                        <input
                            type="text"
                            className={inputStyle}
                            value={quater}
                            onChange={(e) => setQuater(e.target.value)}
                        />
                    </div>
                </section>
                <section className="flex-1  flex-col gap-[10px]  py-3">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            Niveau scolaire<span className="text-blue">*</span>
                        </label>

                        <select
                            className={inputStyle}
                            value={schoolLevel}
                            onChange={(e) => setSchoolLevel(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="CEP">CEP</option>
                            <option value="BEPC">BEPC</option>
                            <option value="Probatoire">Probatoire</option>
                            <option value="Bac">Bac</option>
                            <option value="Licence 1">Licence 1</option>
                            <option value="Licence 2">Licence 2</option>
                            <option value="Licence 3">Licence 3</option>
                            <option value="Master">Master</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            Formation <span className="text-blue">*</span>
                        </label>

                        <select className={inputStyle} value={training} onChange={(e) => setTraining(e.target.value)}>
                            <option value=""></option>
                            <option value="Développement web">Développement web</option>
                            <option value="Design Graphique">Design Graphique</option>
                            <option value="Marketing Digital">Marketing Digital</option>
                            <option value="Sécrétariat Bureautique">Sécrétariat Bureautique</option>
                            <option value="Développement Mobile">Développement Mobile</option>
                        </select>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="" className={labelStyle}>
                                Date début <span className="text-blue">*</span>
                            </label>
                            <input
                                type="date"
                                className={inputStyle}
                                value={dateBegin}
                                onChange={(e) => setDateBegin(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="" className={labelStyle}>
                                Date fin <span className="text-blue">*</span>
                            </label>
                            <input
                                type="date"
                                className={inputStyle}
                                value={dateEnd}
                                onChange={(e) => setDateEnd(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            Montant à payer <span className="text-blue">*</span>
                        </label>
                        <input
                            type="text"
                            className={inputStyle}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="" className={labelStyle}>
                                Avance <span className="text-blue">*</span>
                            </label>
                            <input
                                type="text"
                                className={inputStyle}
                                value={advance}
                                onChange={(e) => setAdvance(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="" className={labelStyle}>
                                Reste <span className="text-blue">*</span>
                            </label>
                            <input type="text" disabled className={inputStyle} value={rest} />
                        </div>
                    </div>
                </section>
            </div>
            <div className="mt-2 flex justify-center gap-5 px-5  ">
                <button
                    onClick={() => handleClose()}
                    className="flex flex-1 justify-center py-2 rounded-md cursor-pointer text-md font-bold border-2 border-[#0c0c75] hover:bg-[#b7b7e9] text-[#0c0c75]"
                >
                    Annuler
                </button>{' '}
                <button
                    onClick={() => handleUpdate()}
                    className={classNames(
                        isUpdating && 'opacity-[0.8] ',
                        'flex flex-1 justify-center py-2 rounded-md cursor-pointer text-md font-bold bg-[#0c0c75] hover:bg-[#181894] text-white'
                    )}
                >
                    {isUpdating ? <Spinner /> : 'Valider'}
                </button>
            </div>
        </div>
    )
}
