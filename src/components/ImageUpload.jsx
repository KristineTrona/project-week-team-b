import * as React from 'react'
import SellerPage from './SellerPage'
import {connect} from 'react-redux';


class ImageUpload extends React.PureComponent {
  handleChooseImage = (event) => {
      console.log(event)
  }

  handleUploadImage = (event) => {
      console.log(event)
  }

  render() {
    return(
      <div className="imageUpload">
        <input type="file" onChange={this.handleChooseImage}/>  
        <button type="button" onClick={this.handleUploadImage}>Upload Image</button>
      </div>
    )}   
}

const mapStateToProps = () => ({
  
})


export default connect(mapStateToProps, {})(ImageUpload)