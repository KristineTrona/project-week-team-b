import * as React from 'react'

export default function showImages (props){
    return (
      <div className = "image-buttons-container">
        <button id="button-left">Left</button>
        <div className = "image-container">
          <h1>Title: {props.title}</h1>
          <img src= {props.url} alt="item"/>
          <p><span>Price: {props.price}</span><span>Status: {props.status}</span></p>
          <p>Description: {props.description}</p>
        </div>
        <button id="button-right">Right</button>
      </div>
    )
  }