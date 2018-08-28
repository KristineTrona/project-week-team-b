import { NEW_IMAGE, SHOW_IMAGE } from '../actions/images'
import images from '../lib/dummyData'

const reducer = (state = images, action = {}) => {
    switch (action.type) {
      case NEW_IMAGE:
        return  
                   
    default:
      return state
    }
  }
  
  export default reducer

