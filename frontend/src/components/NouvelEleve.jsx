import InfosPerso from '../pages/InfosPerso'
import InfosContact from '../pages/InfosContact'
import InfosFormation from '../pages/InfosFormation'
import HorizontalLinearStepper from './LinearStepper'
import AddSuccess from './AddSucess'

import React, { useState } from 'react'

function NouvelEleve() {
    const inputStyle = ' appearance-none bg-light-blue rounded-md h-8 outline-blue px-2 py-1 text-grey'
    const labelStyle = 'font-bold py-1 text-grey'
    const [activePage, setActivePage] = useState(0)
    const [newStudent, setNewStudent] = useState({
        firstName: '',
        lastName: '',
        sex: '',
        dateOfBirth: '',
        tel1: '',
        tel2: '',
        email: '',
        quater: '',
        schoolLevel: '',
        training: '',
        dateBegin: '',
        dateEnd: '',
        amount: '',
        advance: '',
        rest: ''
    })
    const tab = [
        <InfosPerso
            activePage={activePage}
            setActivePage={setActivePage}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            newStudent={newStudent}
            setNewStudent={setNewStudent}
        />,
        <InfosContact
            activePage={activePage}
            setActivePage={setActivePage}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            newStudent={newStudent}
            setNewStudent={setNewStudent}
        />,
        <InfosFormation
            activePage={activePage}
            setActivePage={setActivePage}
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            newStudent={newStudent}
            setNewStudent={setNewStudent}
        />,
        <AddSuccess />
    ]

    return (
        <div className="relative flex flex-1 flex-col h-full gap-5">
            <HorizontalLinearStepper activePage={activePage} />
            {tab[activePage]}
        </div>
    )
}

export default NouvelEleve
