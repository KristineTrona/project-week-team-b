import * as React from 'react'
import '../App.css'

export default function showImages (props){
    return (
      <div className = "buyer-wrapper">
      <div className = "image-container">
        <div className = "header">
          <div>LOGO</div>
          <div>Product</div>
          <div>Gender</div>
          <div>Size</div>
          <div>Price</div>
          <div>Condition</div>
        </div>
        <div className = "image-swipe"></div>
          <button id = "left-button" onClick = {props.handleClickYes}>Left </button>
          <img src= {props.url} alt="item"/>
          <button id = "right-button" onClick = {props.handleClickNo}>Right</button>
        </div>
        <div className = "product-swipe-info">
        <h1>Title: {props.title}</h1>
          <p><span>Price: {props.price}</span><span>Condition: {props.condition}</span></p>
          <p>Description: {props.description}</p>
          <button>BEAR</button>
          <button>MONEY</button>
          <button>Cart</button>
        </div>
        <div className = "footer">
          <button>Contact</button>
          <button>Social Media</button>
        </div>
      </div>
    )
  }