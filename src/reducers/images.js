import { NEW_IMAGE, newImage, ADD_ITEM } from '../actions/images'
import images from '../lib/dummyData'

const reducer = (state = images, action = {}) => {
    switch (action.type) {
      case NEW_IMAGE:
        return {...state, 
            image: [...state.image, action.payload]
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


  function newImages(images){
    let i=0
    return 
    images[i+1]
  }

  console.log(images)
  console.log(newImages(images))