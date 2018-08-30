export const SHOW_CONTACT = 'SHOW_CONTACT'

export function showContact(currentUser) {
    return {
      type: SHOW_CONTACT,
      payload: {
        currentUser: currentUser
    }}
  }