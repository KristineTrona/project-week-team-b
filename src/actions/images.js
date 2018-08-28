import images from '../lib/dummyData'



export const SHOW_IMAGE = 'SHOW_IMAGE'
export const ADD_ITEM = 'ADD_ITEM'

export function showImage() {
  return {
    type: SHOW_IMAGE,
    payload: {
      images: images,
      selectedImage: images[0]
    }
  }
}

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: {
      id: Math.ceil(Math.random()*10000),
      ...item
    }
  }
}