import * as React from 'react'
import BuyerPage from './BuyerPage'
import {connect} from 'react-redux';
import {showImage} from '../actions/images'
import images from '../lib/dummyData'


class BuyerPageContainer extends React.PureComponent {

  handleClickEvent = () => {
    //console.log(showImage(this.props.images))
  }

  componentDidMount = () => {
    console.log(showImage())
  }


  render() {
    
    return(
      <div className = "image-and-buttons-container">
        <BuyerPage 
        //title={this.props.images.selectedImage.title}
        // url={this.props.images[0].imageUrl}
        // price={this.props.images[0].price}
        // description={this.props.images[0].description}
        // handleClick={this.handleClickEvent}
        />
      </div>
    )}   
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, { showImage })(BuyerPageContainer)