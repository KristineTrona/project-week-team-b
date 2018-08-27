export const NEW_IMAGE = 'NEW_IMAGE'
//export const MOVE_IMAGE = 'MOVE_IMAGE'

export function newImage(id,
    title,
    imageurl,
    description,
    price,
    state) {
  return {
    type: NEW_IMAGE,
    payload: {
        id,
        title,
        imageurl,
        description,
        price,
        state
    }
  }
}

// export function moveImage() {
//     return {
//       type: MOVE_IMAGE,
//       payload: ""
//     }
//   }

