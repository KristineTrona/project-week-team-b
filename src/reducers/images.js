import { NEW_IMAGE } from '../actions/images'
import images from '../lib/dummyData'

const reducer = (state = {image: images.find((image) => image.id===1), desired: []}, action = {}) => {
    switch (action.type) {
      case NEW_IMAGE:
        return {...state, 
            image: [...state.image.action.payload],
        }
    default:
      return state
    }
  }
  
  export default reducer
