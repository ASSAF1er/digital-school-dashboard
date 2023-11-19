import classNames from 'classnames'
import ModifEleve from '../popUps/ModifEleve'
function ListElement(props) {
    const tdStyle = 'px-2 text-sm whitespace-nowrap '
    return (
        <tr className="even:bg-vlight-blue hover:bg-light-blue py-1 border-light-grey border-b-[1px]">
            <td className={classNames(tdStyle, 'flex flex-row ')}>
                <span
                    className="material-icons text-red nth px-2 cursor-pointer"
                    onClick={() => props.handleDelete(props.id)}
                >
                    delete_outline
                </span>
                <ModifEleve />

                <span className="material-icons text-[#f59e0b] px-2 cursor-pointer">mail</span>
            </td>
            <td className={tdStyle}>{props.name}</td>
            <td className={tdStyle}>{props.surname}</td>
            <td className={tdStyle}>{props.sexe}</td>
            <td className={tdStyle}>{props.start}</td>
            <td className={tdStyle}>{props.end}</td>
            <td className={tdStyle}>{props.rest}XAF</td>
            <td className={tdStyle}>{props.training}</td>
            <td className={tdStyle}>{props.amount}XAF</td>
            <td className={tdStyle}>{props.advance}XAF</td>
            <td className={tdStyle}>{props.level}</td>

            <td className={tdStyle}>{props.birthday}</td>
            <td className={tdStyle}>{props.tel1}</td>
            <td className={tdStyle}>{props.quater}</td>
            <td className={tdStyle}>{props.email}</td>
            <td className={tdStyle}>
                <img src={props.photo} alt="" className="w-9 h-9 object-cover rounded-full" />{' '}
            </td>
        </tr>
    )
}

export default ListElement
