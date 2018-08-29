import * as React from 'react'
import '../App.css'
const FontAwesome = require('react-fontawesome');

const ages = ["0-2", "2-4", "4-6", "6+"]

export default class selectAge extends React.PureComponent{
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
          <div className="dd-header-title">Age</div>
          {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        }
        </div>

        {listOpen && <ul className="dd-list">
          {ages.map((age) => (
          <li onClick = {this.props.chooseAge} className="dd-list-item" key={age} >{age}</li>
          ))}
        </ul>}
      </div>
    )
  }
}