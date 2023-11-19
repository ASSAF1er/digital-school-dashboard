import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

export default function DeleteTransaction({ handleDelete, transaction }) {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    })

    const [openBox, setOpenBox] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpenBox(true)
    }
    const handleSupprimer = () => {
        setOpenBox(false)
        setOpen(true)
        handleDelete(transaction.id)
    }

    const handleClose = () => {
        setOpenBox(false)
    }

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <div>
            <span className="material-icons text-red nth px-2 cursor-pointer" onClick={() => handleClickOpen()}>
                delete_outline
            </span>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                    Transaction supprimée avec succès!
                </Alert>
            </Snackbar>
            <Dialog
                open={openBox}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <span className="text-red font-bold">Cette opération est irreversible !</span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Souhaitez-vous vraiment supprimer cette transaction de:{' '}
                        <span className="font-bold">{transaction.amount}FCFA</span> ayant pour description:{' '}
                        <span className="font-bold">{transaction.description}</span> ?
                        <br /> Toutes les donées y afférentes seront perdues.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={handleSupprimer} autoFocus>
                        <span className="text-red hover:bg-[#fecaca] px-1">Supprimer</span>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
