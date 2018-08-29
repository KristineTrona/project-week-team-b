import * as React from 'react'
import DropdownCategory from './DropdownCategory'
import DropdownGender from './DropdownGender'
import DropdownSize from './DropdownSize'
import DropdownPrice from './DropdownPrice'
import DropdownCondition from './DropdownCondition'
import {connect} from 'react-redux';
import {filterCategory, showImage} from '../actions/images'


class Header extends React.PureComponent {

  chooseCategory = (event) =>{
    this.props.filterCategory(event.target.textContent.toLowerCase())
    // console.log(this.props.showImage(this.props.images.images))
    // setInterval(console.log(this.props.images.images),1000)
  }

  // chooseCategory = (event) =>{
  //     this.props.filterCategory(event.target.textContent.toLowerCase())
  //     .then ((response) => console.log(this.props.showImage(response)))
  //   }

  // chooseCategory = (event) =>{
  //   return new Promise(() => this.props.filterCategory(event.target.textContent.toLowerCase()))
  //   .then((value) => this.props.showImage(value))
  // }


  componentDidUpdate = (prevProps) => {
    if (this.props.images.images !== prevProps.images.images) {
      this.props.showImage(this.props.images.images)
    }
  }


  render() {
    return (
      <div>
        <DropdownCategory chooseCategory={this.chooseCategory}/>
        <DropdownGender/>
        <DropdownSize/>
        <DropdownPrice/>
        <DropdownCondition/>
      </div>
    )
  }
}
  
  
const mapStateToProps = (state) => ({
  images: state.images
 })

export default connect(mapStateToProps, {filterCategory, showImage})(Header)