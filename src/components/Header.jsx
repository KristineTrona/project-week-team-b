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
  }

  chooseGender = (event) =>{
    this.props.filterCategory(event.target.textContent.toLowerCase())
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.images.images !== prevProps.images.images) {
      this.props.showImage(this.props.images.images)
    }
  }

  render() {
    return (
      <div className = "header-container">
        <DropdownCategory chooseCategory={this.chooseCategory}/>
        <DropdownGender chooseGender={this.chooseGender}/>
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