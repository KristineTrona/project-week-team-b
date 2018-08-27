import * as React from 'react'

export default function showImages (props){
    return (
      <div className = "image-container">
        <h1>Title: {this.props.title}</h1>
        <img src= {this.props.url} alt={this.props.title}/>
        <p><span>Price: {this.props.price}</span><span>Status: {this.props.status}</span></p>
        <p>Description: {this.props.description}</p>
      </div>
    )
  }