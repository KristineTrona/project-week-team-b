import images from '../lib/dummyData'



export const SHOW_IMAGE = 'SHOW_IMAGE'
export const ADD_ITEM = 'ADD_ITEM'
export const NEXT_ITEM = 'NEXT_ITEM'
export const DONT_ITEM = 'DONT_ITEM'

export function showImage() {
  return {
    type: SHOW_IMAGE,
    payload: {
      selectedImage: images.find((image) => image.id===1)
    }
  }
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: {
      ...item
    }
  }
}

export function nextItem(currentId){
  return {
    type: 'NEXT_ITEM',
    payload: {
      selectedImage: images.find((image) => image.id===currentId+1),
      cart: images.find((image) => image.id===currentId)
    }
  }
}

export function dontWantItem(currentId){
  return {
    type: 'DONT_ITEM',
    payload: {
      selectedImage: images.find((image) => image.id===currentId+1),
    }
  }
}