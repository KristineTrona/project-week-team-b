import * as React from 'react'
import { Link } from 'react-router-dom'
import noun_wrong_1702071 from "../lib/images/noun_wrong_1702071.svg"
import noun_like_1702075 from "../lib/images/noun_like_1702075.svg"
import Navbar from './Navbar'
import {renderBear} from "./renderBear"


export default function showImages (props){
    return (
      <div className="container">
        <Navbar/>
        <div className="content">

          <div className = "product-swipe-info">

          <div className="btn-container">
            <button className="btn" onClick = {props.handleClickNo}><img src={noun_wrong_1702071}/></button>
            </div>
          <div className="product-container"> 
            <img className="product" src= {props.url} alt="item"/>
            </div>
            <div className="btn-container">
            <button className="btn" onClick = {props.handleClickYes}><img src={noun_like_1702075}/></button> 
          </div>
          </div>
          <div className = "lower-section-wrapper">
            <div className = "description-container">
              <div className = "description-title">
                <h3>{props.title}</h3>
              </div>
              <div className = "description-description">
                <p>{props.description}</p>
              </div>
          </div>
          <div className = "description-icon-container">
            <div className = "bearIcons"><img className = "bear" src={renderBear(props.condition)} alt="condition-bear"/></div>
            <div className= "price-tag">
              <div className = "price-value">{props.price}</div>
            </div>
            <Link to={'/cart'} className= "shopping-basket">
              <div className = "items-count">{props.count}</div>
            </Link>
          </div>
        </div>
        </div>
      </div>
      
    )
  }


