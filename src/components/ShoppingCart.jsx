import * as React from 'react'

export default function showImages (props){
    return (
      <div className = "shopping-cart">
      <div items = {props.items.map(item =>
        <img src={item.imageUrl} alt={item.title}/>
      ) }>
      </div>
      <p>test</p>
      </div>
    )
  }