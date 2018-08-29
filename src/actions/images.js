import images from '../lib/dummyData'


export const SHOW_IMAGE = 'SHOW_IMAGE'
export const ADD_ITEM = 'ADD_ITEM'
export const NEXT_ITEM = 'NEXT_ITEM'
export const DONT_ITEM = 'DONT_ITEM'
export const FILTER_CATEGORY = 'FILTER_CATEGORY'
export const FILTER_GENDER = 'FILTER_GENDER'
export const FILTER_SIZE = 'FILTER_SIZE'
export const FILTER_PRICE = 'FILTER_PRICE'
export const FILTER_CONDITION = 'FILTER_CONDITION'

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
    type: 'ADD_ITEM',
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


export function filterCategory(category){
      return {   
        type: 'FILTER_CATEGORY',
        payload: category  
      }
    }


// export function filterCategory(category){
//   if (category === "toy"){ 
//     return {   
//       type: 'FILTER_CATEGORY',
//       payload: "toy"    
//     }
//   }
//   else if (category === "clothes"){ 
//     return {   
//       type: 'FILTER_CATEGORY',
//       payload: "clothes" 
//     }
//   }
//   else if (category === "furniture"){ 
//     return {   
//       type: 'FILTER_CATEGORY',
//       payload: "furniture"  
//     }
//   }

// }

export function filterGender(gender){
  return {
    type: 'FILTER_GENDER',
    payload: {
     
    }
  }
}

export function filterSize(){
  return {
    type: 'FILTER_SIZE',
    payload: {
      
    }
  }
}

export function filterPrice(){
  return {
    type: 'FILTER_PRICE',
    payload: {
      
    }
  }
}

export function filterCondition(){
  return {
    type: 'FILTER_CONDITION',
    payload: {
      
    }
  }
}