
import { SHOW_IMAGE, ADD_ITEM } from '../actions/images'
import images from '../lib/dummyData'

const reducer = (state = {images: images, selectedImage: {}}, action = []) => {
    switch (action.type) {
      case SHOW_IMAGE:
        return { ...state, 
          selectedImage: {...state.selectedImage = action.payload.selectedImage}
        }
      case ADD_ITEM:
        return [
        ...state,
        action.payload
        ]  
      default:
        return state
    }
  }

  export default reducer

