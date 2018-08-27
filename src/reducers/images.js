import { NEW_IMAGE } from '../actions/images'

const reducer = (state = {image: {}, desired: []}, action = {}) => {
    switch (action.type) {
      case NEW_IMAGE:
        return {
            ...state, 
            image: {...state.image, action.payload }
        }
    default:
      return state
    }
  }
  
  export default reducer
