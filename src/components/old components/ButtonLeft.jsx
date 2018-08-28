import * as React from 'react'

handleClickEvent = () => {
  this.props.handleClick()
}

export default function showButtonLeft (props){
  return (
    <div className = "button-left">
      <button onClick = {this.handleClickEvent}>Right</button>
    </div>
  )
  }