import * as React from 'react'
import BuyerPage from './BuyerPage'
import {connect} from 'react-redux';
import {showImage, nextItem, dontWantItem} from '../actions/images'


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
        condition={this.props.images.selectedImage.condition}
        count={this.props.images.cart.length}
        handleClickYes={this.handleClickYesEvent}
        handleClickNo={this.handleClickNoEvent}
        />
        <div>
        </div>
      </div>
    )}   
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, { showImage, nextItem, dontWantItem })(BuyerPageContainer)