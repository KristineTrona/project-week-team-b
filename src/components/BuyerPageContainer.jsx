import * as React from 'react'
import BuyerPage from './BuyerPage'
import {connect} from 'react-redux';
import {showImage} from '../actions/images'


class BuyerPageContainer extends React.PureComponent {

  handleClickEvent = () => {
    //console.log(showImage(this.props.images))
  }

  componentDidMount = () =>  {
    this.props.showImage()
  }


  render() {
    console.log(this.props.images.selectedImage)

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