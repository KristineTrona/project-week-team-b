import * as React from 'react'
import ShoppingCart from './ShoppingCart'
import {connect} from 'react-redux';
import {nextItem} from '../actions/images'
import {showContact} from '../actions/users'
import {showCartImageDetails} from '../actions/images'

class ShoppingCartContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  this.displayUserDetails = this.displayUserDetails.bind(this);
  }
  // LOCAL STORAGE ATTEMPT
  // componentWillMount() {
  //   localStorage.getItem('items') && this.setState({
  //     items: JSON.parse(localStorage.getItem('items'))
  //   })
  // }

  // componentDidMount() {
  //   if(!localStorage.getItem('items')){
  //   this.setState({items: this.props.images.cart})}
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem("items", JSON.stringify(nextState.items))
  // }
  selectPizza = (id) => {
    console.log('selected pizza', id)
    this.props.dispatch({
      type: 'SELECT_PIZZA',
      payload: id
    })
  }

  handleImageClick = (id) => {
    const currentId = id
    const currentImage = this.props.images.cart.findIndex(x => x.id ===currentId)
    this.props.showCartImageDetails(this.props.images.cart, currentImage)
    this.displayUserDetails()
  }

  displayUserDetails = () => {
    const currentUser = this.props.users.users.find(user => user.userId===this.props.images.selectedCartImage.userId)
    this.props.showContact(currentUser)
  }

  render() {
 
    return(
      <div>
        <ShoppingCart /*items={this.state.items}*/ items={this.props.images.cart} 
        handleImageClick={this.handleImageClick} displayItemDetails={this.displayItemDetails}
        itemTitle={this.props.images.selectedCartImage.title} itemPrice={this.props.images.selectedCartImage.price} 
        itemCondition={this.props.images.selectedCartImage.condition} 
        itemDescription={this.props.images.selectedCartImage.description}
        userName={this.props.users.currentUser.userName} userCity={this.props.users.currentUser.city}
        userEmail={this.props.users.currentUser.email} userPhone={this.props.users.currentUser.phone}/>
      </div>
    )}  
}

const mapStateToProps = (state) => ({
  images: state.images,
  users: state.users
})


export default connect(mapStateToProps, {nextItem, showContact, showCartImageDetails})(ShoppingCartContainer)