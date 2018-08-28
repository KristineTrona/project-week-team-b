import * as React from 'react'
import SellerPage from './SellerPage'
import {connect} from 'react-redux';
import ImageUpload from './ImageUpload'

class SellerPageContainer extends React.PureComponent {


  render() {
    return(
      <div>
        <SellerPage title="Hello!"/>
        <ImageUpload />
      </div>
    )}   
}

const mapStateToProps = () => ({
  
})


export default connect(mapStateToProps, {})(SellerPageContainer)