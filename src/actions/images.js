//import images from '../lib/dummyData'

export const SHOW_IMAGE = 'SHOW_IMAGE'
export const ADD_ITEM = 'ADD_ITEM'
export const NEXT_ITEM = 'NEXT_ITEM'
export const DONT_ITEM = 'DONT_ITEM'
export const FILTER_CATEGORY = 'FILTER_CATEGORY'
export const FILTER_GENDER = 'FILTER_GENDER'
export const FILTER_AGE = 'FILTER_AGE'
export const FILTER_PRICE = 'FILTER_PRICE'
export const FILTER_CONDITION = 'FILTER_CONDITION'

export function showImage(imagesArray) {
  return {
    type: SHOW_IMAGE,
    payload: {
      selectedImage: imagesArray[0]
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

export function nextItem(images, index){
  return {
    type: 'NEXT_ITEM',
    payload: {
      selectedImage: images[index+1],
      cart: images[index]
    }
  }
}


export function dontWantItem(images,index){
  return {
    type: 'DONT_ITEM',
    payload: {
      selectedImage: images[index+1],
    }
  }
}


export function filterCategory(category){
      return {   
        type: 'FILTER_CATEGORY',
        payload: category  
      }
    }


export function filterGender(gender){
  return {
    type: 'FILTER_GENDER',
    payload: gender
  }
}

export function filterAge(age){
  return {
    type: 'FILTER_AGE',
    payload: age
  }
}

export function filterPrice(priceGroup){
  return {
    type: 'FILTER_PRICE',
    payload: priceGroup
  }
}

export function filterCondition(condition){
  return {
    type: 'FILTER_CONDITION',
    payload: condition
  }
}