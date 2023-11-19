import classNames from 'classnames'
function Transaction(props) {
    return (
        <div className="flex flex-col bg-white px-4 py-3 rounded-xl shadow-md hover:bg-vlight-blue hover:shadow-xl">
            <div className="flex flex-row justify-between font-bold">
                <div>
                    {props.date} | {props.time}
                </div>
                <div className={classNames(props.type === 'entree' ? 'text-[#15803d]' : 'text-red')}>
                    {props.type === 'entree' ? '+' : '-'}
                    {props.amount} XAF
                </div>
            </div>
            <div className="text-grey">
                {props.autor} ({props.status})
            </div>
            <div className="ml-3 px-2 border-[#0c0c75] border-l-2 text-[#0c0c75]">{props.description}</div>
            <div></div>
        </div>
    )
}

export default Transaction
