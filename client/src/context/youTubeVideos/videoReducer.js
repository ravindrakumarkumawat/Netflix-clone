import { GET_ALL_CATEGORIES_VIDEOS } from './videoTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_VIDEOS: 
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}