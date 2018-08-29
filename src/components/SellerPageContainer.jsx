import * as React from 'react'
import SellerPage from './SellerPage'
import {connect} from 'react-redux';
import ImageUpload from './ImageUpload'
import { addItem } from '../actions/images'


class SellerPageContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <SellerPage addItem={this.props.addItem} images={this.props.images}/>
        <ImageUpload />
      </div>
    )
  }
}
  
  
const mapStateToProps = (state) => ({
  images: state.images
 })

export default connect(mapStateToProps, {addItem})(SellerPageContainer)








  
