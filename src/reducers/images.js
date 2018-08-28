
import { SHOW_IMAGE, ADD_ITEM, NEXT_ITEM, DONT_ITEM } from '../actions/images'
import images from '../lib/dummyData'

const reducer = (state = {images: images, selectedImage: {}, cart:[]}, action = []) => {
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
      case NEXT_ITEM:
        return { ...state, 
            selectedImage: {...state.selectedImage = action.payload.selectedImage},
            cart: [...state.cart,action.payload.cart]
          }
      case DONT_ITEM:
        return { ...state, 
        selectedImage: {...state.selectedImage = action.payload.selectedImage}
        }
      default:
        return state
    }
  }

  export default reducer

