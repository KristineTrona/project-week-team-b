import * as React from 'react'
import BuyerPage from './BuyerPage'
import {connect} from 'react-redux';
import {showImage} from '../actions/images'


class BuyerPageContainer extends React.PureComponent {

  handleClickEvent = () => {
    //console.log(nextImage(this.props.images))
  }

  componentDidMount = () =>  {
    this.props.showImage()
  }


  render() {
 
    return(
      <div className = "image-and-buttons-container">
        <BuyerPage 
        title={this.props.images.selectedImage.title}
        url={this.props.images.selectedImage.imageUrl}
        price={this.props.images.selectedImage.price}
        description={this.props.images.description}
        condition={this.props.images.condition}
        handleClick={this.handleClickEvent}
        />
      </div>
    )}   
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, { showImage })(BuyerPageContainer)