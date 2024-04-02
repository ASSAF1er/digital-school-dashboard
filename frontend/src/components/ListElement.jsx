import classNames from 'classnames'
import ModifEleve from '../popUps/ModifEleve'
import default_photo from '../assets/profile.png'
import DeleteStudent from '../popUps/Delete/DeleteStudent'
import MailStudent from '../popUps/MailStudent'
function ListElement({ student, handleDelete }) {
    const tdStyle = 'px-2 text-sm whitespace-nowrap   h-full items-center '
    return (
        <tr className="even:bg-vlight-blue  hover:bg-light-blue py-1 border-light-grey border-b">
            <td className={classNames(tdStyle, 'flex ')}>
                <DeleteStudent student={student} handleDelete={handleDelete} />
                <ModifEleve student={student} />
                <MailStudent student={student} />
            </td>
            <td className={tdStyle}>{student.firstName}</td>
            <td className={tdStyle}>{student.lastName}</td>
            <td className={tdStyle}>{student.sex}</td>
            <td className={tdStyle}>{student.dateBegin}</td>
            <td className={tdStyle}>{student.dateEnd}</td>
            <td className={tdStyle}>{student.rest}XAF</td>
            <td className={tdStyle}>{student.training}</td>
            <td className={tdStyle}>{student.amount}XAF</td>
            <td className={tdStyle}>{student.advance}XAF</td>
            <td className={tdStyle}>{student.schoolLevel}</td>

            <td className={tdStyle}>{student.dateOfBirth}</td>
            <td className={tdStyle}>{student.tel1}</td>
            <td className={tdStyle}>{student.quater}</td>
            <td className={tdStyle}>{student.email}</td>
            <td className={tdStyle}>
                <img
                    src={student.photo ? student.photo : default_photo}
                    alt=""
                    className="w-9 h-9 object-cover rounded-full"
                />{' '}
            </td>
        </tr>
    )
}

export default ListElement
