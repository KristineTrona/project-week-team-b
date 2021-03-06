import * as React from 'react'
import store from '../store'
import {newImage} from '../../actions/images'

// handleClick = (image) =>{
//   console.log(image.id++)
// }

export default class ButtonRight extends React.PureComponent{


handleClickEvent = () => {
  this.props.handleClick()
}


  render(){
    return (
      <div className = "button-right">
        <button onClick = {this.handleClickEvent}>Right</button>
      </div>
    )
  }
}
