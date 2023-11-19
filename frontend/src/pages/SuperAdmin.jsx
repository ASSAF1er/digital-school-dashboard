import { accounts } from '../data/comptes'
import classNames from 'classnames'
import default_photo from '../assets/profile.png'
import AjoutCompte from '../popUps/AjoutCompte'
import { useState } from 'react'
import ModifCompte from '../popUps/ModifCompte'
import MailCompte from '../popUps/MailCompte'
import DeleteCompte from '../popUps/Delete/DeleteCompte'

function SuperAdmin() {
    const thStyle = 'px-3 whitespace-nowrap py-4'
    const [accountsList, setAccountsList] = useState(accounts)
    const addAccount = (account) => {
        setAccountsList([account, ...accountsList])
    }
    const handleDelete = (id) => {
        setAccountsList(accountsList.filter((acc) => acc.id !== id))
    }
    const handleEdit = (newInfos) => {
        setAccountsList(accountsList.map((acc) => (acc.id === newInfos.id ? { ...acc, ...newInfos } : acc)))
    }
    return (
        <div className="flex flex-col items-center">
            <div className=" mt-4 max-w-[400px] text-xl flex items-center justify-center text-[#0c0c75] font-bold text-[18px] border-[#0c0c75] border-b">
                <span className="material-icons px-1">group</span>
                Comptes Utilisateurs
            </div>
            <div className=" mt-1 mx-auto pt-2  flex max-h-[500px] max-w-[1000px] overflow-scroll shadow-md">
                <table>
                    <thead>
                        <tr className="bg-blue text-white  px-2 text-left rounded-md">
                            <th className={thStyle}></th>
                            <th className={thStyle}>Photo</th>
                            <th className={thStyle}>Nom</th>
                            <th className={thStyle}>Tel </th>

                            <th className={thStyle}>Password</th>
                            <th className={thStyle}>Statut</th>
                            <th className={thStyle}>Depuis</th>
                            <th className={thStyle}>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountsList.map((acc) => (
                            <TrainingElement
                                id={acc.id}
                                name={acc.name}
                                photo={acc.photo}
                                tel={acc.tel}
                                password={acc.password}
                                status={acc.status}
                                date={acc.date}
                                email={acc.email}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                                account={acc}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex ">
                <AjoutCompte addAccount={addAccount} />
            </div>
        </div>
    )
}

export default SuperAdmin

function TrainingElement(props) {
    const tdStyle = 'px-2 py-1 text-[15px] whitespace-nowrap '
    return (
        <tr className="even:bg-vlight-blue hover:bg-light-blue  border-light-grey border-b-[1px]" key={props.name}>
            <td className={classNames(tdStyle, 'flex flex-row ')}>
                <DeleteCompte handleDelete={props.handleDelete} account={props.account} />
                <ModifCompte handleEdit={props.handleEdit} account={props.account} />
                <MailCompte account={props.account} />
            </td>
            <td className={tdStyle}>
                <img
                    src={props.photo ? props.photo : default_photo}
                    alt=""
                    className="w-8 h-8 object-cover rounded-full"
                />
            </td>
            <td className={tdStyle}>{props.name}</td>
            <td className={tdStyle}>{props.tel}</td>
            <td className={tdStyle}>{props.password}</td>
            <td className={tdStyle}>{props.status}</td>
            <td className={tdStyle}>{props.date}</td>
            <td className={tdStyle}>{props.email}</td>
        </tr>
    )
}
