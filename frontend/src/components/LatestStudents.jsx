import default_profile from '../assets/profile.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LatestStudentLoader from './Loaders/LatestStudentLoader'
function Lateststudents() {
    const [students, setStudents] = useState(false)
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/students/latest')
            .then((res) => setStudents(res.data))

            .catch((error) => {
                console.log(error)
            })

        console.log(students)
    }, [])

    return (
        <div className="bg-white flex flex-col p-4">
            <div className=" font-medium ">
                <span>Étudiants récemment inscrits</span>
            </div>
            <div className="mt-2">
                <table className="w-full text-grey">
                    <thead>
                        <tr className="font-medium  text-grey">
                            <td></td>
                            <td className="pl-3">Nom</td>
                            <td>Prénom</td>
                            <td>sexe</td>
                            <td>Formation</td>
                            <td className="text-nowrap ">Date début </td>
                            <td>Date Fin</td>
                            <td>Montant</td>
                            <td>Avance</td>
                            <td>Reste</td>
                        </tr>
                    </thead>
                    <tbody>
                        {students ? (
                            students.map((stud) => (
                                <tr key={stud.id} className="rounded-sm border-b border-light-blue hover:bg-slate">
                                    <td className="py-1">
                                        <img
                                            className="w-7 h-7 rounded-full object-cover"
                                            src={stud.photo ? stud.photo : default_profile}
                                            alt=""
                                        />
                                    </td>
                                    <td className="pl-3">{stud.firstName}</td>
                                    <td>{stud.lastName}</td>
                                    <td>{stud.sex}</td>
                                    <td>{stud.training}</td>
                                    <td>{stud.dateBegin}</td>
                                    <td>{stud.dateEnd}</td>
                                    <td>{stud.amount} XAF</td>
                                    <td>{stud.advance} XAF</td>
                                    <td>{stud.rest} XAF</td>
                                </tr>
                            ))
                        ) : (
                            <>
                                <LatestStudentLoader />
                                <LatestStudentLoader />
                                <LatestStudentLoader />
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lateststudents
