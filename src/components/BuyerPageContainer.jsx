import * as React from 'react'
import BuyerPage from './BuyerPage'
import {connect} from 'react-redux';
import {showImage, nextItem, dontWantItem} from '../actions/images'


class BuyerPageContainer extends React.PureComponent {

  handleClickYesEvent = () => {
    if(this.props.images.images.length-1===this.props.images.images.findIndex(x => x.id ===this.props.images.selectedImage.id)){
      this.changeLastImage()
    } else{
    const currentIndex = this.props.images.images.findIndex(x => x.id ===this.props.images.selectedImage.id)
    this.props.nextItem(this.props.images.images, currentIndex )
     this.appearing()
      }
    }
  
  
  appearing = () => {
    const newPurchase = document.getElementsByClassName("item-added-text")[0]
    newPurchase.innerHTML = "The item has succesfully been added to your cart!";
    setTimeout(function(){ 
        newPurchase.innerHTML = "";
    }, 1500);
  }
  
  
  changeLastImage = () => {
    let lastImage = document.getElementsByClassName("product-container")[0]
    lastImage.innerHTML = "We currently do not have any more items in this category. Please select a different category to continue shopping!"
  }

  handleClickNoEvent = () => {
    if(this.props.images.images.length-1===this.props.images.images.findIndex(x => x.id ===this.props.images.selectedImage.id)){
      this.changeLastImage()
    } else{
    const currentIndex = this.props.images.images.findIndex(x => x.id ===this.props.images.selectedImage.id)
    this.props.dontWantItem(this.props.images.images, currentIndex)
    }
  }

  componentDidMount = () =>  {
    this.props.showImage(this.props.images.images)
  }

  allowDrop= (ev) => {
    ev.preventDefault();
}

  render() {
    return(
      <div className="buyer-page-container">
        <BuyerPage 
        title={this.props.images.selectedImage.title}
        url={this.props.images.selectedImage.imageUrl}
        price={this.props.images.selectedImage.price}
        description={this.props.images.selectedImage.description}
        condition={this.props.images.selectedImage.condition}
        count={this.props.images.cart.length}
        handleClickYes={this.handleClickYesEvent}
        handleClickNo={this.handleClickNoEvent}
        allowDrop={this.allowDrop}
        />
        </div>
    )}   
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, { showImage, nextItem, dontWantItem })(BuyerPageContainer)