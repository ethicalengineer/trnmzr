import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PlayerTable from '../ui-assets/PlayerTable'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import AppBar from '@material-ui/core/AppBar'
import factions from '../data/factions.json'

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

  const handleOpen = () => {
    setOpen(true)
  }
    
  const handleClose = () => {
    setOpen(false)
  }

  const factionSelectHandler = () => {
    return false
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
        <div className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField id="outlined-basic" label="Имя игрока" variant="outlined" />
            </div>
            <div>
              <TextField id="outlined-basic" label="Фамилия игрока" variant="outlined" />
            </div>
            <div>
              <TextField id="outlined-basic" label="Псевдоним" variant="outlined" />
            </div>
            <div>
              <TextField
                id="outlined-select-currency-native"
                select
                label="Фракция"
                onChange={factionSelectHandler}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {factions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </div>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  )
}