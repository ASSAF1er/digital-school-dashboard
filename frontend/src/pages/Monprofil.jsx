import classNames from 'classnames'
import { Link } from 'react-router-dom'
function MonProfil() {
    const inputStyle = 'bg-light-blue rounded-md h-8 outline-blue px-2 py-1 text-grey'
    const labelStyle = 'font-bold py-[2px] text-grey'
    return (
        <div>
            <div className="w-full  text-center">
                <strong className="text-center text-blue text-2xl ">Mon profil</strong>
            </div>
            <div className="px-44  flex flex-col gap-4">
                <div className="flex flex-col flex-1 h-30">
                    <label htmlFor="" className={labelStyle}>
                        Photo
                    </label>
                    <div className="bg-light-blue h-36 py-2 rounded-md">
                        <input type="file" className={classNames(inputStyle, 'h-9')} />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <label htmlFor="" className={labelStyle}>
                        Nom utilisateur<span className="text-blue">*</span>
                    </label>
                    <input type="text" className={inputStyle} />
                </div>

                <div className="flex flex-row gap-4">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            Identifiant<span className="text-blue">*</span>
                        </label>
                        <input type="text" className={inputStyle} />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            mot de passe<span className="text-blue">*</span>
                        </label>
                        <input type="text" className={inputStyle} />
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            statut <span className="text-blue">*</span>
                        </label>
                        <input type="text" className={inputStyle} />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className={labelStyle}>
                            Utilisateur depuis <span className="text-blue">*</span>
                        </label>
                        <input type="date" className={inputStyle} />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <label htmlFor="" className={labelStyle}>
                        E-mail<span className="text-blue">*</span>
                    </label>
                    <input type="text" className={inputStyle} />
                </div>
                <div className="flex flex-row justify-center ">
                    <Link>
                        <button className="flex bg-blue rounded-md  text-white px-7 py-1  justify-center items-center text-xl">
                            Enregistrer les modifications
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MonProfil
