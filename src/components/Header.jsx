import * as React from 'react'
import DropdownCategory from './DropdownCategory'
import DropdownGender from './DropdownGender'
import DropdownSize from './DropdownSize'
import DropdownPrice from './DropdownPrice'
import DropdownCondition from './DropdownCondition'
import {connect} from 'react-redux';
import {filterCategory} from '../actions/images'


class Header extends React.PureComponent {

  chooseCategory = (event) =>{
    console.log(this.props.filterCategory(event.target.textContent.toLowerCase()))
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

export default connect(mapStateToProps, {filterCategory})(Header)