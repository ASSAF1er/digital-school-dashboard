function Dashboardstats() {
    return (
        <div>
            <div className="flex gap-4 items center">
                <div className="bg-dashb1 flex-1 p-4 rounded-md flex items-center">
                    <div className="bg-light-blue p-2 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="material-icons text-blue font-medium ">school</span>
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-grey">Étudiants formés</span>
                        <div>
                            <strong>+250</strong>
                        </div>
                    </div>
                </div>
                <div className="bg-dashb2 flex-1 p-4 rounded-md flex items-center">
                    <div className="bg-light-blue p-2 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="material-icons text-blue font-medium ">trending_up</span>
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-grey">En formation</span>
                        <div>
                            <strong>40</strong>
                        </div>
                    </div>
                </div>

                <div className="bg-dashb3 flex-1 p-4 rounded-md flex items-center">
                    <div className="bg-light-blue p-2 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="material-icons text-blue font-medium ">business_center</span>
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-grey">Formations</span>
                        <div>
                            <strong>12</strong>
                        </div>
                    </div>
                </div>
                <div className="bg-dashb4 flex-1 p-4 rounded-md flex items-center">
                    <div className="bg-light-blue p-2 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="material-icons text-blue font-medium ">hail</span>
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-grey">Formateurs</span>
                        <div>
                            <strong>05</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboardstats
