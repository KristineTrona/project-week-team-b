//import images from '../lib/dummyData'


export const NEW_IMAGE = 'NEW_IMAGE'
export const ADD_ITEM = 'ADD_ITEM'
//export const MOVE_IMAGE = 'MOVE_IMAGE'

export function newImage(image) {
  return {
    type: NEW_IMAGE,
    payload: image.id++
    // payload: image.id++
  }
}


export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: {
      ...item
    }
  }
}


// export function moveImage() {
//     return {
//       type: MOVE_IMAGE,
//       payload: ""
//     }
//   }



// export function newImage(id,
//   title,
//   imageurl,
//   description,
//   price,
//   state) {
// return {
//   type: NEW_IMAGE,
//   payload: {
//       id,
//       title,
//       imageurl,
//       description,
//       price,
//       state
//   }
// }
// }
