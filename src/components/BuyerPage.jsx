import * as React from 'react'

export default function showImages (props){
    return (
      <div className = "image-container">
        <h1>Title: {props.title}</h1>
        <img src= {props.url} alt="item"/>
        <p><span>Price: {props.price}</span><span>Status: {props.status}</span></p>
        <p>Description: {props.description}</p>   
        <button onClick = {props.handleClick}>Right</button>    
      </div>
    )
  }