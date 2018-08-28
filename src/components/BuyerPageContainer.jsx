import * as React from 'react'
import BuyerPage from './BuyerPage'
import {connect} from 'react-redux';
import {newImage} from '../actions/images'


class BuyerPageContainer extends React.PureComponent {


  render() {
    return(
      <div>
        {this.props.images.filter(image => {
          if (this.props.images.id === 1) {
          <BuyerPage title={this.props.image}/> }})}
          </div>
        )
}
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, { newImage })(BuyerPageContainer)