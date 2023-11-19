import BoxFormation from '../components/Boxformation'
import { trainings } from '../data/trainings'
import classNames from 'classnames'
import AjoutFormation from '../popUps/AjoutFormation'
import { useState } from 'react'
import ModifFormation from '../popUps/ModifFormation'
import DeleteTraining from '../components/DeleteTraining'

function Formations() {
    const thStyle = 'pl-3 whitespace-nowrap py-4'
    const [trainingsList, setTrainingsList] = useState(trainings)
    const handleDelete = (id) => {
        setTrainingsList(trainingsList.filter((train) => train.id !== id))
    }
    const addTraining = (training) => {
        setTrainingsList([training, ...trainingsList])
    }
    const editTraining = (newInfos) => {
        setTrainingsList(trainingsList.map((train) => (train.id === newInfos.id ? { ...train, ...newInfos } : train)))
    }
    return (
        <div className="flex  flex-col gap-4">
            <div className="flex justify-center">
                <div className="flex justify-center flex-col gap-3 bg-gradient-to-br from-0% hover:from-10% from-[#add9f0] to-blue  rounded-md  py-2 px-16 shadow-xl">
                    <div className="flex  font-bold justify-center ">
                        <span className="material-icons flex flex-row text-white">bar_chart</span> Statistiques
                    </div>
                    <div className="flex font-bold gap-4 ">
                        <div className="text-green flex flex-row justify-center">
                            <span class="material-icons flex flex-row px-1 ">trending_up</span>250
                        </div>
                        <div className="text-[#6b21a8] flex">
                            <span class="material-icons px-1 ">loop</span>50
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex  gap-x-5 gap-y-3 mx-auto  flex-wrap items-center justify-center max-h-[150px] overflow-y-scroll">
                {trainingsList.map((train) => (
                    <BoxFormation name={train.name} />
                ))}
            </div>
            <div className=" mt-1 mx-auto shadow-md pt-2 flex max-h-[250px] max-w-[1000px] overflow-scroll">
                <table>
                    <thead>
                        <tr className="bg-blue text-white  px-2 text-left rounded-md">
                            <th className={thStyle}>Actions</th>
                            <th className={thStyle}>Formation</th>
                            <th className={thStyle}>Formés</th>
                            <th className={thStyle}>En formation</th>

                            <th className={thStyle}>Durée</th>
                            <th className={thStyle}>Cout Min</th>
                            <th className={thStyle}>Cout Max</th>
                            <th className={thStyle}>Fomateur 1</th>
                            <th className={thStyle}>Formateur 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainingsList.map((train) => (
                            <TrainingElement
                                name={train.name}
                                formed={train.formed}
                                forming={train.forming}
                                duration={train.duration}
                                mincost={train.mincost}
                                maxcost={train.maxcost}
                                trainer1={train.trainer1}
                                trainer2={train.trainer2}
                                handleDelete={handleDelete}
                                id={train.id}
                                training={train}
                                editTraining={editTraining}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center">
                <AjoutFormation addTraining={addTraining} />
            </div>
        </div>
    )
}

export default Formations

function TrainingElement(props) {
    const tdStyle = 'px-2 text-sm whitespace-nowrap '
    return (
        <tr className="even:bg-vlight-blue hover:bg-light-blue py-1 border-light-grey border-b-[1px]" key={props.name}>
            <td className={classNames(tdStyle, 'flex flex-row ')}>
                <DeleteTraining handleDelete={props.handleDelete} training={props.training} />
                <ModifFormation training={props.training} editTraining={props.editTraining} />
            </td>
            <td className={tdStyle}>{props.name}</td>
            <td className={tdStyle}>{props.formed}</td>
            <td className={tdStyle}>{props.forming}</td>
            <td className={tdStyle}>{props.duration}</td>
            <td className={tdStyle}>{props.mincost}XAF</td>
            <td className={tdStyle}>{props.maxcost}XAF</td>
            <td className={tdStyle}>{props.trainer1}</td>
            <td className={tdStyle}>{props.trainer2}</td>
            <td className={tdStyle}>{props.trainer3}</td>
        </tr>
    )
}
