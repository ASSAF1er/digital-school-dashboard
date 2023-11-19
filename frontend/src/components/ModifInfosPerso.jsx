import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useState, useEffect } from 'react'

function ModifInfosPerso({ activePage, setActivePage, inputStyle, labelStyle, newStudent, setNewStudent }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [sex, setSex] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')

    useEffect(() => {
        setNewStudent({
            ...newStudent,
            firstName,
            lastName,
            sex,
            dateOfBirth
        })
    }, [firstName, lastName, sex, dateOfBirth])

    const handleClick = () => {
        console.log(newStudent)
        setActivePage(activePage + 1)
    }

    return (
        <div>
            <div className="w-full  text-center">
                <strong className="text-center text-blue text-2xl ">Informations personnelles</strong>
            </div>
            <div className="px-44 mt-5 flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col flex-1">
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
                    <div className="flex flex-col flex-1">
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
                <div className="flex flex-col flex-1">
                    <label htmlFor="" className={labelStyle}>
                        Date de naissance<span className="text-blue">*</span>
                    </label>
                    <input
                        type="date"
                        className={inputStyle}
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </div>
                <div className="flex flex-col flex-1 h-30">
                    <label htmlFor="" className={labelStyle}>
                        Photo
                    </label>
                    <div className="bg-light-blue h-36 py-2 rounded-md">
                        <input type="file" className={classNames(inputStyle, 'h-9')} />
                    </div>
                </div>

                <div className="flex flex-row justify-between ">
                    <div></div>
                    <Link>
                        <button
                            onClick={handleClick}
                            className="flex bg-blue rounded-md  text-white px-7 py-1  justify-center items-center text-xl"
                        >
                            Suivant <span className="material-icons">chevron_right</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ModifInfosPerso
