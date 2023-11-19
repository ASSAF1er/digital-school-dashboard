import React, { useState } from 'react'
import AjoutTransaction from '../popUps/AjoutTransaction'
import classNames from 'classnames'
import { transactions } from '../data/transactions'
import ModifTransaction from '../popUps/ModifTransaction'
import DeleteTransaction from '../popUps/Delete/DeleteTransaction'
function Comptabilite() {
    const thStyle = 'pl-3 whitespace-nowrap py-3'

    const [visible, setVisible] = useState(true)
    const [transactionsList, setTransactionsList] = useState(transactions)
    const handleDelete = (id) => {
        setTransactionsList(transactionsList.filter((stud) => stud.id !== id))
    }
    const handleAdd = (transaction) => {
        setTransactionsList([...transaction, ...transactionsList])
    }
    const handleEdit = (newInfos) => {
        setTransactionsList(
            transactionsList.map((trans) => (trans.id === newInfos.id ? { id: trans.id, ...newInfos } : trans))
        )
    }

    return (
        <div className="flex flex-col items-center h-full justify-center">
            <div className=" flex flex-col w-[400px] bg-[#5bb2f1] items-center justify-center rounded-xl py-2 border-[#0c0c75] border-b-[12px]">
                <div className="flex flex-row text-white font-bold justify-center ">Solde</div>
                <div className=" flex justify-center items-center text-white font-bold ">
                    <span
                        onClick={() => setVisible(!visible)}
                        className="material-icons  text-[35px] text-[#facc15] pr-4 cursor-pointer "
                    >
                        {visible ? 'visibility_off' : 'visibility'}
                    </span>
                    <span className="text-[30px] ">{visible ? ' 2 754 450' : '*** *** ***'}</span>
                    <span className="text-[30px] pl-2"> XAF</span>
                </div>
            </div>
            <div className=" mt-4 w-[400px] flex items-center justify-center text-[#0c0c75] font-bold text-[18px] border-[#0c0c75] border-b">
                <span className="material-icons">swap_vert</span>
                Historique des transactions
            </div>

            <div className=" mt-3 mx-auto shadow-md  flex max-h-[300px] max-w-[1000px] overflow-scroll">
                <table>
                    <thead>
                        <tr className="bg-[#0c0c75] text-white  px-2 text-left rounded-md">
                            <th className={thStyle}> </th>
                            <th className={thStyle}>Date</th>
                            <th className={thStyle}>Heure</th>

                            <th className={thStyle}>Auteur</th>
                            <th className={thStyle}>Statut</th>
                            <th className={thStyle}>type</th>
                            <th className={thStyle}>Montant</th>
                            <th className={thStyle}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionsList.map((trans) => (
                            <TransactionElement
                                id={trans.id}
                                date={trans.date}
                                time={trans.time}
                                autor={trans.autor}
                                type={trans.type}
                                description={trans.description}
                                status={trans.status}
                                amount={trans.amount}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                                transaction={trans}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            <AjoutTransaction handleAdd={handleAdd} />
        </div>
    )
}

export default Comptabilite

function TransactionElement(props) {
    const tdStyle = 'px-2 py-1 text-[15px] whitespace-nowrap '
    return (
        <tr
            className={classNames(
                props.type === 'entree' ? 'bg-[#bbf7d0] hover:bg-[#4ade80]' : 'bg-[#f7caca] hover:bg-[#f87171]',
                '  py-1 border-white border-b-[2px]'
            )}
            key={props.name}
        >
            <td className={classNames(tdStyle, 'flex flex-row items-center justify-center ')}>
                <DeleteTransaction transaction={props.transaction} handleDelete={props.handleDelete} />
                <ModifTransaction handleEdit={props.handleEdit} transaction={props.transaction} />
            </td>
            <td className={tdStyle}>{props.date}</td>
            <td className={tdStyle}>{props.time}</td>
            <td className={tdStyle}>{props.autor}</td>
            <td className={tdStyle}>{props.status}</td>
            <td className={tdStyle}>{props.type}</td>
            <td className={tdStyle}>
                {props.type === 'entree' ? '+' : '-'}
                {props.amount}XAF
            </td>
            <td className={tdStyle}>{props.description}</td>
        </tr>
    )
}
