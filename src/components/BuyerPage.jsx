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
          <button id = "left-button" onClick = {props.handleClickNo}>Left </button>
          <img src= {props.url} alt="item"/>
          <button id = "right-button" onClick = {props.handleClickYes}>Right</button> 
        </div>
        <div className = "product-swipe-info">
          <div className = "description-container">
            <h3>Title: {props.title}</h3>
            <p>Description: {props.description}</p>
          </div>
          <p><span>Price: {props.price}</span><span>Condition: {props.condition}</span></p>
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