import * as React from 'react'
import Logo_1 from '../lib/images/Logo_1.svg'


export default class Header extends React.PureComponent{
  
  
  render(){
    return (
      <div className="header">
        <img src={Logo_1} alt="logo"/>
        <div className="title">
          <h1>
            <span style={{color: "#7cba5b"}}>Kid </span>
            <span style={{color: "#464c43"}}>to </span>
            <span style={{color: '#d14e3a'}}>Kid </span>
          </h1>
        </div>
      </div>
    )
  }
}
