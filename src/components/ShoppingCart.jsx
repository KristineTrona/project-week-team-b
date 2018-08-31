import * as React from 'react'
import '../cart.css'
import  ItemSellerDescription  from './ItemSellerDescription'
import CartClickForDetails from './CartClickForDetails'

export default class ShoppingCart extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  render() {
    // if (this.state.itemOwner.userId) {
    return (
      <div className = "shopping-cart">
        <div className = "cart-info">
          <div className = "cart-items">
            <div className= "cart-left-half">
              <h2>Shopping Cart</h2>
              <div className="cart-images-wrapper">
              <div className = "shopping-cart-images" >
                {this.props.items.map(item =>
                <img id={item.id} key={item.id} src={item.imageUrl} alt={item.title} 
                onClick={() => this.props.handleImageClick(item.id)}/>
                )}
              </div>
            </div>
            </div>
            <div className="cart-right-half">
              <h2>Details</h2>
              <div className = "shopping-cart-details">
                <ItemSellerDescription items={this.props.items} 
                  handleImageClick={this.handleImageClick} displayItemDetails={this.displayItemDetails}
                  itemTitle={this.props.itemTitle} itemPrice={this.props.itemPrice} 
                  itemCondition={this.props.itemCondition} 
                  itemDescription={this.props.itemDescription}
                  userName={this.props.userName} userCity={this.props.userCity}
                  userEmail={this.props.userEmail} userPhone={this.props.userPhone}
                  currentUser={this.props.currentUser} currentItem={this.props.currentItem}/>
              </div>
            </div>
          </div>  
        </div>  
      </div>
    )
  }
}
//   } else {
//     return (
//       <div className = "shopping-cart">
//         <div className = "cart-info">
//           <div className = "cart-items">
//             <div className= "cart-left-half">
//               <h2>Shopping Cart</h2>
//               <div className = "shopping-cart-images">
//                 {this.props.items.map(item =>
//                 <img key={item.id} src={item.imageUrl} alt={item.title} onClick={() => this.props.handleImageClick(item.id)}/>
//                 )}
//               </div>
//             </div>
//             <div className="cart-right-half">
//               <div className = "shopping-cart-details">
//               <h2>Select a product to see more details and seller contact information</h2>
//               </div>
//             </div>
//           </div>  
//         </div>  
//       </div>      
//     )

//   }
// }}