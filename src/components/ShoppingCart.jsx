import * as React from 'react'

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
        <div className = "items">
          <h3>Shopping Cart</h3>
          <div className = "shopping-cart-images">
            {this.props.items.map(item =>
            <img key={item.id} src={item.imageUrl} alt={item.title} onClick={() => this.props.handleImageClick(item.id)}/>
            )}
          </div>
        </div>
        <div className = "shopping-cart-details">
          <h3>Details</h3>
          <div className="cart-user-details">{this.props.itemTitle}: {this.props.itemDescription} 
          Price: {this.props.itemPrice}, Condition: {this.props.itemCondition}</div>
          <div className="cart-item-details">{this.props.userName} Phone: {this.props.userPhone},
          Email: {this.props.userEmail} City: {this.props.userCity}
          </div>
        </div>
        <p></p>
      </div>
    )
  }
}