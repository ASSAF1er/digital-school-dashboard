//import { studentList } from '../data/studentList'

import StudentLoader from '../components/Loaders/StudentLoader'

import ListElement from '../components/ListElement'

import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GestionEleves() {
    const thStyle = 'pl-3 whitespace-nowrap py-4'
    const [students, setStudents] = useState()
    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8000/api/students/${id}`)
            .then(() => setStudents(students.filter((stud) => stud._id !== `${id}`)))
            .catch((err) => console.log({ err }))
    }

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/students/')
            .then((res) => setStudents(res.data.reverse()))

            .catch((error) => {
                console.log(error)
            })

        console.log(students)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center w-full h-full ">
            <div className=" mt-1 pt-2 shadow-md flex  max-h-[500px] w-[1000px] overflow-scroll">
                <table>
                    <thead>
                        <tr className="bg-blue text-white  px-2 text-left rounded-md">
                            <th className={thStyle}> </th>
                            <th className={thStyle}>Noms</th>
                            <th className={thStyle}>Prénoms</th>
                            <th className={thStyle}>sexe</th>
                            <th className={thStyle}>Date début</th>
                            <th className={thStyle}>Date fin</th>
                            <th className={thStyle}>Reste</th>
                            <th className={thStyle}>Formation</th>
                            <th className={thStyle}>Montant</th>
                            <th className={thStyle}>Avance</th>
                            <th className={thStyle}>Niveau</th>
                            <th className={thStyle}>Date Naiss.</th>
                            <th className={thStyle}>Contact</th>
                            <th className={thStyle}>Quartier</th>
                            <th className={thStyle}>Email</th>
                            <th className={thStyle}>Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!students ? (
                            // {<div className="absolute w-[1000px] h-[200px] flex items-center justify-center">
                            //     <Loader />
                            // </div>}
                            <>
                                <StudentLoader />
                                <StudentLoader />
                                <StudentLoader />
                                <StudentLoader />
                                <StudentLoader />
                                <StudentLoader />
                            </>
                        ) : (
                            students.map((stud) => (
                                <ListElement key={stud._id} handleDelete={handleDelete} student={stud} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex ">
                <Link to="/nouvel-eleve" className="add-student-btn">
                    <div>
                        <span className="material-icons hover:transfom hover:scale-[1.1] text-blue text-[43px] mt-3 shadow-xl rounded-full !p-0">
                            add_circle
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default GestionEleves
