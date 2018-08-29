import * as React from 'react'
import Logo_1 from '../lib/images/Logo_1.svg'


export default class Header extends React.PureComponent{
  
  
  render(){
    return (
      <div className="header">
        <img src={Logo_1} alt="logo"/>
        <div className="title">
          <h1>Kid to Kid</h1>
        </div>
      </div>
    )
  }
}
