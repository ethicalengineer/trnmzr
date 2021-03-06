import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'

import tournamentReducer from './state/tournamentReducer'

import PlayerPage from './pages/PlayerPage'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function App() {
  const classes = useStyles()
  const [players, setPlayers] = React.useState([])
  const [activeTab, setActiveTab] = React.useState('1')
  const [tournament, dispatch] = React.useReducer(
    tournamentReducer,
    initialTournamentState
  )

  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <div className={classes.root}>
      <TabContext value={activeTab}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Игроки" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <PlayerPage players={players} setPlayers={setPlayers}></PlayerPage>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  )
}
