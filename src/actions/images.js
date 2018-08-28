import images from '../lib/dummyData'



export const SHOW_IMAGE = 'SHOW_IMAGE'
export const ADD_ITEM = 'ADD_ITEM'

export function showImage() {
  return {
    type: SHOW_IMAGE,
    payload: {
      selectedImage: images[0]
    }
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