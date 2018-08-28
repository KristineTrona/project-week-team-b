import * as React from 'react'
import BuyerPage from './BuyerPage'
import ButtonLeft from './ButtonLeft'
import ButtonRight from './ButtonRight'
import {connect} from 'react-redux';
import {newImage} from '../actions/images'


class BuyerPageContainer extends React.PureComponent {

  handleClickEvent = (image) =>{
    console.log(image.id++)
  }

  render() {
    
    return(
      <div className = "image-and-buttons-container">
        {/* <ButtonLeft/> */}
        <BuyerPage title={this.props.images.image.title}
        url={this.props.images.image.imageUrl}
        price={this.props.images.image.price}
        description={this.props.images.image.description}
        handleClick={this.handleClickEvent(this.props.images.image)}/>
        {/* <ButtonRight/> */}
      </div>
    )}   
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, { newImage })(BuyerPageContainer)