import * as React from 'react'
import SellerPage from './SellerPage'
import {connect} from 'react-redux';


class SellerPageContainer extends React.PureComponent {
  addItem = (item) => {
    this.props.dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: Math.ceil(Math.random()*10000),
        ...item
      }
    })
  }

  render() {
    return <SellerPage addItem={this.addItem} />
  }
  }
  
  
// const mapStateToProps = () => ({
  
// })


export default connect()(SellerPageContainer)








  
