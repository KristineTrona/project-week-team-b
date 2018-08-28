import * as React from 'react'
import BuyerPage from './BuyerPage'
import {connect} from 'react-redux';
import {newImage} from '../actions/images'


class BuyerPageContainer extends React.PureComponent {

  handleClickEvent = () => {
    console.log("hello")
  }

  render() {
    
    return(
      <div className = "image-and-buttons-container">
        <BuyerPage title={this.props.images[0].title}
        url={this.props.images[0].imageUrl}
        price={this.props.images[0].price}
        description={this.props.images[0].description}
        handleClick={this.handleClickEvent}/>
      </div>
    )}   
}

const mapStateToProps = (state) => ({
  images: state.images
})


export default connect(mapStateToProps, { newImage })(BuyerPageContainer)