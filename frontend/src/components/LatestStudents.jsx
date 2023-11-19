import { studentList } from '../data/studentList'
import default_profile from '../assets/profile.png'
function Lateststudents() {
    return (
        <div className="bg-white flex flex-col p-4">
            <div className=" font-medium ">
                <span>Étudiants récemment inscrits</span>
            </div>
            <div className="mt-2">
                <table className="w-full text-grey">
                    <thead>
                        <tr className="font-medium text-grey">
                            <td></td>
                            <td className="pl-3">Nom</td>
                            <td>Prénom</td>
                            <td>sexe</td>
                            <td>Formation</td>
                            <td>Date début </td>
                            <td>Date Fin</td>
                            <td>Montant</td>
                            <td>Avance</td>
                            <td>Reste</td>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.slice(0, 3).map((stud) => (
                            <tr key={stud.id} className="rounded-sm border-b border-light-blue hover:bg-slate">
                                <td className="py-1">
                                    <img
                                        className="w-7 h-7 rounded-full object-cover"
                                        src={stud.photo ? stud.photo : default_profile}
                                        alt=""
                                    />
                                </td>
                                <td className="pl-3">{stud.name}</td>
                                <td>{stud.surname}</td>
                                <td>{stud.sexe}</td>
                                <td>{stud.training}</td>
                                <td>{stud.start}</td>
                                <td>{stud.end}</td>
                                <td>{stud.amount} XAF</td>
                                <td>{stud.advance} XAF</td>
                                <td>{stud.rest} XAF</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lateststudents
