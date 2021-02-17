import React from 'react'
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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableWrapper: {
    marginBottom: 50,
  }
})

function createData(id, playerName, warband, status) {
  return { id, playerName, warband, status }
}

const rows = [
  createData('1','Роман Евстегнеев', 'Ylthari\'s Guardians', 'Active'),
  createData('2','Стенли Кубриков', 'Mollog\'s Mob', 'Active'),
  createData('3','Владимир Владимирович', 'Skaeth\'s Wild Hunt', 'Active'),
  createData('4','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
  createData('5','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
  createData('6','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
  createData('7','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
  createData('8','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
  createData('9','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
  createData('10','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
  createData('11','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
  createData('12','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
  createData('13','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
  createData('14','Федор Петин', 'Thorns of the Briar Queen', 'Dropped'),
]

export default function PlayerTable() {
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
          {rows.map((row) => (
            <TableRow key={row.playerName}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.playerName}
              </TableCell>
              <TableCell align="right">{row.warband}</TableCell>
              <TableCell align="right">{row.status == 'Active' ? <Chip color="primary" label="Активен" /> : <Chip color="secondary" label="Выбыл" />}</TableCell>
              <TableCell align="right">
                <Tooltip title="Редактировать">
                  <IconButton aria-label="delete">
                    <EditIcon style={{ color: green[500] }} fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Удалить">
                  <IconButton color="secondary" aria-label="delete">
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
