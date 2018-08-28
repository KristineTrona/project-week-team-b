import * as React from 'react'

export default function showImages (props){
    return (
      <div className = "shopping-cart">
      <div items={props.items.map((item) => (
       <img src={props.item.imageUrl} alt={props.item.title}/>
        ))}>
      </div>
      </div>
    )
  }