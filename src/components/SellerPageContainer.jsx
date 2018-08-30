import * as React from 'react'
import SellerPageForm from './SellerPageForm'
import {connect} from 'react-redux';
import { addItem } from '../actions/images'


class SellerPageContainer extends React.PureComponent {
  render() {
    console.log(this.props.images)
    return (
      <div>
        <SellerPageForm addItem={this.props.addItem} images={this.props.images}/>
        {/* <ImageUpload /> */}
      </div>
    )
  }
}
    
const mapStateToProps = (state) => ({
  images: state.images
 })

export default connect(mapStateToProps, {addItem})(SellerPageContainer)








  
