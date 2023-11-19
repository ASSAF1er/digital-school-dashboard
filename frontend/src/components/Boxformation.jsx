function BoxFormation(props) {
    return (
        <div className="flex flex-col gap-1 bg-gradient-to-br from-50% hover:from-10% from-[#add9f0] to-blue  rounded-md px-3 py-2  shadow-sm">
            <div className="flex justify-center font-bold whitespace-nowrap">{props.name}</div>
            <div className="flex font-bold gap-4 ">
                <div className="text-green flex flex-row justify-center">
                    <span class="material-icons flex flex-row px-1 ">trending_up</span>250
                </div>
                <div className="text-[#6b21a8] flex">
                    <span class="material-icons px-1 ">loop</span>50
                </div>
            </div>
        </div>
    )
}

export default BoxFormation
