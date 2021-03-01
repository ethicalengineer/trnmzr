import React from 'react'
import PlayerPage from './pages/PlayerPage'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from './ui-assets/TabPanel'

//import mainReducer from './state/mainReducer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function App() {
  const classes = useStyles()
  const [players, setPlayers] = React.useState([])
  const [activeTab, setActiveTab] = React.useState(0)

  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab label="Игроки" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTab} index={0}>
        <PlayerPage players={players} setPlayers={setPlayers}></PlayerPage>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        Item Three
      </TabPanel>
    </div>
  )
}
