import * as React from 'react'
import '../App.css'
const FontAwesome = require('react-fontawesome');

const prices = ["0", "0-25" , "25-50", "50-75", "75-100", "100+"]

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
      <div className = "dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">Price</div>
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