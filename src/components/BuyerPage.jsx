import * as React from 'react'

export default function showImages (props){
    return (
      <div className = "image-container">
        <button id = "left-button" onClick = {props.handleClickNo}>Left </button>
        <h1>Title: {props.title}</h1>
        <img src= {props.url} alt="item"/>
        <p><span>Price: {props.price}</span><span>Condition: {props.condition}</span></p>
        <p>Description: {props.description}</p>   
        <button id = "right-button" onClick = {props.handleClickYes}>Right</button>    
      </div>
    )
  }