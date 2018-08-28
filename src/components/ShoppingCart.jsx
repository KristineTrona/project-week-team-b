import * as React from 'react'

export default function showImages (props){
    return (
      <div className = "shopping-cart">
       <div>{props.items.map((item) => item.id)}</div>
      </div>
    )
  }