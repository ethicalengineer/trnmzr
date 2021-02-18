import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import factions from '../data/factions.json'
import { makeStyles } from '@material-ui/core/styles'
import formReducer from '../state/formReducer'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function UserForm(props) {
  const classes = useStyles()
  const formState = {
    name: '',
    surname: '',
    nickname: '',
    faction: 0,
    state: true
  }
  
  const [state, dispatch] = useReducer(formReducer, formState)
  
  const fieldChangeHandler = (event) => {
    dispatch({type: `change-${event.target.id}`, payload: event.target.value})
    console.log(state)
  }

  const addUserHandler = () => {
    props.addPlayer(state)
  }

  return (
    <div className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField 
            value={state.name} 
            onChange={fieldChangeHandler} 
            id="name" 
            label="Имя игрока" 
            variant="outlined" />
        </div>
        <div>
          <TextField 
            value={state.surname} 
            onChange={fieldChangeHandler} 
            id="surname" 
            label="Фамилия игрока" 
            variant="outlined" />
        </div>
        <div>
          <TextField 
            value={state.nickname} 
            onChange={fieldChangeHandler} 
            id="nickname" 
            label="Псевдоним" 
            variant="outlined" />
        </div>
        <div>
          <TextField
            id="faction"
            value={state.faction}
            select
            label="Фракция"
            onChange={fieldChangeHandler}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            <option key='0' value='0'>Нет</option>
            {factions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            ))}
          </TextField>
          <div>
            <Button variant="contained" color="secondary">
            Secondary
            </Button>
            <Button onClick={addUserHandler} variant="contained" color="primary">
            Primary
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

UserForm.propTypes = {
  addPlayer: PropTypes.func,
}