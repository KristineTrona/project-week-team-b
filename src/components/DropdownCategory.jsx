import * as React from 'react'
import '../App.css'

export default function selectCategory (props){
    return (
      <div className = "dropdown">
        <div className="dd-header">
           <div className="dd-header-title"></div>
        </div>
        <ul className="dd-list">
          <li className="dd-list-item"></li>
          <li className="dd-list-item"></li>
          <li className="dd-list-item"></li>
        </ul>   
      </div>
    )
  }