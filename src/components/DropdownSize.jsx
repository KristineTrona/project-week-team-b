import * as React from 'react'
import '../App.css'
const FontAwesome = require('react-fontawesome');

const sizes = ["0-2", "2-4", "4-6", "6+"]

export default class selectSize extends React.PureComponent{
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
      <div className = "dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">Size</div>
          {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        }
        </div>

        {listOpen && <ul className="dd-list">
          {sizes.map((size) => (
          <li onClick = {this.props.chooseSize} className="dd-list-item" key={size} >{size}</li>
          ))}
        </ul>}
      </div>
    )
  }
}