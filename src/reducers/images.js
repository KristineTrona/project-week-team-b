
import { SHOW_IMAGE, ADD_ITEM, NEXT_ITEM, DONT_ITEM } from '../actions/images'
import { FILTER_CATEGORY, FILTER_GENDER, FILTER_AGE, FILTER_PRICE, FILTER_CONDITION} from '../actions/images'
import images from '../lib/dummyData'

const reducer = (state = {images: images, selectedImage: {}, cart:[]}, action = {}) => {
    switch (action.type) {
      case SHOW_IMAGE:
        return { ...state, 
          selectedImage: {...state.selectedImage = action.payload.selectedImage}
        }
      case ADD_ITEM:
        return {
        ...state,
        images: [...state.images, action.payload]
        }
      case NEXT_ITEM:
        return { ...state, 
            selectedImage: {...state.selectedImage = action.payload.selectedImage},
            cart: [...state.cart,action.payload.cart]
          }
      case DONT_ITEM:
        return { ...state, 
        selectedImage: {...state.selectedImage = action.payload.selectedImage}
        }
      case FILTER_CATEGORY:
        return {...state,
          images: images.filter((item) => item.category===action.payload )
        }

      case FILTER_GENDER:
        return{...state,
          images: images.filter((item) => item.gender===action.payload )
        }  
      case FILTER_AGE:
        return{...state,
        images: images.filter((item) => item.age===action.payload )
      }  
      case FILTER_PRICE:
        return{...state,
          images: [...state.images = action.payload]
        } 
      case FILTER_CONDITION:
        return{...state,
          images: images.filter((item) => item.condition===action.payload )
        }
      default:
        return state
    }
  }

  export default reducer

