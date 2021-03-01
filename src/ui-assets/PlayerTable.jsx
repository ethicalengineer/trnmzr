import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import { green } from '@material-ui/core/colors'
import Tooltip from '@material-ui/core/Tooltip'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

import factions from '../data/factions.json'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableWrapper: {
    marginBottom: 50,
  },
})

export default function PlayerTable({ players, deletePlayer, editPlayer }) {
  const classes = useStyles()
  return (
    <TableContainer className={classes.tableWrapper} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Имя игрока</TableCell>
            <TableCell align="right">Банда</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map(player => (
            <TableRow key={player.id}>
              <TableCell component="th" scope="row">
                {player.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {player.name ? player.name : ''}
                {player.nickname ? player.nickname : ''}
                {player.surname ? player.surname : ''}
              </TableCell>
              <TableCell align="right">
                <Chip
                  avatar={
                    <Avatar
                      alt={factions[player.faction].value}
                      src={`/images/${factions[player.faction].icon}`}
                    />
                  }
                  label={factions[player.faction].value}
                />
              </TableCell>
              <TableCell align="right">
                {player.state ? (
                  <Chip color="primary" label="Активен" />
                ) : (
                  <Chip color="secondary" label="Выбыл" />
                )}
              </TableCell>
              <TableCell align="right">
                <Tooltip title="Редактировать">
                  <IconButton
                    onClick={() => editPlayer(player.id)}
                    aria-label="delete"
                  >
                    <EditIcon style={{ color: green[500] }} fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Удалить">
                  <IconButton
                    onClick={() => deletePlayer(player.id)}
                    color="secondary"
                    aria-label="delete"
                  >
                    <DeleteForeverIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

PlayerTable.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  deletePlayer: PropTypes.func.isRequired,
  editPlayer: PropTypes.func.isRequired,
}
