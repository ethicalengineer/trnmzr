import React from 'react'
import TopMenu from './ui-assets/TopMenu'
import PlayerPage from './pages/PlayerPage'

//import mainReducer from './state/mainReducer'

export default function App() {
  // const [state, dispatch] = useReducer(mainReducer, {
  //   status: 'new',
  //   players: [],
  //   rounds: [],
  // })
  return (
    <TopMenu>
      <PlayerPage></PlayerPage>
    </TopMenu>
  )
}
