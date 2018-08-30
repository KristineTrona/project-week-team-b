import appUser from '../lib/userDummyData'
import { SHOW_CONTACT } from '../actions/users'

const reducer = (state = {users: appUser, currentUser: {}}, action = {}) => {
    switch (action.type) {
      case SHOW_CONTACT:
        return { ...state, 
            currentUser: {...state.currentUser = action.payload.currentUser}
        }
      default:
        return state
    }
}

export default reducer