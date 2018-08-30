import * as React from 'react'
import { Link } from 'react-router-dom'
import noun_wrong_1702071 from "../lib/images/noun_wrong_1702071.svg"
import noun_like_1702075 from "../lib/images/noun_like_1702075.svg"
import Navbar from './Navbar'
import shoppingbasket from "../lib/images/shoppingbasket.svg"
import pricetag from "../lib/images/pricetag.svg"
import beargoodcondition from "../lib/images/beargoodcondition.svg"

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
            <div className = "bearIcons">{props.condition}</div>
            <div className= "price-tag">
            <img className= "pricetag" src={pricetag}/>
              <div className = "price-value">{props.price}</div>
            </div>
            <Link to={'/cart'} className= "shopping-basket">
              {/* <img className= "basket" src={shoppingbasket}/> */}
              <div className = "items-count">{props.count}</div>
            </Link>
          </div>
        </div>
        </div>
      </div>
      
    )
  }


