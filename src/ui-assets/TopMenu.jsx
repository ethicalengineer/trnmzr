import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from './TabPanel'
  
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))
  
export default function TopMenu(props) {
  const classes = useStyles()
  console.log(props)
  const [value, setValue] = React.useState(0)
  
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="Игроки" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {props.children}
      </TabPanel>
      <TabPanel value={value} index={1}>
          Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
          Item Three
      </TabPanel>
    </div>
  )
}

TopMenu.propTypes = {
  children: PropTypes.node.isRequired,
}