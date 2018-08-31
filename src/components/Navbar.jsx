import * as React from 'react'
import DropdownCategory from './DropdownCategory'
import DropdownGender from './DropdownGender'
import DropdownAge from './DropdownAge'
import DropdownPrice from './DropdownPrice'
import DropdownCondition from './DropdownCondition'
import ResetButton from './ResetButton'
import {connect} from 'react-redux';
import {filterCategory, filterGender, filterAge, filterPrice, filterCondition, resetFilter, showImage} from '../actions/images'


class Navbar extends React.PureComponent {

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

  chooseCondition = (event) => {
    this.props.filterCondition(event.target.textContent.toLowerCase())
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.images.images !== prevProps.images.images) {
      this.props.showImage(this.props.images.images)
    }
  }

  render() {
    return (
      <div className = "navbar">
        <DropdownCategory chooseCategory={this.chooseCategory}/>
        <DropdownGender chooseGender={this.chooseGender}/>
        <DropdownAge chooseAge={this.chooseAge}/>
        <DropdownPrice choosePrice={this.choosePrice}/>
        <DropdownCondition chooseCondition={this.chooseCondition}/>
        <ResetButton showImage={this.props.showImage} resetFilter={this.props.resetFilter}/>
      </div>
    )
  }
}
  
  
const mapStateToProps = (state) => ({
  images: state.images
 })

export default connect(mapStateToProps, {filterCategory, filterGender, filterAge, filterPrice, filterCondition, resetFilter, showImage})(Navbar)



 // choosePrice = (event) => {
  //   let itemPrice = event.target.textContent.toLowerCase()
    
  //   if(itemPrice === "0"){
  //     this.props.filterPrice(this.props.images.images.filter(item => item.price===0))
  //   } 
  //   else if (itemPrice === "1-10"){
  //     this.props.filterPrice(this.props.images.images.filter(item => item.price>0 && item.price <= 10))
  //   }
  //   else if (itemPrice === "11-20"){
  //     this.props.filterPrice(this.props.images.images.filter(item => item.price>10 && item.price <= 20))
  //   }
  //   else if (itemPrice === "21-30"){
  //     this.props.filterPrice(this.props.images.images.filter(item => item.price>20 && item.price <= 30))
  //   }
  //   else if (itemPrice === "31-40"){
  //     this.props.filterPrice(this.props.images.images.filter(item => item.price>30 && item.price <= 40))
  //   }
  //   else if (itemPrice === "41-50"){
  //     this.props.filterPrice(this.props.images.images.filter(item => item.price>40 && item.price <= 50))
  //   }
  //   else if (itemPrice === "50+"){
  //     this.props.filterPrice(this.props.images.images.filter(item => item.price > 50))
  //   }
  // }