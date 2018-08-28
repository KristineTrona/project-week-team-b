//import images from '../lib/dummyData'


export const NEW_IMAGE = 'NEW_IMAGE'
//export const MOVE_IMAGE = 'MOVE_IMAGE'

export function newImage(images) {
  return {
    type: NEW_IMAGE,
    payload: images.find((image) => image.id === 1)
  }
}

// export const NEW_IMAGE = 'SHOW_IMAGE'

// function newImages(images){
//   return images[i+1]
// }

// console.log(images)
// console.log(newImages(images[0]))

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
