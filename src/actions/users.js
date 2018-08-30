import appUser from '../lib/userDummyData'

export const SHOW_CONTACT = 'SHOW_CONTACT'

export function showContact() {
    return {
      type: SHOW_CONTACT,
      payload: {
        appUser
      }
    }
  }