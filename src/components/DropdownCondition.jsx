import * as React from 'react'
import '../App.css'
const FontAwesome = require('react-fontawesome');

const conditions = ["Acceptable", "Used", "As good as new", "Brand new"]

export default class selectCondition extends React.PureComponent{
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
        <div className="dd-header">
          <div className="dd-header-title">Condition &#9662;</div>
          {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        }
        </div>

        {listOpen && <ul className="dd-list">
          {conditions.map((condition) => (
          <li onClick = {this.props.chooseCondition} className="dd-list-item" key={condition} >{condition}</li>
          ))}
        </ul>}
      </div>
    )
  }
}