import * as React from 'react'
import '../App.css'
let FontAwesome = require('react-fontawesome');

const categories = ["Toys", "Clothes", "Furniture"]

export default class selectCategory extends React.PureComponent{
    constructor(props){
      super(props)
      this.state = {
        listOpen: false,
      }
    }

    handleClickOutside(){
      this.setState({
        listOpen: false
      })
    }
    toggleList(){
      this.setState(prevState => ({
        listOpen: !prevState.listOpen
      }))
    }

    render(){

      const{listOpen} = this.state
      return (
      <div className = "dd-wrapper" onClick={() => this.toggleList()}>
        <div className="dd-header" >
          <div className="dd-header-title">Product &#9662;</div>
          {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        }
        </div>

        {listOpen && <ul className="dd-list">
          {categories.map((category) => (
          <li onClick = {this.props.chooseCategory} className="dd-list-item" key={category} >{category}</li>
          ))}
        </ul>}
      </div>
    )
  }
}
