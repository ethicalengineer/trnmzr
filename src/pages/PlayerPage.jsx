import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PlayerTable from '../ui-assets/PlayerTable'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Modal from '@material-ui/core/Modal'
import AppBar from '@material-ui/core/AppBar'
import UserForm from '../ui-assets/UserForm'
import PropTypes from 'prop-types'

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

export default function PlayerPage({ players, setPlayers }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [editedPlayer, setEditedPlayer] = useState(Object)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // Добавляем игрока в таблицу
  const addPlayer = (player, edit) => {
    if (edit) {
      const changedPlayers = players.map(oldPlayer => {
        if (oldPlayer.id === player.id) {
          return {
            ...player,
          }
        } else return oldPlayer
      })
      setPlayers([...changedPlayers])
    } else {
      player.id = players.length == 0 ? 1 : players[players.length - 1].id + 1
      setPlayers([...players, player])
    }
    setEditedPlayer({})
    handleClose()
  }

  // Редактируем игрока
  const editPlayer = id => {
    setEditedPlayer(...players.filter(player => player.id == id))
    console.log(players.filter(player => player.id == id))
    handleOpen()
  }

  // Удаляем игрока из таблицы
  const deletePlayer = id => {
    setPlayers(players.filter(player => player.id !== id))
  }

  return (
    <React.Fragment>
      <PlayerTable
        players={players}
        deletePlayer={deletePlayer}
        editPlayer={editPlayer}
      />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Button
            variant="contained"
            onClick={handleOpen}
            className={classes.button}
            startIcon={<AddIcon />}
          >
            Добавить игрока
          </Button>
          <Button
            disabled={players.length > 3 ? false : true}
            variant="contained"
            className={classes.button}
          >
            Начать турнир
          </Button>
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
        <UserForm addPlayer={addPlayer} editedPlayer={editedPlayer} />
      </Modal>
    </React.Fragment>
  )
}

PlayerPage.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  setPlayers: PropTypes.func,
}
