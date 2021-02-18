import React from 'react'
import TextField from '@material-ui/core/TextField'
import factions from '../data/factions.json'
import { makeStyles } from '@material-ui/core/styles'
import formReducer from '../state/formReducer'

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))



const factionSelectHandler = () => {
  return false
}

export default function UserForm() {
  const classes = useStyles()

  const [state, dispatch] = useReducer(formReducer, initialCount);

  return (
    <div className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField value={} onChange={} id="outlined-basic" label="Имя игрока" variant="outlined" />
        </div>
        <div>
          <TextField value={} onChange={} id="outlined-basic" label="Фамилия игрока" variant="outlined" />
        </div>
        <div>
          <TextField value={} onChange={} id="outlined-basic" label="Псевдоним" variant="outlined" />
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
  )
}