import * as React from 'react'
import '../App.css'
const FontAwesome = require('react-fontawesome');

const prices = ["0", "1-10" , "11-20", "21-30", "31-40", "41-50", "50+"]

export default class selectCPrice extends React.PureComponent{
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
          <div className="dd-header-title">Price &#9662;</div>
          {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        }
        </div>

        {listOpen && <ul className="dd-list">
          {prices.map((price) => (
          <li onClick = {this.props.choosePrice} className="dd-list-item" key={price} >{price}</li>
          ))}
        </ul>}
      </div>
    )
  }
}