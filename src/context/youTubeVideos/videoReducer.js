import { GET_ALL_CATEGORIES_VIDEOS, GET_ACTIVE_PANEL } from './videoTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_VIDEOS: 
      return {
        ...state,
        ...action.payload
      }
    case GET_ACTIVE_PANEL:
      return {
        ...state,
        activePanel: {...action.payload}
      }
    default:
      return state
  }
}