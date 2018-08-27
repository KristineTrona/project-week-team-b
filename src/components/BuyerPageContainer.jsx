import * as React from 'react'
import BuyerPage from './BuyerPage'
import {connect} from 'react-redux';
import {newImage} from '../actions/images'


class BuyerPageContainer extends React.PureComponent {


  render() {
      <div>
        <BuyerPage title="Hello!"/>
      </div>
      }   
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, { newImage })(BuyerPageContainer)