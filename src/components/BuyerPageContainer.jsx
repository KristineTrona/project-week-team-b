import * as React from 'react'
import BuyerPage from './BuyerPage'
import Header from './Header'
import {connect} from 'react-redux';
import {showImage, nextItem, dontWantItem} from '../actions/images'
import { Link } from 'react-router-dom'


class BuyerPageContainer extends React.PureComponent {

  handleClickYesEvent = () => {
    this.props.nextItem(this.props.images.selectedImage.id)
    // localStorage.setItem(this.props.images.cart, this.props.images.selectedImage );
  }

  handleClickNoEvent = () => {
    this.props.dontWantItem(this.props.images.selectedImage.id)
  }

  componentDidMount = () =>  {
    this.props.showImage()
  }


  render() {
 
    return(
      <div className = "image-and-buttons-container">
        <Header/>
        <BuyerPage 
        title={this.props.images.selectedImage.title}
        url={this.props.images.selectedImage.imageUrl}
        price={this.props.images.selectedImage.price}
        description={this.props.images.description}
        condition={this.props.images.condition}
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