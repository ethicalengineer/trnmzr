import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PlayerTable from '../ui-assets/PlayerTable'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Modal from '@material-ui/core/Modal'
import AppBar from '@material-ui/core/AppBar'
import UserForm from '../ui-assets/UserForm'

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  button: {
    margin: theme.spacing(1),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function PlayerPage() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [edit, forceEdit] = React.useState(false)

  const handleOpen = edit => {
    edit ? forceEdit(true) : forceEdit (false)
    setOpen(true)
  }
    
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <PlayerTable/>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Button
            variant="contained"
            onClick={handleOpen}
            className={classes.button}
            startIcon={<AddIcon />}
          >Добавить игрока</Button>
          <Button 
            variant="contained" 
            className={classes.button}
          >Начать турнир</Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <UserForm />
      </Modal>
    </React.Fragment>
  )
}