import Alert from '@mui/material/Alert'
function AddSuccess() {
    return (
        <div className="   flex-1 justify-center items-center">
            <div className="text-blue flex flex-1  text-[25px] font-bold justify-center items-center my-[auto] ">
                <Alert severity="success" variant="filled">
                    Nouvel élève ajouté avec succès !
                </Alert>
            </div>
        </div>
    )
}

export default AddSuccess
