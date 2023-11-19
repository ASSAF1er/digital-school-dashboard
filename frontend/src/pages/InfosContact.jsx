import React, { useState, useEffect } from 'react'

function InfosContact({ activePage, setActivePage, inputStyle, labelStyle, newStudent, setNewStudent }) {
    const handleClickNext = () => setActivePage(activePage + 1)
    const handleClickPrev = () => setActivePage(activePage - 1)

    const [tel1, setTel1] = useState(newStudent.tel1)
    const [tel2, setTel2] = useState(newStudent.tel2)
    const [email, setEmail] = useState(newStudent.email)
    const [quater, setQuater] = useState(newStudent.quater)

    useEffect(() => {
        setNewStudent({ ...newStudent, tel1, tel2, email, quater })
    }, [tel1, tel2, email, quater])

    return (
        <div>
            <div className="w-full  text-center">
                <strong className="text-center text-blue text-2xl ">Informations de contact</strong>
            </div>
            <div className="px-44 mt-5 flex flex-col gap-4">
                <div className="flex flex-col flex-1">
                    <label htmlFor="" className={labelStyle}>
                        Numéro de téléphone 1 <span className="text-blue">*</span>
                    </label>
                    <input type="text" className={inputStyle} value={tel1} onChange={(e) => setTel1(e.target.value)} />
                </div>
                <div className="flex flex-col flex-1">
                    <label htmlFor="" className={labelStyle}>
                        Numéro de téléphone 2
                    </label>
                    <input type="text" className={inputStyle} value={tel2} onChange={(e) => setTel2(e.target.value)} />
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
                        onClick={handleClickNext}
                        className="flex bg-blue rounded-md  text-white px-7 py-1  justify-center items-center text-xl"
                    >
                        Suivant <span className="material-icons">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfosContact
