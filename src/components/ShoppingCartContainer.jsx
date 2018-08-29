import * as React from 'react'
import ShoppingCart from './ShoppingCart'
import {connect} from 'react-redux';
import {nextItem} from '../actions/images'

class ShoppingCartContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  
  componentWillMount() {
    localStorage.getItem('items') && this.setState({
      items: JSON.parse(localStorage.getItem('items'))
    })
  }

  componentDidMount() {
    if(!localStorage.getItem('items')){
    this.setState({items: this.props.images.cart})}
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("items", JSON.stringify(nextState.items))
  }

  render() {
 
    return(
      <div>
        <ShoppingCart items={this.state.items}/>
        {console.log(this.state.items)}
      </div>
    )}  
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, {nextItem})(ShoppingCartContainer)