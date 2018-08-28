import * as React from 'react'
import ShoppingCart from './ShoppingCart'
import {connect} from 'react-redux';
import {nextItem} from '../actions/images'

class ShoppingCartContainer extends React.PureComponent {


  render() {
 
    return(
      <div>
        <ShoppingCart items={this.props.images.cart}/>
      </div>
    )}  
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, {nextItem})(ShoppingCartContainer)