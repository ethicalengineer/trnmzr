import {
  CHANGE_NAME,
  CHANGE_SURNAME,
  CHANGE_NICKNAME,
  CHANGE_FACTION,
  CHANGE_STATE,
} from './actions'

export default function formReducer(state, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload }
    case CHANGE_SURNAME:
      return { ...state, surname: action.payload }
    case CHANGE_NICKNAME:
      return { ...state, nickname: action.payload }
    case CHANGE_FACTION:
      return { ...state, faction: action.payload }
    case CHANGE_STATE:
      return { ...state, state: action.payload }
    default:
      throw new Error()
  }
}
