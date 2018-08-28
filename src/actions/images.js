import images from '../lib/dummyData'


export const SHOW_IMAGE = 'SHOW_IMAGE'

export function showImage() {
  return {
    type: SHOW_IMAGE,
    payload: {
      images: images,
      selectedImage: images[0]
    }
  }
}


// export const NEW_IMAGE = 'NEW_IMAGE'
// export function showOneImage(images) {
//   return {
//     type: SHOW_IMAGE,
//     payload: images
//   }
// }