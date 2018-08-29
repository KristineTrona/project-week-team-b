import * as React from 'react'
import DropdownCategory from './DropdownCategory'
import DropdownGender from './DropdownGender'
import DropdownSize from './DropdownSize'
import DropdownPrice from './DropdownPrice'
import DropdownCondition from './DropdownCondition'
import {connect} from 'react-redux';
import {} from '../actions/images'


class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <DropdownCategory/>
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

export default connect(mapStateToProps, {})(Header)