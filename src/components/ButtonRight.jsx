import * as React from 'react'
import store from '../store'
import {newImage} from '../actions/images'

// handleClick = (image) =>{
//   console.log(image.id++)
// }

export default class ButtonRight extends React.PureComponent{


handleClick = () => {
  store.dispatch(newImage())
}

// handleClick = (image) =>{
//   console.log(image.id++)
// }


  render(){
    return (
      <div className = "button-right">
        <button onClick = {this.handleClick}>Right</button>
      </div>
    )
  }
}
