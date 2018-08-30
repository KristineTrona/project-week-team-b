import * as React from 'react'
import BuyerPage from './BuyerPage'
import {connect} from 'react-redux';
import {showImage, nextItem, dontWantItem} from '../actions/images'
import { Link } from 'react-router-dom'


class BuyerPageContainer extends React.PureComponent {

  handleClickYesEvent = () => {
    const currentIndex = this.props.images.images.findIndex(x => x.id ===this.props.images.selectedImage.id)
    this.props.nextItem(this.props.images.images, currentIndex )
  }

  handleClickNoEvent = () => {
    const currentIndex = this.props.images.images.findIndex(x => x.id ===this.props.images.selectedImage.id)
    this.props.dontWantItem(this.props.images.images, currentIndex)
  }

  componentDidMount = () =>  {
    this.props.showImage(this.props.images.images)
  }


  render() {
    return(
      <div className = "image-and-buttons-container">
        <BuyerPage 
        title={this.props.images.selectedImage.title}
        url={this.props.images.selectedImage.imageUrl}
        price={this.props.images.selectedImage.price}
        description={this.props.images.selectedImage.description}
<<<<<<< HEAD
        condition={this.props.images.condition}
=======
        condition={this.props.images.selectedImage.condition}
>>>>>>> 55b555aa11a113ce35166dc594ec269142fb5e89
        handleClickYes={this.handleClickYesEvent}
        handleClickNo={this.handleClickNoEvent}
        />
        <div>
        <Link to={'/cart'}><button type="button">Cart</button></Link>
        </div>
      </div>
    )}   
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, { showImage, nextItem, dontWantItem })(BuyerPageContainer)