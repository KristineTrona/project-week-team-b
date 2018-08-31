import * as React from 'react'
import '../cart.css'

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
              <div className = "shopping-cart-images" >
                {this.props.items.map(item =>
                <img key={item.id} src={item.imageUrl} alt={item.title} onClick={() => this.props.handleImageClick(item.id)}/>
                )}
              </div>
            </div>
            <div className="cart-right-half">
              <h2>Details</h2>
              <div className = "shopping-cart-details">
              <div className="cart-user-details"><p><img className="selected-cart-item" src={this.props.currentItem} alt={this.props.itemTitle}/><br/>
                {this.props.itemTitle}: {this.props.itemDescription}<br/> 
                Price: {this.props.itemPrice}<br/> Condition: {this.props.itemCondition}</p></div>
                <div className="cart-item-details"><p><h3>Seller</h3><br/>Username: {this.props.userName} <br/> Phone: {this.props.userPhone}<br/>
                Email: {this.props.userEmail}<br/> City: {this.props.userCity}</p>
                </div>
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