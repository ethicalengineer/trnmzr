import { ADD_PLAYER, EDIT_PLAYER, DELETE_PLAYER } from './actions'

export default function mainReducer(state, action) {
  switch (action.type) {
    case ADD_PLAYER:
      return {}
    case EDIT_PLAYER:
      return {}
    case DELETE_PLAYER:
      return {}
    default:
      return state
  }
}
