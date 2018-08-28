import images from '../lib/dummyData'



export const SHOW_IMAGE = 'SHOW_IMAGE'
export const ADD_ITEM = 'ADD_ITEM'
export const NEXT_ITEM = 'NEXT_ITEM'

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

export function nextImage(){
  return {
    type: 'NEXT_ITEM',
    payload: {
      selectedImage: images[+1]
    }
  }
}
