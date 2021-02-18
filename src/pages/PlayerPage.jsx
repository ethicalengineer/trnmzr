import React, { useState } from 'react'
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
  const [open, setOpen] = useState(false)
  const [players, setPlayers] = useState([])

  const handleOpen = () => {
    setOpen(true)
  }
    
  const handleClose = () => {
    setOpen(false)
  }

  const addPlayer = player => {
    setPlayers([...players, player])
    handleClose()
  }

  return (
    <React.Fragment>
      <PlayerTable players={players}/>
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
        disableBackdropClick={true}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <UserForm addPlayer={addPlayer} />
      </Modal>
    </React.Fragment>
  )
}