import * as React from 'react'
import '../App.css'

export default class ResetButton extends React.PureComponent {
    handleClick = () => {
       this.props.resetFilter()
         }
      
    render() {
        return (<div>
          <button className= "btn-reset" onClick={this.handleClick}>Restore filters</button>
        </div>)
      }
    }