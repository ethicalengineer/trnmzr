import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import formReducer from '../state/formReducer'
import factions from '../data/factions.json'

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function UserForm({ addPlayer, editedPlayer }) {
  const classes = useStyles()

  // Изначальное состояние формы игрока
  const initialFormState = {
    name: '',
    surname: '',
    nickname: '',
    faction: 0,
    state: true,
  }

  const [playerData, dispatch] = useReducer(formReducer, initialFormState)

  // При отрисовке компонента проверяем, изменение или создание. Если изменение – заполняем форму
  useEffect(() => {
    Object.keys(editedPlayer).length !== 0
      ? dispatch({ type: 'edit-player', payload: editedPlayer })
      : false
  }, [editedPlayer])

  // Меняем значение поля
  const fieldChangeHandler = event => {
    dispatch({ type: `change-${event.target.id}`, payload: event.target.value })
  }

  // Добавляем пользователя или редактируем
  const addUserHandler = () => {
    addPlayer(playerData, Object.keys(editedPlayer).length === 0 ? false : true)
  }

  return (
    <div className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            autoFocus={true}
            value={playerData.name}
            onChange={fieldChangeHandler}
            id="name"
            label="Имя игрока"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            value={playerData.surname}
            onChange={fieldChangeHandler}
            id="surname"
            label="Фамилия игрока"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            value={playerData.nickname}
            onChange={fieldChangeHandler}
            id="nickname"
            label="Псевдоним"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="faction"
            value={playerData.faction}
            select
            label="Фракция"
            onChange={fieldChangeHandler}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {factions.map(option => (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            ))}
          </TextField>
          <div>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button
              onClick={addUserHandler}
              variant="contained"
              color="primary"
            >
              Primary
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

UserForm.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  editedPlayer: PropTypes.object,
}
