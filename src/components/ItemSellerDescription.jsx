import * as React from 'react'

export default function ItemSellerDescription (props){
    if (props.itemCondition) {
    return (
      <div className="image-click-details">
        <div className="cart-user-details"><p><img className="selected-cart-item" src={props.currentItem} alt={props.itemTitle}/><br/>
        {props.itemTitle}: {props.itemDescription}<br/> 
        Price: {props.itemPrice}<br/> Condition: {props.itemCondition}</p></div>
        <div className="cart-item-details"><p><h3>Seller</h3><br/>Username: {props.userName} <br/> Phone: {props.userPhone}<br/>
        Email: {props.userEmail}<br/> City: {props.userCity}</p>
        </div>
      </div> 
    )
  } else {
      return (
        <div className="click-product-for-details">
        Select a product to see seller contact details
      </div> 
      )
  }
}