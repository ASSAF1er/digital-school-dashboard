import React, { useState, useEffect } from 'react'
import axios from 'axios'

function InfosFormation({ activePage, setActivePage, inputStyle, labelStyle, newStudent, setNewStudent }) {
    const handleClickPrev = () => setActivePage(activePage - 1)

    const [schoolLevel, setSchoolLevel] = useState(newStudent.schoolLevel)
    const [training, setTraining] = useState(newStudent.training)
    const [dateBegin, setDateBegin] = useState(newStudent.dateBegin)
    const [dateEnd, setDateEnd] = useState(newStudent.dateEnd)
    const [amount, setAmount] = useState(newStudent.amount)
    const [advance, setAdvance] = useState(newStudent.advance)
    const [rest, setRest] = useState(newStudent.rest)

    useEffect(() => {
        setNewStudent({ ...newStudent, schoolLevel, training, dateBegin, dateEnd, amount, advance, rest })
    }, [schoolLevel, training, dateBegin, dateEnd, amount, advance, rest])

    useEffect(() => {
        setRest(amount - advance)
    }, [amount, advance])

    function addNewStudent() {
        setActivePage(activePage + 1)
        axios
            .post('http://localhost:8000/api/students', newStudent)
            .then(() => console.log('Nouvel Eleve ajouté avec succès'))
            .catch((error) => console.log(error))
    }
    return (
        <div>
            <div className="w-full  text-center">
                <strong className="text-center text-blue text-2xl ">Informations de la Formation</strong>
            </div>
            <div className="px-44 mt-5 flex flex-col gap-4">
                <div className="flex flex-col flex-1">
                    <label htmlFor="" className={labelStyle}>
                        Niveau scolaire<span className="text-blue">*</span>
                    </label>

                    <select className={inputStyle} value={schoolLevel} onChange={(e) => setSchoolLevel(e.target.value)}>
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
                        Formation souhaitée<span className="text-blue">*</span>
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

                <div className="flex flex-row justify-between ">
                    <div>
                        <button
                            onClick={handleClickPrev}
                            className="flex  rounded-md border-blue border text-blue px-7 py-1  justify-center items-center text-xl"
                        >
                            <span className="material-icons">chevron_left</span> Précédent
                        </button>
                    </div>

                    <button
                        onClick={addNewStudent}
                        className="flex bg-blue rounded-md  text-white px-7 py-1  justify-center items-center text-xl"
                    >
                        Terminé
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfosFormation
