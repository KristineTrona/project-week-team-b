import { SHOW_IMAGE } from '../actions/images'
// import images from '../lib/dummyData'

const reducer = (state = {images: [], selectedImage: {}}, action = []) => {
    switch (action.type) {
      case SHOW_IMAGE:
        return { ...state, 
          images: [...state.images, action.payload.images],
          selectedImage: {...state.selectedImage = action.payload.selectedImage}
        }        
    default:
      return state
    }
  }
  
  export default reducer

