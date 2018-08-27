import { NEW_IMAGE, MOVE_IMAGE } from '../actions/images'

const reducer = (state = {image: {}, desired: []}, action = {}) => {
    switch (action.type) {
      case NEW_IMAGE:
        return [...state, action.payload]
      case MOVE_IMAGE:
        return initialState
    default:
      return state
    }
  }
  
  export default reducer
