import * as React from 'react'
import SellerPage from './BuyerPage'
import {connect} from 'react-redux';


class SellerPageContainer extends React.PureComponent {


  render() {
    return(
      <div>
        <SellerPage title="Hello!"/>
      </div>
    )}   
}

const mapStateToProps = () => ({
  
})


export default connect(mapStateToProps, {})(SellerPageContainer)