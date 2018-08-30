import appUser from '../lib/userDummyData'
import { SHOW_CONTACT } from '../actions/users'

const reducer = (state = appUser, action = {}) => {
    switch (action.type) {
      case SHOW_CONTACT:
        return [ ...state, 
            action.payload
        ]
      default:
        return state
    }
}

export default reducer