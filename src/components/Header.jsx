import * as React from 'react'
import DropdownCategory from './DropdownCategory'
import DropdownGender from './DropdownGender'
import DropdownAge from './DropdownAge'
import DropdownPrice from './DropdownPrice'
import DropdownCondition from './DropdownCondition'
import {connect} from 'react-redux';
import {filterCategory, filterGender, filterAge, filterPrice, showImage} from '../actions/images'


class Header extends React.PureComponent {

  chooseCategory = (event) =>{
    this.props.filterCategory(event.target.textContent.toLowerCase())
  }

  chooseGender = (event) =>{
    this.props.filterGender(event.target.textContent.toLowerCase())
  }

  chooseAge = (event) => {
    this.props.filterAge(event.target.textContent.toLowerCase())
  }

  choosePrice = (event) => {
    this.props.filterPrice(event.target.textContent.toLowerCase())
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
        <DropdownAge chooseAge={this.chooseAge}/>
        <DropdownPrice choosePrice={this.choosePrice}/>
        <DropdownCondition/>
      </div>
    )
  }
}
  
  
const mapStateToProps = (state) => ({
  images: state.images
 })

export default connect(mapStateToProps, {filterCategory, filterGender, filterAge, filterPrice, showImage})(Header)