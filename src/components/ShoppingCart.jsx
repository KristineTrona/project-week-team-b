import * as React from 'react'
import '../cart.css'

export default class ShoppingCart extends React.PureComponent {
  constructor(props) {
    super(props)    
    this.state = {
      
    }
  }


  handleChange = (event) => {
    const value = event.target.value
    const id = event.target.id

    this.setState(
      {
      [id]: value
      }
    )
  }
  
  render() {
    return (
      <div className = "shopping-cart">
        <div className = "cart-info">
          <div className = "cart-items">
            <div className= "cart-left-half">
              <h2>Shopping Cart</h2>
              <div className = "shopping-cart-images">
                {this.props.items.map(item =>
                <img key={item.id} src={item.imageUrl} alt={item.title} onClick={() => this.props.handleImageClick(item.id)}/>
                )}
              </div>
            </div>
            <div className="cart-right-half">
              <div className = "shopping-cart-details">
              <h2>Details</h2>
                <div className="cart-user-details"><p>{this.props.itemTitle}: {this.props.itemDescription}<br/> 
                Price: {this.props.itemPrice}<br/> Condition: {this.props.itemCondition}</p></div>
                <div className="cart-item-details"><h3>Seller</h3><br/><p>Username: {this.props.userName} <br/> Phone: {this.props.userPhone}<br/>
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