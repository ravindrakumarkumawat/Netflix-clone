import { SIGN_IN_USER, SIGN_OUT_USER } from './authTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN_USER: 
      return {
        ...state,
        user: {...action.payload },
        isSignedIn: true
      }
    case SIGN_OUT_USER:
      return {
        ...state,
        isSignedIn: false,
        user: null
      }
    default:
      return state
  }
}